import React from 'react'

const brands = [
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg' }
]

const BrandSection: React.FC = () => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6 drop-shadow-lg">Thương hiệu nổi bật</h2>
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {brands.map((b, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <img src={b.logo} alt={b.name} className="h-12 w-auto object-contain drop-shadow-lg grayscale hover:grayscale-0 transition duration-300" />
          <span className="text-sm font-semibold text-gray-700">{b.name}</span>
        </div>
      ))}
    </div>
  </div>
)

export default BrandSection
