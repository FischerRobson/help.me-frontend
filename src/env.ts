import { z } from 'zod'

const envSchema = z.object({
  TICKETS_API_URL: z.string().url(),
  AUTH_API_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse({
  TICKETS_API_URL: process.env.NEXT_PUBLIC_TICKETS_API_URL,
  AUTH_API_URL: process.env.NEXT_PUBLIC_AUTH_API_URL,
})

if (!parsedEnv.success) {
  console.error(
    'Missing or invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors,
  )
  throw new Error('Environment variable validation failed')
}

export const env = parsedEnv.data
