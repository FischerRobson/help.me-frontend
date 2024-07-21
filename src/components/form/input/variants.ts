type V = {
  w: string
  h: string
  px: string
  py: string
}

export const VARIANTS = {
  sm: { w: 'w-[225px]', h: 'h-[28px]', px: 'px-1', py: 'py-1' } as V,
  md: { w: 'w-[460px]', h: 'h-[28px]', py: 'px-2', px: 'py-1' } as V,
  lg: { w: 'w-[720px]', h: 'h-[38px]', py: 'px-2', px: 'py-2' } as V,
} as const

export type VariantTypes = keyof typeof VARIANTS
export type Variant = (typeof VARIANTS)[VariantTypes]
