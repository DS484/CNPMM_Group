export interface ProductDto {
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
  tags?: string[]
  createdAt: Date
}
