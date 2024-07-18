import React, { cloneElement, ReactNode } from 'react'
import { VariantTypes, VARIANTS } from './variants'

type RootProps = {
  children: ReactNode
  width?: VariantTypes
}

export function Root({ children, width = 'md' }: RootProps) {
  const variant = VARIANTS[width]

  return (
    <div
      className={`flex flex-col items-start justify-center gap-2 ${variant.w}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child, { variant })
        }
        return child
      })}
    </div>
  )
}
