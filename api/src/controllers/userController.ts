import { Request, Response } from 'express'
import userModel from '~/models/userModel'

export const getUserProfile = async (req: Request, res: Response) => {
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

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const _id = req.body._id

    console.log('id ne', req.body._id)
    console.log('re', req.body)

    const updateUser = await userModel
      .findByIdAndUpdate(_id, { $set: req.body }, { new: true, runValidators: true })
      .select('-password')

    if (!updateUser) {
      res.status(404).json({ message: 'User not found' })
    }

    return res.json(updateUser)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}
