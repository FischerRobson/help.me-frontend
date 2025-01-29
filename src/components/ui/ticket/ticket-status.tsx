import { TicketStatus as TicketPossibleStatus } from '@/@types/ticket'
import { cn } from '@/lib/cn'

type TicketStatusProps = {
  status: TicketPossibleStatus
}

const statusColors: Record<TicketPossibleStatus, string> = {
  OPEN: 'bg-green-500 text-white',
  IN_PROGRESS: 'bg-yellow-500 text-black',
  RESOLVED: 'bg-blue-500 text-white',
  CLOSED: 'bg-gray-500 text-white',
}

export function TicketStatus({ status }: TicketStatusProps) {
  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-sm font-semibold',
        statusColors[status],
      )}
    >
      {status.replace('_', ' ')}
    </span>
  )
}
