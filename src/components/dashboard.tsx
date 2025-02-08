'use client'
import dayjs from 'dayjs'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

type DashboardProps = {
  openedToday: number
  categorized: { category: string; count: number }[]
  ticketsPerDay: { date: Date; count: number }[]
}

const COLORS = ['#6366F1', '#22C55E', '#FACC15', '#F97316']

export default function Dashboard({
  openedToday,
  categorized,
  ticketsPerDay,
}: DashboardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full h-full p-6">
      <div className="flex-1 bg-zinc-900 rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">
          Tickets Opened in Last 7 Days
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={ticketsPerDay.slice().reverse()}>
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => dayjs(tick).format('DD/MM')}
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-lg font-semibold">Tickets Opened Today</h3>
          <p className="text-4xl font-bold text-green-400">{openedToday}</p>
        </div>

        <div className="bg-zinc-900 rounded-lg p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Tickets Categorized
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={categorized}
                dataKey="count"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {categorized.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
