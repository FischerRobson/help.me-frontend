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

  const [files, setFiles] = useState<Array<File>>([])

  function addFile(file: File) {
    setFiles((prev) => [...prev, file])
  }

  function removeFile(fileToRemove: File) {
    setFiles((prev) =>
      prev.filter(
        (file) =>
          file.name !== fileToRemove.name ||
          file.lastModified !== fileToRemove.lastModified,
      ),
    )
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = {
      title,
      description,
      categoryId: selectedCategory,
    }

    const [ticketResponse, uploadResponse] = await Promise.all([
      apiRouteRequest('POST', '/tickets', body),
      apiRouteRequest('POST', '/uploads', files),
    ])

    if (ticketResponse && uploadResponse) {
      console.log('Ticket:', ticketResponse)
      console.log('Upload:', uploadResponse)
      router.push('/tickets')
    }
  }

  useEffect(() => {
    getTicketsCategory()
      .then((res: Category[]) => {
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
    files,
    addFile,
    removeFile,
  }
}
