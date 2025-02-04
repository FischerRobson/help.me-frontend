import { Ticket } from '@/@types/ticket'
import { ticketApiRequest } from '@/lib/ticket-api-request'

export async function getTickets({
  page = 1,
  pageSize = 10,
  statuses = [],
}: {
  page?: number
  pageSize?: number
  statuses?: string[]
}): Promise<{
  tickets: Ticket[]
  totalItems: number
  totalPages: number
  currentPage: number
}> {
  const params = new URLSearchParams()
  params.append('page', page.toString())
  params.append('pageSize', pageSize.toString())

  statuses.forEach((status) => params.append('status', status))

  const response = await ticketApiRequest<{
    tickets: Ticket[]
    totalItems: number
    totalPages: number
    currentPage: number
  }>('GET', `/tickets?${params.toString()}`)

  if (!response) {
    return { tickets: [], totalItems: 0, totalPages: 1, currentPage: 1 }
  }

  return response
}
