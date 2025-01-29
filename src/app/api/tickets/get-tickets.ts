import { Ticket } from '@/@types/ticket'
import { apiRequest } from '@/lib/api-request'

type GetTicketsParams = {
  pageSize?: number
  page?: number
  status?: string[]
}

export async function getTickets(): Promise<{ tickets: Ticket[] }> {
  const response = await apiRequest<{ tickets: Ticket[] }>('GET', '/tickets')
  if (!response) {
    return { tickets: [] }
  }
  return response
}
