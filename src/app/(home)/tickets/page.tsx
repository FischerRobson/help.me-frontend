import { getTickets } from '@/app/api/tickets/get-tickets'
import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { TicketFilter } from '@/components/ui/ticket/ticket-filters'
import { TicketTable } from '@/components/ui/ticket/ticket-table'

export default async function TicketsPage({
  searchParams,
}: {
  searchParams?: {
    status?: string | string[]
    pageSize?: string
    page?: string
  }
}) {
  const page = Number(searchParams?.page) || 1
  const pageSize = Number(searchParams?.pageSize) || 10
  const statuses = Array.isArray(searchParams?.status)
    ? searchParams.status
    : searchParams?.status
      ? [searchParams.status]
      : []

  const { tickets, totalItems, currentPage, totalPages } = await getTickets({
    page,
    pageSize,
    statuses,
  })

  return (
    <Page>
      <h3 className="font-bold text-2xl">Tickets</h3>

      <TicketFilter />

      <p className="text-gray-400 text-sm mb-4">
        Showing <strong>{tickets.length}</strong> of{' '}
        <strong>{totalItems}</strong> tickets.
      </p>

      <TicketTable tickets={tickets} />

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Page>
  )
}
