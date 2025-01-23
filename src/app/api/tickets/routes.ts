import { ticketsAPI } from '@/config/apis'

export async function getTicketsCategory() {
  const response = await ticketsAPI.get('/categories')

  if (response.status !== 200) {
    return false
  }

  return response.data
}
