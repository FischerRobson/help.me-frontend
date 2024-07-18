import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-green-600 w-full rounded-md px-2 py-2 hover:opacity-70 transition-colors">
      {children}
    </button>
  )
}
