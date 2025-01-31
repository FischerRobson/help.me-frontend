import { getTicketById } from '@/app/api/tickets/get-ticket-by-id'
import { Page } from '@/components/ui/page'
import { TicketStatus } from '@/components/ui/ticket/ticket-status'
import { DateFormatter } from '@/utils/date-formatter'
import { Paperclip } from 'lucide-react'

export default async function TicketPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  const { ticket } = await getTicketById(id)

  if (!ticket) {
    return (
      <Page>
        <h3 className="font-bold text-2xl text-red-500">Ticket not found</h3>
      </Page>
    )
  }

  return (
    <Page>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">{ticket.title}</h3>
        <div>
          Ticket{' '}
          <span className="text-zinc-400">#{ticket?.id.split('-')[0]}</span>
          <span className="ml-2">
            <TicketStatus status={ticket.ticket_status} />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="mt-1 mb-1 text-zinc-300">
          Category: {ticket.category.name}
        </p>
        <p className="text-zinc-300">
          Created at {new DateFormatter(ticket.created_at).formatWithTime()}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="mt-1 mb-1 text-zinc-300">Created by: {ticket.user_id}</p>
        <p className="text-zinc-300">Supporter: {ticket.support_id}</p>
      </div>

      <p className="border rounded-md border-zinc-800 p-1">
        {ticket.description}
      </p>

      {/* Chat Section */}
      <h3 className="font-bold text-xl mt-6">Chats</h3>
      <div className="mt-3 space-y-4">
        {ticket.chats.length > 0 ? (
          ticket.chats.map((chat) => (
            <div
              key={chat.id}
              className="border border-zinc-700 p-3 rounded-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 text-sm">
                  Chat #{chat.id.split('-')[0]}
                </span>
                <span className="text-zinc-400 text-sm">
                  {new DateFormatter(chat.created_at).formatWithTime()}
                </span>
              </div>

              <p className="mt-2 text-zinc-300">{chat.description}</p>

              {chat.filesURL.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {chat.filesURL.map((fileURL, index) => (
                    <a
                      key={index}
                      href={fileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:underline"
                    >
                      <Paperclip className="w-4 h-4" />
                      File {index + 1}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-zinc-500">No chats available for this ticket.</p>
        )}
      </div>
    </Page>
  )
}
