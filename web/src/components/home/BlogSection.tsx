import React from 'react'

const blogs = [
  {
    title: 'Top 10 sản phẩm công nghệ hot 2025',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'Khám phá những sản phẩm công nghệ được yêu thích nhất năm nay.'
  },
  {
    title: 'Bí quyết săn sale hiệu quả',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Hướng dẫn săn sale, nhận ưu đãi lớn khi mua sắm online.'
  },
  {
    title: 'Review giày Nike Air mới nhất',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    desc: 'Đánh giá chi tiết về mẫu giày Nike Air hot trend.'
  }
]

const BlogSection: React.FC = () => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6 drop-shadow-lg">Blog & Review mới nhất</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((b, idx) => (
        <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-lg border border-white/30 hover:scale-105 transition-all duration-300">
          <img src={b.image} alt={b.title} className="h-40 w-full object-cover" />
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-bold text-lg text-blue-700 truncate">{b.title}</h3>
            <p className="text-base text-gray-700">{b.desc}</p>
            <a href="#" className="text-pink-600 font-semibold hover:underline">Đọc tiếp</a>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default BlogSection
