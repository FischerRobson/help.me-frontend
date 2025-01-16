import { env } from '@/env'
import axios from 'axios'

export const authAPI = axios.create({
  baseURL: env.AUTH_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const ticketsAPI = axios.create({
  baseURL: env.TICKETS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
