export const VARIANTS = {
  primary: {
    bg: 'bg-green-600',
  },
  secondary: {
    bg: 'bg-blue-600',
  },
  error: {
    bg: 'bg-red-600',
  },
}

export type Variant = keyof typeof VARIANTS
