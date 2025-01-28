import { getTickets } from '@/app/api/tickets/routes'
import { Page } from '@/components/ui/page'
import { Ticket } from '@/@types/ticket'

export default async function TicketsPage() {
  let tickets: Ticket[] = []

  tickets = await getTickets()

  return (
    <Page>
      <h3 className="font-bold text-2xl">Tickets</h3>
      {tickets.map((e) => {
        return <p key={e.id}>{e.id}</p>
      })}
    </Page>
  )
}
