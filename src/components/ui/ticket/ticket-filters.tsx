'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { TICKET_STATUSES } from '@/constants/ticket-statuses'

const PAGE_SIZES = [5, 10, 20, 40]

export function TicketFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedStatuses = searchParams.getAll('status')
  const currentPageSize = searchParams.get('pageSize') || '10'

  function toggleStatus(status: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedStatuses.includes(status)) {
      params.delete('status', status)
    } else {
      params.append('status', status)
    }

    router.push(`?${params.toString()}`)
  }

  function changePageSize(size: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('pageSize', size)
    router.push(`?${params.toString()}`)
  }

  function clearFilters() {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('status')
    params.delete('pageSize')
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex gap-2 items-center">
        <span className="font-medium">Status:</span>
        {TICKET_STATUSES.map((status) => (
          <button
            key={status.key}
            onClick={() => toggleStatus(status.key)}
            className={`px-3 py-1 rounded-md border hover:opacity-75 transition-colors ${
              selectedStatuses.includes(status.key)
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <span className="font-medium">Page Size:</span>
        {PAGE_SIZES.map((size) => (
          <button
            key={size}
            onClick={() => changePageSize(size.toString())}
            className={`px-3 py-1 rounded-md border hover:opacity-75 transition-colors ${
              currentPageSize === size.toString()
                ? 'bg-green-700 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
