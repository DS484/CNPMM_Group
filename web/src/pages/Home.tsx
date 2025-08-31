import React from 'react'
import Banner from '@/components/home/Banner'
import Feature from '@/components/home/Feature'
import Category from '@/components/home/Category'
import ProductList from '@/components/home/ProductList'
import { Product } from '@/components/home/ProductCard'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
// ...existing code...

// Dữ liệu mẫu cho demo
const newProducts: Product[] = [
  { id: '1', name: 'iPhone 15 Pro', image: '/public/placeholder.svg', price: 29990000, rating: 4.9, isNew: true },
  { id: '2', name: 'MacBook Air M2', image: '/public/placeholder.svg', price: 24990000, rating: 4.8, isNew: true },
  { id: '3', name: 'Tai nghe AirPods Pro', image: '/public/placeholder.svg', price: 5990000, rating: 4.7, isNew: true },
  { id: '4', name: 'Áo thun Uniqlo', image: '/public/placeholder.svg', price: 299000, rating: 4.6, isNew: true }
]

const bestSellerProducts: Product[] = [
  { id: '5', name: 'Samsung Galaxy S23', image: '/public/placeholder.svg', price: 21990000, rating: 4.8, isBestSeller: true },
  { id: '6', name: 'Dell XPS 13', image: '/public/placeholder.svg', price: 27990000, rating: 4.7, isBestSeller: true },
  { id: '7', name: 'Giày Nike Air', image: '/public/placeholder.svg', price: 3990000, rating: 4.8, isBestSeller: true },
  { id: '8', name: 'Balo Herschel', image: '/public/placeholder.svg', price: 1599000, rating: 4.7, isBestSeller: true }
]

const topRatedProducts: Product[] = [
  { id: '9', name: 'Kindle Paperwhite', image: '/public/placeholder.svg', price: 3990000, rating: 5.0 },
  { id: '10', name: 'Apple Watch Series 8', image: '/public/placeholder.svg', price: 11990000, rating: 4.9 },
  { id: '11', name: 'Áo khoác Adidas', image: '/public/placeholder.svg', price: 899000, rating: 4.9 },
  { id: '12', name: 'Loa JBL Charge 5', image: '/public/placeholder.svg', price: 3490000, rating: 4.9 }
]

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12 pt-28 flex flex-col gap-12">
        <Banner />
        <Feature />
        <Category />
        <ProductList title="Sản phẩm mới" products={newProducts} />
        <ProductList title="Bán chạy nhất" products={bestSellerProducts} />
        <ProductList title="Được đánh giá cao" products={topRatedProducts} />
      </div>
      <Footer />
    </>
  )
}

export default Home
