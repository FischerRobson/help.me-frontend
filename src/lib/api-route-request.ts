// Call Next API Routes
export async function apiRouteRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  path: string,
  body?: unknown,
): Promise<T | null> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'include',
    })

    if (!response.ok) {
      console.error(`API Route request failed: ${response.status}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Error in API Route request:', error)
    return null
  }
}

export async function apiRouteMultipartRequest<T>(
  method: 'POST' | 'PUT',
  path: string,
  formData: FormData,
): Promise<T | null> {
  try {
    const response = await fetch(`/api${path}`, {
      method,
      body: formData,
      credentials: 'include',
    })

    if (!response.ok) {
      console.error(`API Route multipart request failed: ${response.status}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Error in API Route multipart request:', error)
    return null
  }
}
