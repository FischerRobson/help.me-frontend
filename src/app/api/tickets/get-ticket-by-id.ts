import { TicketDetails } from '@/@types/ticket'
import { ticketApiRequest } from '@/lib/ticket-api-request'

export async function getTicketById(
  id: string,
): Promise<{ ticket: TicketDetails | null }> {
  const response = await ticketApiRequest<{ ticket: TicketDetails }>(
    'GET',
    `/tickets/${id}`,
  )
  if (!response) {
    return { ticket: null }
  }
  return response
}
