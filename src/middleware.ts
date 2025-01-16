import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { env } from './env'

const PUBLIC_ROUTES = ['/login', '/signup'] // Define public routes here

const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET!)

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Exclude static files and API routes
  const isPublicAsset =
    pathname.startsWith('/_next/') || // Next.js assets
    pathname.startsWith('/static/') || // Static folder
    pathname.startsWith('/favicon.ico') || // Favicon
    pathname.match(/\.(.*)$/) // Other static files like CSS, JS, etc.

  if (isPublicAsset) {
    return NextResponse.next() // Skip middleware for these paths
  }

  const token = req.cookies.get('jwt') // Get the JWT from cookies

  // Decode and validate the token
  if (token) {
    try {
      const { payload } = await jwtVerify(token.value, JWT_SECRET)
      console.log('JWT payload:', payload) // Replace with your secret
      // If valid, allow access
      if (PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/', req.url)) // Redirect authenticated users from public routes
      }
      return NextResponse.next() // Continue to protected routes
    } catch (err) {
      console.error('Invalid token:', err)
    }
  }

  // Redirect unauthenticated users away from protected routes
  if (!PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

// Enable middleware for all pages
export const config = {
  matcher: '/:path*',
}
