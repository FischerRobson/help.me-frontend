import { Ticket } from '@/@types/ticket'
import { formatDate } from '@/utils/formatDate'
import { TicketStatus } from './ticket-status'

type TicketItemProps = {
  ticket: Ticket
}

export function TicketItem({ ticket }: TicketItemProps) {
  return (
    <tr className="border-t border-gray-700 hover:bg-zinc-800 transition">
      <td className="px-4 py-2">{ticket.title}</td>
      <td className="px-4 py-2">
        <TicketStatus status={ticket.ticket_status} />
      </td>
      <td className="px-4 py-2">{formatDate(ticket.created_at)}</td>
      <td className="px-4 py-2">
        {ticket.updated_at ? formatDate(ticket.updated_at) : '—'}
      </td>
      <td className="px-4 py-2">{ticket.support_id ?? 'None'}</td>
      <td className="px-4 py-2">
        <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View
        </button>
      </td>
    </tr>
  )
}
