import Product from '../models/productModel'
import { ProductDto } from '../dto/response/product.dto'

class ProductService {
  async getBestSellerProducts(): Promise<ProductDto[]> {
    const products = await Product.find({ isBestSeller: true }).sort({ sold: -1, createdAt: -1 }).limit(6)
    return products.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      category: p.category,
      brand: p.brand,
      price: p.price,
      discount: p.discount,
      images: p.images,
      stock: p.stock,
      sold: p.sold,
      rating: p.rating,
      ratingCount: p.ratingCount,
      isNew: p.isNew,
      isBestSeller: p.isBestSeller,
      tags: p.tags,
      createdAt: p.createdAt
    }))
  }

  async getMostViewedProducts(): Promise<ProductDto[]> {
    const products = await Product.find().sort({ ratingCount: -1, createdAt: -1 }).limit(8)
    return products.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      category: p.category,
      brand: p.brand,
      price: p.price,
      discount: p.discount,
      images: p.images,
      stock: p.stock,
      sold: p.sold,
      rating: p.rating,
      ratingCount: p.ratingCount,
      isNew: p.isNew,
      isBestSeller: p.isBestSeller,
      tags: p.tags,
      createdAt: p.createdAt
    }))
  }
  async getNewestProducts(): Promise<ProductDto[]> {
    const products = await Product.find().sort({ createdAt: -1 }).limit(8)
    console.log(products)
    return products.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      category: p.category,
      brand: p.brand,
      price: p.price,
      discount: p.discount,
      images: p.images,
      stock: p.stock,
      sold: p.sold,
      rating: p.rating,
      ratingCount: p.ratingCount,
      isNew: p.isNew,
      isBestSeller: p.isBestSeller,
      tags: p.tags,
      createdAt: p.createdAt
    }))
  }
}

export default new ProductService()
