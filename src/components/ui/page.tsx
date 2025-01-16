import { ReactNode } from 'react'

const PAGE_SIZE = {
  s: `max-w-[520px]`,
  xl: `max-w-[1120px]`,
} as const

type PageProps = {
  size?: keyof typeof PAGE_SIZE
  children: ReactNode
}

export function Page({ children, size = 'xl' }: PageProps) {
  return (
    <div
      className={`${PAGE_SIZE[size]} bg-zinc-900 mx-auto my-10 px-4 py-4 rounded-md`}
    >
      {children}
    </div>
  )
}
