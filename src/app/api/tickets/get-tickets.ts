import { Ticket } from '@/@types/ticket'
import { ticketApiRequest } from '@/lib/ticket-api-request'

// type GetTicketsParams = {
//   pageSize?: number
//   page?: number
//   status?: string[]
// }

export async function getTickets(): Promise<{
  tickets: Ticket[]
  totalTickets: number
}> {
  const response = await ticketApiRequest<{
    tickets: Ticket[]
    totalTickets: number
  }>('GET', '/tickets')
  if (!response) {
    return { tickets: [], totalTickets: 0 }
  }
  return response
}
