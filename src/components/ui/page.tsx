import { ReactNode } from 'react'

type PageProps = {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return (
    <div className="max-w-[1120px] bg-zinc-900 mx-auto my-10 px-4 py-4 rounded-md">
      {children}
    </div>
  )
}
