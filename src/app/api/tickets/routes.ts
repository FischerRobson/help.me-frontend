import { Ticket } from '@/@types/ticket'
import { ticketsAPI } from '@/config/apis'
import axios from 'axios'

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

type GetTicketsParams = {
  pageSize?: number
  page?: number
  status?: string[]
}

export async function getTickets(
  params: GetTicketsParams = {},
): Promise<Ticket[]> {
  try {
    const response = await ticketsAPI.get('/tickets')

    if (response.status !== 200) {
      console.error('Unexpected status:', response.status)
      return []
    }

    return response.data.tickets
  } catch (err) {
    console.error('Failed to fetch tickets:', err)
    if (axios.isAxiosError(err)) {
      console.error('Error Response:', err.response?.data)
    }

    return []
  }
}
