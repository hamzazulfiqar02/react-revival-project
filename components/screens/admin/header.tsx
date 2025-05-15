"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"

export default function AdminHeader() {
  const pathname = usePathname()

  // Extract the current page title from the pathname
  const getPageTitle = () => {
    if (pathname === "/admin/overview") return "Overview"
    if (pathname === "/admin/users") return "User Management"
    if (pathname === "/admin/restaurants") return "Restaurant Management"
    if (pathname === "/admin/deals") return "Deal Management"
    return "Admin Dashboard"
  }

  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <h1 className="text-[28px] font-bold font-el-messiri">{getPageTitle()}</h1>
      <div className="flex items-center space-x-4">
        <button className="w-9 h-9 flex justify-center items-center bg-primary-lightest rounded-full">
          <Bell size={16} className="text-primary-light" />
        </button>
        <div className="flex items-center">
          <div className="mr-3 text-right">
            <div className="text-sm font-medium text-gray-900">Admin</div>
            <div className="text-xs text-gray-500">admin@supermondays.com</div>
          </div>
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <Image
              src="/profile.png"
              alt="Admin profile"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
