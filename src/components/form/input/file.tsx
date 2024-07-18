'use client'

import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { Upload } from 'lucide-react'
import { Variant } from './variants'

type FileProps = InputHTMLAttributes<HTMLInputElement> & {
  variant: Variant
}

export function File({ variant }: FileProps) {
  const [file, setFile] = useState<File | null>(null)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { files: inputFile } = event.currentTarget

    if (!inputFile) return

    setFile(inputFile[0])
  }

  return (
    <section className="w-full">
      <input
        id="files"
        type="file"
        className="sr-only"
        onChange={handleInputChange}
      />
      <label
        htmlFor="files"
        className={`flex justify-center gap-3 bg-zinc-800 rounded-md w-full cursor-pointer group ${variant.px} ${variant.py} ${variant.h}`}
      >
        {!file ? (
          <>
            <Upload className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Add file
            </span>
          </>
        ) : (
          <span className="text-zinc-500">{file.name}</span>
        )}
      </label>
    </section>
  )
}
