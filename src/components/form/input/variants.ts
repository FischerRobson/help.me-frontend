type V = {
  w: string
  h: string
  px: string
  py: string
}

export const VARIANTS = {
  sm: { w: '', h: '', px: '', py: '' } as V,
  md: { w: 'w-[460px]', h: '' } as V,
  lg: { w: 'w-[720px]', h: 'h-[38px]', py: 'px-2', px: 'py-2' } as V,
} as const

export type VariantTypes = keyof typeof VARIANTS
export type Variant = (typeof VARIANTS)[VariantTypes]
