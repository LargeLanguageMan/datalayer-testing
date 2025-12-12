import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// In production, these should be stored securely in environment variables
// and passwords should be hashed (e.g., using bcrypt)
const VALID_CREDENTIALS = {
  username: process.env.AUTH_USERNAME || 'tal2024',
  // In production, this should be a hashed password
  password: process.env.AUTH_PASSWORD || 'monks2024'
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validate credentials server-side
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      // In production, generate a secure session token (e.g., using jose or jsonwebtoken)
      const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64')

      // Set secure cookie with all security flags
      const cookieStore = await cookies()
      cookieStore.set('session', sessionToken, {
        httpOnly: true,    // Prevents XSS attacks
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        sameSite: 'strict', // Prevents CSRF attacks
        maxAge: 3600,      // 1 hour
        path: '/'
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
