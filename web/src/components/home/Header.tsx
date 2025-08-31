import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'

const Header: React.FC = () => (
  <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 tracking-tight drop-shadow-lg">
        ModernShop
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:text-blue-500 font-semibold transition">Trang chủ</Link>
        <Link to="/category" className="hover:text-blue-500 font-semibold transition">Danh mục</Link>
        <Link to="/best-seller" className="hover:text-blue-500 font-semibold transition">Bán chạy</Link>
        <Link to="/top-rated" className="hover:text-blue-500 font-semibold transition">Đánh giá cao</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative group">
          <ShoppingCart className="h-7 w-7 text-blue-600 group-hover:scale-110 transition" />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce">2</span>
        </Link>
        <Link to="/profile" className="group">
          <User className="h-7 w-7 text-blue-600 group-hover:scale-110 transition" />
        </Link>
      </div>
      {/* Responsive menu cho mobile */}
      <nav className="md:hidden flex gap-4 ml-4">
        <Link to="/category" className="hover:text-blue-500 font-semibold transition">Danh mục</Link>
        <Link to="/best-seller" className="hover:text-blue-500 font-semibold transition">Bán chạy</Link>
      </nav>
    </div>
  </header>
)

export default Header
