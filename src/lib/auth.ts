import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { redirect } from 'next/navigation'
import { env } from '@/env'

interface User {
  email: string
  role: string
  sub: string
}

export function getUserFromToken(): User | null {
  const cookieStore = cookies()
  const token = cookieStore.get('jwt')?.value

  if (!token) {
    redirect('/login')
    return null
  }

  try {
    return jwt.verify(token, env.JWT_SECRET!) as User
  } catch (err) {
    console.error('Invalid token:', err)
    redirect('/login')
    return null
  }
}
