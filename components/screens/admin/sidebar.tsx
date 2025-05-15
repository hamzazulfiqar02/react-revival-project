"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Store, LogOut, House, UserRound, Handshake } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Overview",
      href: "/admin/overview",
      icon: House,
    },
    {
      name: "User Management",
      href: "/admin/users",
      icon: UserRound,
    },
    {
      name: "Restaurant Management",
      href: "/admin/restaurants",
      icon: Store,
    },
    {
      name: "Deal Management",
      href: "/admin/deals",
      icon: Handshake,
    },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4">
        <Link href="/admin" className="w-10 h-10 flex items-center shadow-md">
          <Image
            src="/images/super-mondays-logo.png"
            alt="Super Mondays Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          {/* <span className="text-xl font-bold text-primary">Super Mondays</span> */}
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1 mt-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs font-poppins flex items-center px-4 py-3 rounded-[8px] font-medium transition-colors ${
                isActive ? "bg-primary text-white" : "text-Black70 hover:bg-gray-100"
              }`}
            >
              <item.icon className={`mr-3 h-4 w-4 ${isActive ? "text-white" : "text-Black70"}`} />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center px-4 py-3 w-full rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut className="mr-3 h-5 w-5 text-gray-500" />
          Log Out
        </button>
      </div>
    </div>
  )
}
