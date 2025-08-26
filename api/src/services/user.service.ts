import { PendingUserDto, UserDto } from '~/dto/request/user.dto'
import userModel from '~/models/userModel'
import ApiError from '~/middleware/ApiError'
import { StatusCodes } from 'http-status-codes'
import helperService from './helper.service'
import redisService from './redis.service'
import { EmailTypeEnum } from '~/enums/emailType.enum'
import nodemailService from './nodemail.service'
import { NotificationDto } from '~/dto/request/notification.dto'

const OTP_REGISTER_KEY = 'otp_register:'

class UserService {
  async signUp(newUser: UserDto): Promise<{ message: string }> {
    try {
      // check existing email
      const existingUser = await userModel.findOne({ email: newUser.email })
      if (existingUser) {
        throw new ApiError(StatusCodes.OK, 'Email already exists')
      }

      // genereate token and save to redis
      const verificationCode = helperService.generateVerifyCode()

      // set redis key -> set value -> expire time (seconds) = 3 minutes
      await redisService.set(
        `${OTP_REGISTER_KEY}${newUser.email}`,
        { ...newUser, otpCode: verificationCode } as PendingUserDto,
        180
      )

      // send email for user
      await nodemailService.sendMail({
        type: EmailTypeEnum.VERIFY_EMAIL,
        email: [newUser.email],
        token: verificationCode,
        name: newUser.name
      } as NotificationDto)

      return { message: 'Please check your email to verify your account' }
    } catch (error: ApiError | any) {
      console.log(error)
      return { message: error?.message }
    }
  }

  // verify email for sign up
  async verifyEmailForSignUp({ email, otpCode }: { email: string; otpCode: string }): Promise<{ message: string }> {
    // get user from redis
    const userData: PendingUserDto | null = await redisService.get<PendingUserDto>(`${OTP_REGISTER_KEY}${email}`)

    // user not exist
    if (!userData) {
      throw new ApiError(StatusCodes.BAD_REQUEST, 'No registration request found for this email or OTP has expired')
    }

    // check otp code
    if (userData.otpCode !== otpCode) {
      throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid OTP code')
    }

    // check existing email
    const existingUser = await userModel.findOne({ email: email })
    if (existingUser) {
      throw new ApiError(StatusCodes.OK, 'Email already exists')
    }

    // create user
    const createdUser = new userModel(userData)

    await createdUser.save()

    // delete key in redis
    await redisService.del(`${OTP_REGISTER_KEY}${email}`)

    return { message: 'User registered successfully' }
  }
}

export default new UserService()
