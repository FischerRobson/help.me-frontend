import { User } from 'lucide-react'
import Link from 'next/link'
import { getUserFromToken } from '@/lib/auth'

export function Header() {
  const user = getUserFromToken()

  return (
    <header className="bg-zinc-800 h-[64px] flex items-center justify-between px-12">
      <section className="flex items-center justify-around gap-8">
        <div>Help.Me</div>
        <Link href="/tickets">
          <nav className="flex items-center justify-between gap-2 hover:text-zinc-400">
            Tickets
          </nav>
        </Link>
      </section>
      <Link href="/user">
        <nav className="flex items-center justify-between gap-2 hover:text-zinc-400">
          <p>Hello, {user?.email}</p>
          <User />
        </nav>
      </Link>
    </header>
  )
}
