import React, { useState } from 'react'

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(true)
    setEmail('')
  }
  return (
    <div className="mb-16">
      <div className="rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-lg">Đăng ký nhận tin mới</h2>
          <p className="text-white/80 mb-4">Nhận thông báo về ưu đãi, sản phẩm mới và xu hướng hot nhất!</p>
        </div>
        <form className="flex-1 flex flex-col md:flex-row gap-4 items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Nhập email của bạn..."
            className="py-3 px-4 rounded-full bg-white/80 text-lg shadow-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-full md:w-auto"
          />
          <button type="submit" className="px-6 py-3 rounded-full bg-yellow-300 text-pink-700 font-bold shadow-lg hover:bg-yellow-400 transition-all">
            Đăng ký
          </button>
        </form>
        {success && <div className="text-white font-semibold mt-2">Đã đăng ký thành công!</div>}
      </div>
    </div>
  )
}

export default SubscribeSection
