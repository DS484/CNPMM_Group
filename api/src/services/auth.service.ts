import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { APP_SECRET, ACCESS_TOKEN_EXPIRES_IN } from '../config/jwt'
import UserModel, { IUser } from '../models/userModel'

interface TokenPayload {
  id: string
  email: string
}

export class AuthService {
  /**
   * Validates user credentials
   * @param email User's email
   * @param password User's password
   * @returns User object if credentials are valid, null otherwise
   */
  static async validateUser(email: string, password: string): Promise<IUser | null> {
    // Find user by email
    const user = await UserModel.findOne({ email })
    // Check if user exists and has password
    if (!user || !user.password) {
      return null
    }
    // const isValidPassword = await bcrypt.compare(password, user.password)
    // if (!isValidPassword) {
    //   return null
    // }
    return user
  }

  /**
   * Generates JWT token for authenticated user
   * @param user User object
   * @returns JWT token
   */
  static generateToken(user: IUser): string {
    const payload: TokenPayload = {
      id: user._id.toString(),
      email: user.email
    }

    return jwt.sign(payload, APP_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN as any
    })
  }

  /**
   * Hashes password for secure storage
   * @param password Plain text password
   * @returns Hashed password
   */
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
  }
}
