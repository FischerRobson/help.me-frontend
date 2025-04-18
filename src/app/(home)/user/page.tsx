import { Input } from '@/components/form/input'
import { Page } from '@/components/ui/page'
import { User } from 'lucide-react'
import { getUserFromToken } from '@/lib/auth'
import { LogoutButton } from '@/components/ui/button/logout-button'

interface User {
  email: string
  role: string
  sub: string
}

export default function UserPage() {
  const user = getUserFromToken()

  return (
    <Page>
      <h3 className="font-bold text-2xl">User</h3>
      <div className="grid grid-cols-[240px_min-content_1fr] h-96">
        <aside className="p-4">
          <div className="bg-zinc-950 w-28 h-28 rounded-full flex items-center justify-center mx-auto">
            <User className="w-16 h-16" />
          </div>
          <p className="mt-4">{user?.email}</p>
          <LogoutButton />
        </aside>
        <div className="border-r-2 border-zinc-600 h-full" />
        <div className="px-2 flex flex-col gap-3 items-center">
          <Input.Root width="md">
            <Input.Label value="Password" />
            <Input.Field type="password" />
          </Input.Root>

          <div className="flex gap-3">
            <Input.Root width="sm">
              <Input.Label value="Country" />
              <Input.Field />
            </Input.Root>

            <Input.Root width="sm">
              <Input.Label value="City" />
              <Input.Field />
            </Input.Root>
          </div>

          <Input.Root width="md">
            <Input.Label value="Phone" />
            <Input.Field />
          </Input.Root>
        </div>
      </div>
    </Page>
  )
}
