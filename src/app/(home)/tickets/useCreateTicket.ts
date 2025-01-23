import { getTicketsCategory } from '@/app/api/tickets/routes'
import { useEffect, useState } from 'react'

export function useCreateTicket() {
  const [categories, setCategories] = useState()

  useEffect(() => {
    getTicketsCategory()
      .then((res) => {
        setCategories(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return {
    categories,
  }
}
