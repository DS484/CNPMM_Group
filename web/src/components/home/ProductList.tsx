import React from 'react'
import ProductCard, { Product } from './ProductCard'

interface ProductListProps {
  title: string
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)

export default ProductList
