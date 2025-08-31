import React, { useEffect, useState } from 'react'
import ProductCard, { Product } from './ProductCard'

const dealProducts: Product[] = [
  { id: 'd1', name: 'Loa Bluetooth JBL', image: '/public/placeholder.svg', price: 990000, rating: 4.8 },
  { id: 'd2', name: 'Tai nghe Sony WH-1000XM4', image: '/public/placeholder.svg', price: 4990000, rating: 4.9 },
  { id: 'd3', name: 'Đồng hồ Garmin', image: '/public/placeholder.svg', price: 3990000, rating: 4.7 }
]

const getTimeLeft = () => {
  const now = new Date()
  const end = new Date()
  end.setHours(23, 59, 59, 999)
  const diff = end.getTime() - now.getTime()
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

const TodayDeal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 drop-shadow-lg">Ưu đãi hôm nay</h2>
        <span className="bg-yellow-300 text-pink-700 font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">Kết thúc sau: {timeLeft}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dealProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

export default TodayDeal
