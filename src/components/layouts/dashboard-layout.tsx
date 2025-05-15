
import React from "react"
import { DashboardHeader, DashboardSidebar } from "../common"

interface LayoutProps {
  children: React.ReactNode
  type: string
}

const DashboardLayout = ({ children, type }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar type={type} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 bg-white m-4 rounded-lg shadow-sm">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
