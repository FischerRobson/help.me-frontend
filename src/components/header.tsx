import { User } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-zinc-800 h-[76px] flex items-center justify-between px-12">
      <div>Help.Me</div>
      <Link href="/user">
        <nav className="flex items-center justify-between gap-2 hover:text-zinc-400">
          <p>Hello, Jhon Doe</p>
          <User />
        </nav>
      </Link>
    </header>
  )
}
