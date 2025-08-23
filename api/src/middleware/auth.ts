import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { APP_SECRET } from '../config/jwt'

// Extend Request type to include user property
interface AuthRequest extends Request {
  user?: {
    id: string
    email: string
  }
}

/**
 * Middleware to validate JWT token
 * Adds user object to request if token is valid
 */
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    // Get token from Authorization header
    const bearerToken = req.headers.authorization

    if (!bearerToken?.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Authorization header must start with Bearer'
      })
      return
    }

    // Extract token from Bearer string
    const token = bearerToken.split(' ')[1]

    // Verify token
    try {
      const decoded = jwt.verify(token, APP_SECRET) as JwtPayload

      // Add user data to request
      req.user = {
        id: decoded.id as string,
        email: decoded.email as string
      }

      next()
    } catch (jwtError) {
      res.status(403).json({
        success: false,
        message: 'Invalid or expired token: ' + (jwtError as Error).message
      })
    }
  } catch (error) {
    console.error('Authentication error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}
