import axios from "axios";
import { Product } from '@/components/home/ProductCard'

const API_BASE = "/api/products";

interface ProductDto {
  id: string
  name: string
  price: number
  discount?: number
  images: string[]
  rating: number
  isBestSeller?: boolean
}

const toFEProduct = (p: ProductDto): Product => {
  const discountRaw = p.discount ?? 0
  // Nếu DB lưu dạng 0.3 (30%) thì đổi về %
  const discountPercent = discountRaw <= 1 ? discountRaw * 100 : discountRaw
  const salePrice = Math.max(0, Math.round(p.price * (1 - discountPercent / 100)))

  return {
    id: p.id,
    name: p.name,
    image: p.images?.[0] ?? '/placeholder.png',
    price: discountPercent > 0 ? salePrice : p.price,
    originalPrice: discountPercent > 0 ? p.price : undefined,
    discount: discountPercent,
    rating: p.rating,
    isBestSeller: p.isBestSeller,
  }
}

export const fetchNewestProducts = async () => {
  const res = await axios.get(`${API_BASE}/newest`);
  console.log(res.data);
  return res.data.data || [];
};

export const fetchBestSellerProducts = async () => {
  const res = await axios.get(`${API_BASE}/best-seller`);
  return res.data.data || [];
};

export const fetchMostViewedProducts = async () => {
  const res = await axios.get(`${API_BASE}/most-viewed`);
  return res.data.data || [];
};

export const fetchTopDiscountProducts = async (): Promise<Product[]> => {
  const res = await axios.get(`${API_BASE}/top-discount`)
  return res.data.data.map(toFEProduct)
}
