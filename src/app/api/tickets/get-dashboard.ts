import { ticketApiRequest } from '@/lib/ticket-api-request'

interface DashboardData {
  openedToday: number
  categorized: {
    category: string
    count: number
  }[]
  ticketsPerDay: {
    date: Date
    count: number
  }[]
}

export async function getDashboard(): Promise<DashboardData | null> {
  try {
    const response = await ticketApiRequest<DashboardData>('GET', '/dashboard')

    if (!response) {
      return null
    }

    return response
  } catch (err) {
    console.error(err)
    return null
  }
}
