import { loginRoute } from '@/app/api/auth/login'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export function useLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError(null)

    try {
      await loginRoute(username, password)

      router.push('/')
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }

  return {
    username,
    password,
    setUsername,
    setPassword,
    error,
    handleSubmit,
  }
}
