import { v4 as uuidv4 } from 'uuid'
import { uploadApiRequest } from '@/lib/upload-api-request'
import { NextResponse } from 'next/server'

type CreateTicketFilesParams = {
  uploadId: string
  files: Array<File>
}

type CreateTicketFilesParamsBody = {
  files: Array<File>
}

export async function POST(req: Request) {
  try {
    const { files }: CreateTicketFilesParamsBody = await req.json()

    const formData = new FormData()

    const uploadId = uuidv4()
    formData.append('uploadId', uploadId)

    for (const file of files) {
      const blob = new Blob([file], { type: file.type })
      formData.append('files', blob, file.name)
    }

    const response = uploadApiRequest('POST', '/upload/v2', formData)

    if (!response) {
      return NextResponse.json(
        { error: 'Failed to send files' },
        { status: 500 },
      )
    }
    return NextResponse.json(response)
  } catch (error) {
    console.error('Error sending files:', error)
    return NextResponse.json({ error: 'Failed to send files' }, { status: 500 })
  }
}
