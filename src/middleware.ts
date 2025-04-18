import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { env } from './env'

const PUBLIC_ROUTES = ['/login', '/signup']

const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET!)

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Exclude static files and API routes
  const isPublicAsset =
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(.*)$/)

  if (isPublicAsset) {
    return NextResponse.next()
  }

  const token = req.cookies.get('jwt')

  if (token) {
    try {
      await jwtVerify(token.value, JWT_SECRET)
      if (PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/', req.url))
      }
      return NextResponse.next()
    } catch (err) {
      console.error('Invalid token:', err)
    }
  }

  if (!PUBLIC_ROUTES.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

// Enable middleware for all pages
export const config = {
  matcher: '/:path*',
}
