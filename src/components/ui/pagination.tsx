'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

type PaginationProps = {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return

    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1
        return (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      })}

      <button
        className="px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
