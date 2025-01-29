import { cookies } from 'next/headers'
import { env } from '@/env'

export async function apiRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  body?: unknown,
): Promise<T | null> {
  const jwtCookie = cookies().get('jwt') // ✅ Get JWT token from cookies

  if (!jwtCookie) {
    console.error('Missing JWT token in cookies')
    return null
  }

  try {
    const response = await fetch(`${env.TICKETS_API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `jwt=${jwtCookie.value}`, // ✅ Attach JWT token
      },
      credentials: 'include',
      cache: 'no-store',
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      console.error(`API Error (${method} ${endpoint}): ${response.status}`)
      return null
    }

    return (await response.json()) as T
  } catch (error) {
    console.error(`API Request Failed (${method} ${endpoint}):`, error)
    return null
  }
}
