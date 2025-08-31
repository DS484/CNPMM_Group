import React from 'react'

const Banner: React.FC = () => (
  <div className="w-full h-72 md:h-96 flex items-center justify-center rounded-3xl mb-10 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 animate-gradient-x opacity-80"></div>
    <div className="absolute inset-0 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/30"></div>
    <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl tracking-tight animate-fade-in">
        Chào mừng đến với <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400">ModernShop</span>
      </h1>
      <p className="text-lg md:text-2xl text-white/80 text-center font-medium animate-fade-in delay-200">
        Khám phá xu hướng mới, sản phẩm hot nhất và trải nghiệm mua sắm tuyệt vời!
      </p>
      <a href="#products" className="mt-4 px-6 py-3 rounded-full bg-white/80 text-blue-600 font-bold shadow-lg hover:bg-white transition-all animate-fade-in delay-400">
        Khám phá ngay
      </a>
    </div>
  </div>
)

export default Banner
