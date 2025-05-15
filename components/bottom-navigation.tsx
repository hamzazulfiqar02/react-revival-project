
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Ticket, Search, UserPlus, User } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function BottomNavigation() {
  const pathname = usePathname() || "/"
  const isMobile = useMobile()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "My Deals", href: "/deals", icon: Ticket },
    { name: "Explore", href: "/explore", icon: Search },
    { name: "Account", href: "/account", icon: User },
  ]

  if (!isMobile) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
        const IconComponent = item.icon
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive ? "text-primary" : "text-gray-500"
            }`}
          >
            <IconComponent size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
