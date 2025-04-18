import { cookies } from 'next/headers'
import { env } from '@/env'

export async function uploadApiRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  formData: FormData,
): Promise<T | null> {
  const jwtCookie = cookies().get('jwt')

  if (!jwtCookie) {
    console.error('Missing JWT token in cookies')
    return null
  }

  try {
    const response = await fetch(`${env.UPLOAD_API_URL}${endpoint}`, {
      method,
      headers: {
        Cookie: `jwt=${jwtCookie.value}`,
      },
      credentials: 'include',
      cache: 'no-store',
      body: formData,
    })

    console.log(response)

    if (!response.ok) {
      console.error(`ERROR: ${method} UPLOAD-API${endpoint} ${response.status}`)
      return null
    }

    return (await response.json()) as T
  } catch (error) {
    console.error(`ERROR: ${method} UPLOAD-API${endpoint}`, error)
    return null
  }
}
