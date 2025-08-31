import React from 'react'

const Footer: React.FC = () => (
  <footer className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-white py-8 mt-16 shadow-2xl">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-extrabold text-xl drop-shadow-lg">ModernShop &copy; {new Date().getFullYear()}</div>
      <div className="flex gap-8 text-base">
        <a href="#" className="hover:underline hover:text-yellow-300 transition">Chính sách bảo mật</a>
        <a href="#" className="hover:underline hover:text-yellow-300 transition">Điều khoản sử dụng</a>
        <a href="#" className="hover:underline hover:text-yellow-300 transition">Liên hệ</a>
      </div>
    </div>
  </footer>
)

export default Footer
