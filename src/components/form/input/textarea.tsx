import { TextareaHTMLAttributes } from 'react'
import { Variant } from './variants'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: Variant
}

export function Textarea({ variant, ...rest }: TextareaProps) {
  return (
    <textarea
      {...rest}
      rows={7}
      className={`bg-zinc-800 rounded-md placeholder:text-zinc-500 w-full ${variant?.px} ${variant?.py} min-h-12 outline-none`}
    />
  )
}
