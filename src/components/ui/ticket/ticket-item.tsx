import { Ticket } from '@/@types/ticket'
import { DateFormatter } from '@/utils/date-formatter'
import { TicketStatus } from './ticket-status'
import Link from 'next/link'

type TicketItemProps = {
  ticket: Ticket
}

export function TicketItem({ ticket }: TicketItemProps) {
  return (
    <tr className="border-t border-gray-700 hover:bg-zinc-800 transition">
      <td className="px-4 py-2">{ticket.title}</td>
      <td className="px-4 py-2">{ticket.category.name}</td>
      <td className="px-4 py-2">
        <TicketStatus status={ticket.ticket_status} />
      </td>
      <td className="px-4 py-2">
        {new DateFormatter(ticket.created_at).formatDefault()}
      </td>
      <td className="px-4 py-2">
        {ticket.updated_at
          ? new DateFormatter(ticket.updated_at).formatDefault()
          : '—'}
      </td>
      <td className="px-4 py-2">{ticket.support_id ?? 'None'}</td>
      <td className="px-4 py-2">
        <Link href={`/tickets/${ticket.id}`} passHref>
          <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            View
          </button>
        </Link>
      </td>
    </tr>
  )
}
