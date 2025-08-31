import { Request, Response } from 'express'
import productService from '../services/product.service'
import Product from '../models/productModel' // Import the Product model

export const getNewestProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getNewestProducts()
    res.json({ success: true, data: products })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const getBestSellerProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getBestSellerProducts()
    res.json({ success: true, data: products })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const getMostViewedProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getMostViewedProducts()
    res.json({ success: true, data: products })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error })
  }
}
