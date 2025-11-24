import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

// Normalize data to convert ObjectId to string
const normalizeData = (data) => {
  const obj = data.toObject ? data.toObject() : data;
  return {
    ...obj,
    _id: obj._id?.toString(),
    doctor: typeof obj.doctor === 'object' ? obj.doctor._id?.toString() : obj.doctor?.toString(),
    user: typeof obj.user === 'object' ? obj.user._id?.toString() : obj.user?.toString(),
  };
};

export const getCheckoutSession = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const userId = req.userId;

        // Validate inputs
        if (!doctorId || !userId) {
            return res.status(400).json({
                success: false,
                message: "ID bác sĩ hoặc ID người dùng không hợp lệ"
            });
        }

        // Fetch doctor and user data
        const doctor = await Doctor.findById(doctorId).select("-password");
        const user = await User.findById(userId).select("-password");

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy bác sĩ"
            });
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy người dùng"
            });
        }

        // Initialize Stripe
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        // Calculate amount (convert to cents)
        const amount = Math.round(doctor.ticketPrice * 100);

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success?sessionId={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_SITE_URL}/doctors/${doctorId}`,
            customer_email: user.email,
            client_reference_id: doctorId.toString(),
            metadata: {
                doctorId: doctorId.toString(),
                userId: userId.toString(),
            },
            line_items: [
                {
                    price_data: {
                        currency: "vnd",
                        unit_amount: amount,
                        product_data: {
                            name: `Lịch khám với ${doctor.name}`,
                            description: doctor.specialization || "Dịch vụ khám chuyên khoa",
                            images: doctor.photo ? [doctor.photo] : [],
                        },
                    },
                    quantity: 1,
                },
            ],
        });

        res.status(200).json({
            success: true,
            message: "Tạo phiên thanh toán thành công",
            session: {
                id: session.id,
                url: session.url,
            },
        });

    } catch (error) {
        console.error("Stripe checkout error:", error);
        res.status(500).json({
            success: false,
            message: "Lỗi tạo phiên giao dịch. Vui lòng thử lại sau."
        });
    }
};

// Handle successful payment webhook
export const handleStripeWebhook = async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        console.error("Webhook signature verification failed:", error);
        return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            const { doctorId, userId } = session.metadata;

            // Create booking record
            const booking = new Booking({
                doctor: doctorId,
                user: userId,
                ticketPrice: session.amount_total / 100,
                isPaid: true,
                status: "approved",
            });

            await booking.save();

            console.log("Booking created successfully:", booking);
        }

        res.status(200).json({ received: true });
    } catch (error) {
        console.error("Webhook processing error:", error);
        res.status(500).json({ error: "Webhook processing failed" });
    }
};

// Get booking session details
export const getBookingSession = async (req, res) => {
    try {
        const { sessionId } = req.params;

        if (!sessionId) {
            return res.status(400).json({
                success: false,
                message: "Session ID không hợp lệ"
            });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        res.status(200).json({
            success: true,
            data: {
                id: session.id,
                status: session.payment_status,
                amount: session.amount_total / 100,
                email: session.customer_email,
            },
        });

    } catch (error) {
        console.error("Get session error:", error);
        res.status(500).json({
            success: false,
            message: "Lỗi lấy thông tin phiên thanh toán"
        });
    }
};

// Create booking manually (for testing or other purposes)
export const createBooking = async (req, res) => {
    try {
        const { doctorId, ticketPrice } = req.body;
        const userId = req.userId;

        if (!doctorId || !ticketPrice) {
            return res.status(400).json({
                success: false,
                message: "Thông tin không đầy đủ"
            });
        }

        const booking = new Booking({
            doctor: doctorId,
            user: userId,
            ticketPrice,
            isPaid: false,
            status: "pending",
        });

        await booking.save();

        const normalizedBooking = normalizeData(booking);

        res.status(201).json({
            success: true,
            message: "Lịch khám được tạo thành công",
            data: normalizedBooking,
        });

    } catch (error) {
        console.error("Create booking error:", error);
        res.status(500).json({
            success: false,
            message: "Lỗi tạo lịch khám"
        });
    }
};
