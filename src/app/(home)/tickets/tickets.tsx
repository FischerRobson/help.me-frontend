'use client'

import { Ticket } from '@/@types/ticket'
import { use } from 'react'

export function Tickets({ tickets }: { tickets: Promise<Ticket[]> }) {
  const allTickets = use(tickets)

  return (
    <ul>
      {allTickets.map((ticket) => (
        <li key={ticket.id}>{ticket.title}</li>
      ))}
    </ul>
  )
}
