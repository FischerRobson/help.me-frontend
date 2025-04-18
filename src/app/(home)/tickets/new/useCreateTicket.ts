'use client'

import { v4 as uuidv4 } from 'uuid'
import { getTicketsCategory } from '@/app/api/tickets/get-categories'
import {
  apiRouteMultipartRequest,
  apiRouteRequest,
} from '@/lib/api-route-request'
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

    const uploadId = uuidv4()

    const body = {
      id: uploadId,
      title,
      description,
      categoryId: selectedCategory,
    }

    const formData = new FormData()
    formData.append('uploadId', uuidv4())
    files.forEach((file) => formData.append('files', file))

    const [ticketResponse, uploadResponse] = await Promise.all([
      apiRouteRequest('POST', '/tickets', body),
      apiRouteMultipartRequest('POST', '/uploads', formData),
    ])

    if (ticketResponse && uploadResponse) {
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
