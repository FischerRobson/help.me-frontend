import { Page } from '@/components/ui/page'
import { getDashboard } from '../api/tickets/get-dashboard'
import Dashboard from '@/components/dashboard'

export default async function Home() {
  const { categorized, openedToday, ticketsPerDay } = await getDashboard()

  return (
    <Page>
      <h3 className="font-bold text-2xl">Tickets</h3>

      <Dashboard
        categorized={categorized}
        openedToday={openedToday}
        ticketsPerDay={ticketsPerDay}
      />
    </Page>
  )
}
