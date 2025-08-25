import { Router } from 'express'
import { login } from '~/controllers/authContrller'

const router = Router()

router.post('/login', login)

export default router
