import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db'
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'

dotenv.config()
connectDB()

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Auth
app.use('/api/auth', authRoutes)

// User
app.use('/api/users', userRoutes)

export default app
