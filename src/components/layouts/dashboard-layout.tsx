
import React from "react"
import DashboardHeader from "../common/dashboard-header"
import DashboardSidebar from "../common/dashboard-sidebar"

interface DashboardLayoutProps {
  type: "admin" | "manager"
  children: React.ReactNode
}

export function DashboardLayout({ type, children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar type={type} />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6 h-[calc(100vh-64px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
