import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db'
import userRoutes from './routes/userRoutes'

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

app.use('/api/users', userRoutes)

export default app
