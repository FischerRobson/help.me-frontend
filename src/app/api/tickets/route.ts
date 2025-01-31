import { v4 as uuidv4 } from 'uuid'
import { ticketApiRequest } from '@/lib/ticket-api-request'
import { NextResponse } from 'next/server'

type CreateTicketParams = {
  title: string
  description: string
  categoryId: string
  uploadId: string
}

export async function POST(req: Request) {
  try {
    const body: CreateTicketParams = await req.json()

    body.uploadId = uuidv4()

    const response = await ticketApiRequest('POST', '/tickets', body)

    if (!response) {
      return NextResponse.json(
        { error: 'Failed to create ticket' },
        { status: 500 },
      )
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error creating ticket:', error)
    return NextResponse.json(
      { error: 'Failed to create ticket' },
      { status: 500 },
    )
  }
}
