import { Router } from 'express'
import {
  getNewestProducts,
  getBestSellerProducts,
  getMostViewedProducts,
  createProduct,
  getTopDiscountProducts
} from '../controllers/productController'

const router = Router()

router.get('/newest', getNewestProducts)
router.get('/best-seller', getBestSellerProducts)
router.get('/most-viewed', getMostViewedProducts)
router.post('/', createProduct)

router.get('/top-discount', getTopDiscountProducts)

export default router
