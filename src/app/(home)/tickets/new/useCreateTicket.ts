'use client'

import { getTicketsCategory } from '@/app/api/tickets/get-categories'
import { apiRouteRequest } from '@/lib/api-route-request'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Category = {
  id: string
  name: string
}

type Option = {
  key: string
  value: string | number
}

export function useCreateTicket() {
  const router = useRouter()
  const [categories, setCategories] = useState<Option[]>([])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = {
      title,
      description,
      categoryId: selectedCategory,
    }
    const response = await apiRouteRequest('POST', '/tickets', body)

    if (response) {
      console.log(response)
      router.push('/tickets')
    }
  }

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
    title,
    setTitle,
    description,
    setDescription,
    selectedCategory,
    setSelectedCategory,
    onSubmit,
  }
}
