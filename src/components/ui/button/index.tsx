import { ButtonHTMLAttributes } from 'react'
import { Variant, VARIANTS } from './variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${VARIANTS[variant].bg} w-full rounded-md px-2 py-2 hover:opacity-70 transition-colors`}
      {...rest}
    >
      {children}
    </button>
  )
}
