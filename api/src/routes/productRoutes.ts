import { Router } from 'express'
import { getNewestProducts, getBestSellerProducts, getMostViewedProducts, createProduct } from '../controllers/productController'

const router = Router()

router.get('/newest', getNewestProducts)
router.get('/best-seller', getBestSellerProducts)
router.get('/most-viewed', getMostViewedProducts)
router.post('/', createProduct)

export default router
