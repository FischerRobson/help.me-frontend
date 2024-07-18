import { User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-zinc-800 h-[76px] flex items-center justify-between px-12">
      <div>Help.Me</div>
      <nav className="flex items-center justify-between gap-2">
        <p className="text-zinc-100">Hello, Jhon Doe</p>
        <User />
      </nav>
    </header>
  )
}
