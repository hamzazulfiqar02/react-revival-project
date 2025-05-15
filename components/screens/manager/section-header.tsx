import type React from "react"

interface SectionHeaderProps {
  title: string
  tooltip?: string
  children?: React.ReactNode
}

export function SectionHeader({ title, tooltip, children }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold font-poppins">{title}</h2>
        
      </div>
      {children}
    </div>
  )
}
