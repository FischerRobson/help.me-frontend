import { Input } from '@/components/form/input'
import { Button } from '@/components/ui/button'

export default function TicketsPage() {
  return (
    <div className="max-w-[1120px] bg-zinc-900 mx-auto my-10 px-4 py-4 rounded-md">
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
          <Input.Label value="Ticket Title" />
          <Input.Select options={[{ key: 'Key', value: 'valyue' }]} />
        </Input.Root>

        <Input.Root width="lg">
          <Input.Label value="Ticket Title" />
          <Input.File />
        </Input.Root>

        <div className="w-[720px] flex gap-4">
          <Button type="submit">Delete</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}
