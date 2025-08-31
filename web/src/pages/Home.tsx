
import React, { useEffect, useState } from 'react';
import Banner from '@/components/home/Banner';
import Feature from '@/components/home/Feature';
import Category from '@/components/home/Category';
import ProductList from '@/components/home/ProductList';
import { Product } from '@/components/home/ProductCard';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import {
  fetchNewestProducts,
  fetchBestSellerProducts,
  fetchMostViewedProducts
} from '@/service/productService';

const Home: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [bestSellerProducts, setBestSellerProducts] = useState<Product[]>([]);
  const [topRatedProducts, setTopRatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchNewestProducts(),
      fetchBestSellerProducts(),
      fetchMostViewedProducts()
    ])
      .then(([newest, bestSeller, mostViewed]) => {
        setNewProducts(newest);
        setBestSellerProducts(bestSeller);
        setTopRatedProducts(mostViewed);
        setLoading(false);
      })
      .catch((err) => {
        setError('Không thể tải dữ liệu sản phẩm.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12 pt-28 flex flex-col gap-12">
        <Banner />
        <Feature />
        <Category />
        {loading ? (
          <div className="text-center py-12 text-lg text-blue-600 font-semibold">Đang tải sản phẩm...</div>
        ) : error ? (
          <div className="text-center py-12 text-lg text-red-500 font-semibold">{error}</div>
        ) : (
          <>
            <ProductList title="Sản phẩm mới" products={newProducts} />
            <ProductList title="Bán chạy nhất" products={bestSellerProducts} />
            <ProductList title="Được đánh giá cao" products={topRatedProducts} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
