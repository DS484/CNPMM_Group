import mongoose, { Document, Schema } from 'mongoose'

export interface IProduct extends Document {
  id: string
  name: string
  description?: string
  category: string
  brand?: string
  price: number
  discount?: number
  images: string[]
  stock: number
  sold: number
  rating: number
  ratingCount: number
  isBestSeller?: boolean
  isNew: boolean
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}

const productSchema = new Schema<IProduct>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    images: { type: [String], default: [] },
    stock: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    isBestSeller: { type: Boolean, default: false },
    tags: { type: [String], default: [] }
  },
  { timestamps: true }
)

export default mongoose.model<IProduct>('Product', productSchema)
