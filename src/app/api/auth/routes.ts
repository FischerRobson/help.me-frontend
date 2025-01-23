import { authAPI } from '@/config/apis'

export async function loginRoute(email: string, password: string) {
  const response = await authAPI.post('/auth/login', { email, password })

  if (response.status !== 200) {
    return false
  }

  return true
}

export async function logoutRoute() {
  try {
    await authAPI.post('/auth/logout')
    window.location.href = '/login'
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
