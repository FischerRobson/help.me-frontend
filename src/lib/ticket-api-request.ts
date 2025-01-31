import { cookies } from 'next/headers'
import { env } from '@/env'

export async function ticketApiRequest<T>(
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
    const response = await fetch(`${env.TICKETS_API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `jwt=${jwtCookie.value}`,
      },
      credentials: 'include',
      cache: 'no-store',
      body: body ? JSON.stringify(body) : undefined,
    })

    // const responseData = await response.json()
    // console.log('API response:', responseData)

    if (!response.ok) {
      console.log(response)
      console.error(`ERROR: ${method} TICKET-API${endpoint} ${response.status}`)
      return null
    }

    return (await response.json()) as T
  } catch (error) {
    console.error(`ERROR: ${method} TICKET-API${endpoint}`, error)
    return null
  }
}
