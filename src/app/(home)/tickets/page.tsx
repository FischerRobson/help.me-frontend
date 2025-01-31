import { getTickets } from '@/app/api/tickets/get-tickets'
import { Page } from '@/components/ui/page'
import { TicketTable } from '@/components/ui/ticket/ticket-table'

export default async function TicketsPage() {
  const { tickets, totalTickets } = await getTickets()

  return (
    <Page>
      <h3 className="font-bold text-2xl">Tickets</h3>

      <h5 className="mt-2 mb-2">Filters</h5>

      <TicketTable tickets={tickets} />

      <span>Total tickets: {totalTickets}</span>
    </Page>
  )
}
