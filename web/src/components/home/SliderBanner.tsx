import React, { useState, useEffect } from 'react'

const banners = [
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Khuyến mãi lớn cuối năm',
    desc: 'Giảm giá đến 50% cho các sản phẩm hot!'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'Sản phẩm mới ra mắt',
    desc: 'Khám phá bộ sưu tập mới nhất 2025.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    title: 'Đổi trả miễn phí',
    desc: 'Yên tâm mua sắm với chính sách đổi trả linh hoạt.'
  }
]

const SliderBanner: React.FC = () => {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % banners.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl mb-10 relative">
      {banners.map((b, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${active === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent flex flex-col justify-center items-center gap-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center animate-fade-in">
              {b.title}
            </h2>
            <p className="text-lg md:text-2xl text-white/80 text-center font-medium animate-fade-in delay-200">
              {b.desc}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${active === idx ? 'bg-white' : 'bg-white/40'} border border-white shadow`}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderBanner
