'use client'

import { useRouter } from 'next/navigation'
import { apiRouteRequest } from '@/lib/api-route-request'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const router = useRouter()

  async function logout() {
    const response = await apiRouteRequest('POST', '/auth/logout', null)

    if (response) {
      router.push('/login')
    }
  }

  return (
    <Button variant="error" onClick={logout}>
      Logout
    </Button>
  )
}
