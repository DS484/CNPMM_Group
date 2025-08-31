import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
  { name: 'Điện thoại', image: '/public/placeholder.svg' },
  { name: 'Laptop', image: '/public/placeholder.svg' },
  { name: 'Phụ kiện', image: '/public/placeholder.svg' },
  { name: 'Thời trang', image: '/public/placeholder.svg' }
]

const Category: React.FC = () => (
  <div className="mb-12">
    <h2 className="text-3xl font-extrabold mb-6 text-blue-600 drop-shadow-lg">Danh mục nổi bật</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {categories.map((cat, idx) => (
        <Card key={idx} className="flex flex-col items-center py-6 px-2 cursor-pointer rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <CardContent className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-lg">
              <img src={cat.image} alt={cat.name} className="h-14 w-14 object-contain" />
            </div>
            <span className="font-bold text-lg text-blue-600 text-center">{cat.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)

export default Category
