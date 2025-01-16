import { loginRoute } from '@/app/api/auth/routes'
import React, { useState } from 'react'

export function useLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError(null)

    try {
      const response = await loginRoute(username, password)

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.message)
        return
      }

      const data = await response.json()
      console.log('Login successful:', data)
    } catch (error) {
      console.error('Login error:', error)
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
