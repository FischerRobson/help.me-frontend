import { ticketsAPI } from '@/config/apis'

export async function getTicketsCategory() {
  try {
    const response = await ticketsAPI.get('/categories')

    if (response.status !== 200) {
      return false
    }

    return response.data.categories
  } catch (err) {
    console.error(err)
    return []
  }
}
