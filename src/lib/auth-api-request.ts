import { cookies } from 'next/headers'
import { env } from '@/env'

export async function authApiRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  body?: unknown,
): Promise<T | null> {
  const jwtCookie = cookies().get('jwt')

  if (!jwtCookie) {
    console.error('Missing JWT token in cookies')
    return null
  }

  try {
    const response = await fetch(`${env.AUTH_API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `jwt=${jwtCookie.value}`,
      },
      credentials: 'include',
      cache: 'no-store',
      body: body ? JSON.stringify(body) : null,
    })

    if (
      response.status === 204 ||
      response.headers.get('Content-Length') === '0'
    ) {
      return null
    }

    if (!response.ok) {
      console.error(`ERROR: ${method} AUTH-API${endpoint} ${response.status}`)
      return null
    }

    return (await response.json()) as T
  } catch (error) {
    console.error(`ERROR: ${method} AUTH-API${endpoint}`, error)
    return null
  }
}
