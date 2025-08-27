import { Request, Response } from 'express'
import { UserDto } from '~/dto/request/user.dto'
import sendResponse from '~/dto/response/send-response'
import userModel from '~/models/userModel'
import userService from '~/services/user.service'

class UserController {
  async getUserProfile(req: Request, res: Response) {
    try {
      const user = await userModel.findById(req.params.id).select('-password')
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      res.json(user)
    } catch (error) {
      res.status(500).json({ message: 'Server error', error })
    }
  }

  async updateUserProfile(req: Request, res: Response) {
    try {
      const _id = req.body._id

      console.log('id ne', req.body._id)
      console.log('re', req.body)

      const updateUser = await userModel
        .findByIdAndUpdate(_id, { $set: req.body }, { new: true, runValidators: true })
        .select('-password')

      if (!updateUser) {
        return res.status(404).json({ message: 'User not found' })
      }

      return res.json(updateUser)
    } catch (error) {
      res.status(500).json({ message: 'Server error', error })
    }
  }

  // sign up
  async signUp(req: Request, res: Response) {
    const newUser: UserDto = req.body

    const result = await userService.signUp(newUser)
    sendResponse(res, { code: 200, message: 'Success', result })
  }

  // verify email for sign up
  async verifyEmailForSignUp(req: Request, res: Response) {
    const verifyDto: { email: string; otpCode: string } = req.body

    const result = await userService.verifyEmailForSignUp(verifyDto)
    sendResponse(res, { code: 200, message: 'Success', result })
  }
  async requestForgotPasswordOtp(req: Request, res: Response) {
    const data: { email: string } = req.body

    const result = await userService.requestForgotPasswordOtp(data.email)
    sendResponse(res, { code: 200, message: 'Success', result })
  }
  async verifyOtpAndResetPassword(req: Request, res: Response) {
    const data: { email: string; otpCode: string, newPassword: string } = req.body

    const result = await userService.verifyOtpAndResetPassword(data)
    sendResponse(res, { code: 200, message: 'Success', result })
  }

}

export default new UserController()
