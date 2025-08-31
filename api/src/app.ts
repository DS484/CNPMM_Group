import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db'
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'
import productRoutes from './routes/productRoutes'
import { errorHandlingMiddleware } from './middleware/error-handler.midleware'

dotenv.config()
;(async () => {
  await connectDB()
})()

const app = express()

app.use(
  cors({
    origin: true, // Cho phép mọi origin trong môi trường phát triển
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Auth
app.use('/api/auth', authRoutes)

// User
app.use('/api/users', userRoutes)

// Product
app.use('/api/products', productRoutes)

app.use(errorHandlingMiddleware)

export default app
