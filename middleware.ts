import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/insurance-portal']

// Routes that should redirect to insurance-portal if already authenticated
const authRoutes = ['/']

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')
  const { pathname } = request.url ? new URL(request.url) : { pathname: '' }

  // Check if accessing a protected route
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

  // Check if accessing an auth route (login page)
  const isAuthRoute = authRoutes.includes(pathname)

  // Redirect to home if trying to access protected route without session
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Redirect to insurance-portal if already authenticated and trying to access login
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/insurance-portal', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
