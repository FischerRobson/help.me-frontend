import { InputHTMLAttributes } from 'react'
import { Variant } from './variants'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: Variant
}

export function Field({ placeholder, variant, ...rest }: FieldProps) {
  return (
    <input
      placeholder={placeholder}
      {...rest}
      className={`bg-zinc-800 rounded-md placeholder:text-zinc-500 w-full ${variant?.h} ${variant?.px} ${variant?.py} outline-none`}
    />
  )
}
