import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export interface Product {
  id: string
  name: string
  image: string
  price: number
  rating: number
  isNew?: boolean
  isBestSeller?: boolean
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/30 hover:scale-105">
    <CardContent className="p-4 flex flex-col gap-3">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-36 w-full object-cover rounded-xl" />
        {product.isNew && <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">Mới</span>}
        {product.isBestSeller && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">Bán chạy</span>}
      </div>
      <h3 className="font-extrabold text-lg truncate text-blue-700 drop-shadow-lg">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-pink-600">{product.price.toLocaleString()}₫</span>
        <span className="flex items-center gap-1 text-yellow-500 text-base font-semibold">
          <Star className="h-5 w-5" /> {product.rating}
        </span>
      </div>
    </CardContent>
  </Card>
)

export default ProductCard
