import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  id: string
  name: string
  email: string
  avatarUrl?: string
  location?: string
  bio?: string
  phone?: string
  password?: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatarUrl: { type: String },
    location: { type: String },
    bio: { type: String },
    phone: { type: String },
    password: { type: String }
  },
  { timestamps: true }
)

export default mongoose.model<IUser>('User', userSchema)
