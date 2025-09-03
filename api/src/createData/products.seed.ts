import mongoose from 'mongoose'
import Product from '../models/productModel'
import dotenv from 'dotenv'
import connectDB from '../config/db'

dotenv.config()
;(async () => {
  await connectDB()
})()

const seedProducts = [
  {
    id: 'P001',
    name: 'Giày Sneaker Trắng',
    description: 'Giày sneaker trẻ trung năng động',
    category: 'Giày dép',
    brand: 'Nike',
    price: 1500000,
    discount: 50, // 50%
    images: ['https://via.placeholder.com/300x200.png?text=Sneaker'],
    stock: 100,
    sold: 200,
    rating: 4.5,
    ratingCount: 120,
    isBestSeller: true,
    isNew: true,
    tags: ['giày', 'sneaker'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'P002',
    name: 'Túi Xách Da Nữ',
    description: 'Túi xách da thời trang cao cấp',
    category: 'Phụ kiện',
    brand: 'Gucci',
    price: 5000000,
    discount: 30,
    images: ['https://via.placeholder.com/300x200.png?text=Tui+Xach'],
    stock: 50,
    sold: 80,
    rating: 4.8,
    ratingCount: 95,
    isBestSeller: true,
    isNew: false,
    tags: ['túi', 'da'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'P003',
    name: 'Áo Thun Basic',
    description: 'Áo thun cotton thoáng mát',
    category: 'Thời trang',
    brand: 'Local Brand',
    price: 250000,
    discount: 20,
    images: ['https://via.placeholder.com/300x200.png?text=Áo+Thun'],
    stock: 200,
    sold: 50,
    rating: 4.2,
    ratingCount: 40,
    isBestSeller: false,
    isNew: true,
    tags: ['áo thun', 'basic'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'P004',
    name: 'Tai Nghe Bluetooth',
    description: 'Tai nghe Bluetooth chống ồn',
    category: 'Điện tử',
    brand: 'Sony',
    price: 3000000,
    discount: 10,
    images: ['https://via.placeholder.com/300x200.png?text=Tai+Nghe'],
    stock: 70,
    sold: 150,
    rating: 4.6,
    ratingCount: 200,
    isBestSeller: true,
    isNew: false,
    tags: ['tai nghe', 'bluetooth'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'P005',
    name: 'Laptop Gaming',
    description: 'Laptop gaming mạnh mẽ RTX 4060',
    category: 'Điện tử',
    brand: 'Asus',
    price: 30000000,
    discount: 40,
    images: ['https://via.placeholder.com/300x200.png?text=Laptop'],
    stock: 30,
    sold: 20,
    rating: 4.9,
    ratingCount: 60,
    isBestSeller: false,
    isNew: true,
    tags: ['laptop', 'gaming'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'P006',
    name: 'Nồi Chiên Không Dầu',
    description: 'Nồi chiên không dầu dung tích lớn',
    category: 'Gia dụng',
    brand: 'Philips',
    price: 3500000,
    discount: 60, // cao nhất
    images: ['https://via.placeholder.com/300x200.png?text=Nồi+Chiên'],
    stock: 40,
    sold: 300,
    rating: 4.7,
    ratingCount: 180,
    isBestSeller: true,
    isNew: false,
    tags: ['nồi chiên', 'gia dụng'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function seed() {
  try {

    // await Product.deleteMany({})
    // console.log('🗑️ Xoá dữ liệu cũ')

    await Product.insertMany(seedProducts)
    console.log('🌱 Seeded sản phẩm thành công!')

    process.exit()
  } catch (error) {
    console.error('❌ Error seeding products:', error)
    process.exit(1)
  }
}

seed()
