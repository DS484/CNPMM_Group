import { Router } from 'express'
import userController from '~/controllers/userController'

const router = Router()

router.get('/:id', userController.getUserProfile)

router.put('/:id', userController.updateUserProfile)

router.post('/', userController.signUp)

router.post('/verify-email', userController.verifyEmailForSignUp)

export default router
