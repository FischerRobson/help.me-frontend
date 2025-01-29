import { getTicketsCategory } from '@/app/api/tickets/get-categories'
import { useEffect, useState } from 'react'

type Category = {
  id: string
  name: string
}

type Option = {
  key: string
  value: string | number
}

export function useCreateTicket() {
  const [categories, setCategories] = useState<Option[]>([])

  useEffect(() => {
    getTicketsCategory()
      .then((res: Category[]) => {
        console.log(res)
        const categoriesAsOptions = res.map((cat) => {
          return {
            key: cat.name,
            value: cat.id,
          }
        })
        setCategories(categoriesAsOptions)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return {
    categories,
  }
}
