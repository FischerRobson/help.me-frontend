export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'

export interface Ticket {
  id: string
  title: string
  description: string
  created_at: Date
  updated_at: Date | null
  ticket_status: TicketStatus
  user_id: string
  support_id: string | null
  categoryId: string
  filesURL: string[]
}
