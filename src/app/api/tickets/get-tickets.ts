import { Ticket } from '@/@types/ticket'
import { ticketApiRequest } from '@/lib/ticket-api-request'

// type GetTicketsParams = {
//   pageSize?: number
//   page?: number
//   status?: string[]
// }

export async function getTickets(): Promise<{ tickets: Ticket[] }> {
  const response = await ticketApiRequest<{ tickets: Ticket[] }>(
    'GET',
    '/tickets',
  )
  if (!response) {
    return { tickets: [] }
  }
  return response
}
