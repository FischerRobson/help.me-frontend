import { uploadApiRequest } from '@/lib/upload-api-request'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

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
