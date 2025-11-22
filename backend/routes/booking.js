import express from "express"
import { authenticate } from "./../auth/verifyToken.js"
import { 
  getCheckoutSession, 
  handleStripeWebhook,
  getBookingSession,
  createBooking
} from "../controllers/bookingController.js"

const router = express.Router()

// Public webhook endpoint (no auth needed)
router.post("/webhook", handleStripeWebhook)

// Protected routes
router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession)
router.get("/session/:sessionId", authenticate, getBookingSession)
router.post("/create", authenticate, createBooking)

export default router;