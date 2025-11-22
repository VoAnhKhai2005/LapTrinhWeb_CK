import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDB } from './config/db.js'
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import doctorRoute from "./routes/doctor.js"
import reviewRoute from "./routes/review.js"
import bookingRoute from "./routes/booking.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
  origin: true
}

app.get('/', (req, res) => {
  res.send("Api đang hoạt động")
})

// Webhook route BEFORE json middleware (needs raw body)
app.post('/api/v1/bookings/webhook', express.raw({type: 'application/json'}), bookingRoute)

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

// routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/bookings', bookingRoute)


// connectDB and listen
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
  })
})

