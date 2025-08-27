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
const OTP_FORGOT_KEY = 'otp_forget_key:'
const OTP_TTL_SECONDS = 180

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

  async requestForgotPasswordOtp(email: string): Promise<{ message: string }> {
    const user = await userModel.findOne({ email: email })
    // Dù không tồn tại, vẫn trả message chung:
    if (!user) return { message: 'Nếu email tồn tại, chúng tôi đã gửi OTP khôi phục' }

    const otp = helperService.generateVerifyCode() // ví dụ 6 số
    await redisService.set(`${OTP_FORGOT_KEY}${email}`, {email, otpCode: otp} , OTP_TTL_SECONDS)

    await nodemailService.sendMail({
      type: EmailTypeEnum.FORGOT_PASSWORD_OTP,
      email: [email],
      token: otp
    } as NotificationDto)

    return { message: 'Nếu email tồn tại, chúng tôi đã gửi OTP khôi phục' }
  }

  /**
   * B2: Người dùng gửi email + otp + newPassword -> xác thực và cập nhật mật khẩu
   */
  async verifyOtpAndResetPassword(payload: { email: string; otpCode: string; newPassword: string }): Promise<{ message: string }> {
    const { email, otpCode, newPassword } = payload

    const otpData = await redisService.get<{ email: string; otpCode: string }>(`${OTP_FORGOT_KEY}${email}`)
    if (!otpData) throw new ApiError(StatusCodes.BAD_REQUEST, 'OTP không hợp lệ hoặc đã hết hạn')
    if (otpData.otpCode !== otpCode) throw new ApiError(StatusCodes.BAD_REQUEST, 'OTP không đúng')

    const user = await userModel.findOne({ email })
    if (!user) {
      // Xóa OTP để tránh brute-force
      await redisService.del(`${OTP_FORGOT_KEY}${email}`)
      throw new ApiError(StatusCodes.BAD_REQUEST, 'OTP không hợp lệ hoặc đã hết hạn')
    }

    // const hashed = await bcrypt.hash(newPassword, 10)
    // user.password = hashed
    user.password = newPassword
    // (tuỳ bạn) user.passwordChangedAt = new Date()
    await user.save()

    await redisService.del(`${OTP_FORGOT_KEY}${email}`)

    return { message: 'Đổi mật khẩu thành công. Hãy đăng nhập lại.' }
  }
}

export default new UserService()
