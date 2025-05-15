"use client"

import { X } from "lucide-react"

interface FilterTagProps {
  label: string
  onRemove: () => void
}

export function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2">
      <span className="text-sm text-gray-800">{label}</span>
      <button onClick={onRemove} className="ml-1 text-gray-500 hover:text-gray-700">
        <X className="h-3 w-3" />
      </button>
    </div>
  )
}
