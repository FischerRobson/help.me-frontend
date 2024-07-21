import { z } from 'zod'

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Missing envs: ', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Missing envs')
}

export const env = parsedEnv.data
