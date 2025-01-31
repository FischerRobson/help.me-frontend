import { Ticket } from '@/@types/ticket'
import { TicketItem } from './ticket-item'

type TicketTableProps = {
  tickets: Ticket[]
}

export function TicketTable({ tickets }: TicketTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-700 rounded-md shadow-md">
        <thead className="bg-zinc-900 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Created At</th>
            <th className="px-4 py-2 text-left">Updated At</th>
            <th className="px-4 py-2 text-left">Support</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
