import { Page } from '@/components/ui/page'
import { getDashboard } from '../api/tickets/get-dashboard'
import Dashboard from '@/components/dashboard'

export default async function Home() {
  const dashboardData = await getDashboard()

  if (!dashboardData) {
    return (
      <Page>
        <h3 className="font-bold text-2xl">Tickets</h3>

        <div>no data</div>
      </Page>
    )
  }

  const { categorized, openedToday, ticketsPerDay } = dashboardData

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
