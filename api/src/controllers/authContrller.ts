import { Request, Response } from 'express'
import { AuthService } from '../services/authService'

interface LoginRequest {
  email: string
  password: string
}

/**
 * Handle user login
 * @route POST /auth/login
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract credentials from request body
    const { email, password } = req.body as LoginRequest

    // Validate request body
    if (!email?.trim() || !password?.trim()) {
      res.status(400).json({
        success: false,
        message: 'Email and password are required'
      })
      return
    }

    // Authenticate user
    const user = await AuthService.validateUser(email, password)
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      })
      return
    }

    // Generate JWT token
    const token = AuthService.generateToken(user)

    // Send successful response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl || null,
          location: user.location || null,
          bio: user.bio || null,
          phone: user.phone || null
        }
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request'
    })
  }
}
