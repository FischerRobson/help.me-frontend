'use client'

import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { Upload, X } from 'lucide-react'
import { Variant } from './variants'

type FileProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: Variant
}

export function File({ variant }: FileProps) {
  const [files, setFiles] = useState<File[] | null>(null)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { files: inputFile } = event.currentTarget

    if (!inputFile) return

    if (!files) {
      setFiles([inputFile[0]])
    } else {
      setFiles([...files, inputFile[0]])
    }
  }

  function removeFile(file: File) {
    const filteredFiles = files?.filter((e) => e.name !== file.name)

    setFiles(filteredFiles || [])
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
        className={`flex justify-center gap-3 bg-zinc-800 rounded-md w-full cursor-pointer group ${variant?.px} ${variant?.py} ${variant?.h}`}
      >
        <Upload className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
          Add file
        </span>
      </label>
      {files &&
        files.map((file) => {
          return (
            <section
              key={file.name}
              className="flex gap-3 my-1 group"
              onClick={() => removeFile(file)}
            >
              <span className="text-zinc-500 group-hover:text-red-400 cursor-pointer transition-colors">
                {file.name}
              </span>
              <X className="text-zinc-500 hidden group-hover:block group-hover:text-red-300 transition-colors" />
            </section>
          )
        })}
    </section>
  )
}
