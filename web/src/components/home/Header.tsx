import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'

const Header: React.FC = () => {
  const [user, setUser] = useState<{ name: string; avatar?: string, id?: string } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/api/users/me", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log("👉 User data từ API:", data);  // 👈 in ra toàn bộ response
          if (data) {
            setUser({ name: data.user.name, avatar: data?.user?.avatar, id: data?.user?._id });
            console.log('user', user)
          } else {
            setUser(null);
          }
        })
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, [])

  // Đóng menu khi click ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/")
  }

  return (
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
          {user ? (
            <div className="relative" ref={menuRef}>
              <button
                className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {user.avatar ? (
                  <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <User className="h-7 w-7 text-blue-600" />
                )}
                <span className="font-semibold text-blue-700">{user.name}</span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <Link
                    to="/profile"
                    state={{ userId: user.id }}
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-blue-50">Đơn hàng của tôi</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="group bold font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Đăng nhập
            </Link>
          )}
        </div>
        {/* Responsive menu cho mobile */}
        <nav className="md:hidden flex gap-4 ml-4">
          <Link to="/category" className="hover:text-blue-500 font-semibold transition">Danh mục</Link>
          <Link to="/best-seller" className="hover:text-blue-500 font-semibold transition">Bán chạy</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
