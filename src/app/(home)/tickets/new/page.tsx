'use client'

import { Input } from '@/components/form/input'
import { Button } from '@/components/ui/button'
import { Page } from '@/components/ui/page'
import { useCreateTicket } from './useCreateTicket'

export default function NewTicketPage() {
  const { categories } = useCreateTicket()

  return (
    <Page>
      <h3 className="font-bold text-2xl">Open Ticket</h3>

      <form className="flex flex-col gap-3 my-6 items-center">
        <Input.Root width="lg">
          <Input.Label value="Ticket Title" />
          <Input.Field placeholder="Incident with accounts..." />
        </Input.Root>

        <Input.Root width="lg">
          <Input.Label value="Ticket Description" />
          <Input.Textarea placeholder="Describe with details your problem..." />
        </Input.Root>

        <Input.Root width="lg">
          <Input.Label value="Category" />
          <Input.Select options={categories} />
        </Input.Root>

        <Input.Root width="lg">
          <Input.Label value="Add Files" />
          <Input.File />
        </Input.Root>

        <div className="w-[720px] flex gap-4 mt-3">
          <Button type="submit" variant="error">
            Delete
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Page>
  )
}
