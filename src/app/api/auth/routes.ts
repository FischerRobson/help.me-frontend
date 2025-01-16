import { authAPI } from '@/config/apis'

export async function loginRoute(email: string, password: string) {
  const response = await authAPI.post('/login', { email, password })
  const { token } = response.data

  // Save JWT in local storage or cookies
  localStorage.setItem('jwt', token)

  return token
}
