import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ShoppingCart, Star, Truck } from 'lucide-react'

const features = [
  { icon: <ShoppingCart className="h-8 w-8 text-blue-500" />, title: 'Mua sắm dễ dàng', desc: 'Trải nghiệm mua sắm nhanh chóng, tiện lợi.' },
  { icon: <Truck className="h-8 w-8 text-green-500" />, title: 'Giao hàng toàn quốc', desc: 'Giao hàng nhanh, bảo đảm đến mọi nơi.' },
  { icon: <Star className="h-8 w-8 text-yellow-500" />, title: 'Đánh giá cao', desc: 'Sản phẩm được khách hàng tin tưởng.' }
]

const Feature: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {features.map((f, idx) => (
      <Card key={idx} className="flex flex-col items-center py-8 px-4 shadow-xl rounded-2xl bg-white/60 backdrop-blur-lg border border-white/30 hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <CardContent className="flex flex-col items-center gap-3">
          <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-lg animate-pulse">
            {f.icon}
          </div>
          <h3 className="font-extrabold text-xl text-blue-600 drop-shadow-lg text-center">{f.title}</h3>
          <p className="text-base text-gray-700 text-center font-medium">{f.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default Feature
