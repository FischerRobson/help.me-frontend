import { SelectHTMLAttributes } from 'react'
import { Variant } from './variants'

type Option = {
  key: string
  value: string | number
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
  variant?: Variant
}

export function Select({ options, variant, ...rest }: SelectProps) {
  return (
    <select
      {...rest}
      className={`bg-zinc-800 rounded-md placeholder:text-zinc-500 ${variant?.px} ${variant?.py} ${variant?.h} w-full`}
    >
      {/* <option disabled>Select</option> */}
      {options.map((e) => {
        return (
          <option key={e.key} value={e.value}>
            {e.key}
          </option>
        )
      })}
    </select>
  )
}
