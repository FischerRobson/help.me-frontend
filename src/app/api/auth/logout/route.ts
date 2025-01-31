import { authApiRequest } from '@/lib/auth-api-request'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    await authApiRequest('POST', '/auth/logout', null)

    const response = NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 },
    )

    response.cookies.set('jwt', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    })

    return response
  } catch (error) {
    console.error('Error to logout:', error)
    return NextResponse.json({ error: 'Failed to logout' }, { status: 500 })
  }
}
