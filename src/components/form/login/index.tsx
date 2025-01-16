'use client'

import { Button } from '@/components/ui/button'
import { Input } from '../input'
import { useLogin } from './useLogin'

export function LoginForm() {
  const { username, password, setUsername, setPassword, handleSubmit } =
    useLogin()

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 mx-3 gap-4 flex flex-col items-center justify-center"
    >
      <Input.Root>
        <Input.Label value="username" />
        <Input.Field
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="johndoe@mail.com"
        />
      </Input.Root>

      <Input.Root>
        <Input.Label value="password" />
        <Input.Field
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="************"
          type="password"
        />
      </Input.Root>

      <Button>Login</Button>
    </form>
  )
}
