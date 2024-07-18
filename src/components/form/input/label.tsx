import { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  value: string
}

export function Label({ value, ...rest }: LabelProps) {
  return <label {...rest}>{value}</label>
}
