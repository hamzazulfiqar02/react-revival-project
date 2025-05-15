
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LogOut, Settings } from "lucide-react"

interface Props {
  type: string
}

export default function DashboardSidebar({ type }: Props) {
  const location = useLocation()

  // Simple placeholder nav items
  const adminNavItems = [
    { name: "Overview", href: "/admin/overview", icon: () => <span>📊</span> },
    { name: "Restaurants", href: "/admin/restaurants", icon: () => <span>🍽️</span> },
    { name: "Users", href: "/admin/users", icon: () => <span>👥</span> },
    { name: "Activity Logs", href: "/admin/activity-logs", icon: () => <span>📝</span> },
  ]

  const managerNavItems = [
    { name: "Overview", href: "/manager/overview", icon: () => <span>📊</span> },
    { name: "Deal Management", href: "/manager/deal-management", icon: () => <span>🎟️</span> },
    { name: "Staff Management", href: "/manager/staff-management", icon: () => <span>👥</span> },
    { name: "Dishes", href: "/manager/dishes", icon: () => <span>🍲</span> },
    { name: "Redemption View", href: "/manager/redemption-view", icon: () => <span>📋</span> },
  ]

  const getNavItems = (type: string) => {
    switch (type) {
      case "admin":
        return adminNavItems
      case "manager":
        return managerNavItems
      default:
        return adminNavItems
    }
  }

  const navItems = getNavItems(type)
  const settingsPath = "/manager/settings"

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4">
        <Link to={`/${type}`} className="w-10 h-10 flex items-center shadow-md">
          <img
            src="/images/super-mondays-logo.png"
            alt="Super Mondays Logo"
            className="w-10 h-10 mr-2"
          />
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1 mt-6">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.href || location.pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`text-xs font-poppins flex items-center px-4 py-3 rounded-[8px] font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-Black70 hover:bg-gray-100"
              }`}
            >
              <span className={`mr-3 ${isActive ? "text-white" : "text-Black70"}`}>
                <item.icon />
              </span>
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-gray-200">
        {type === "manager" && (
          <Link
            to="/manager/settings"
            className={`text-xs font-poppins flex items-center px-4 py-3 rounded-[8px] font-medium transition-colors ${
              location.pathname === settingsPath ||
              location.pathname.startsWith(`${settingsPath}/`)
                ? "bg-primary text-white"
                : "text-Black70 hover:bg-gray-100"
            }`}
          >
            <Settings
              className={`mr-3 h-4 w-4 ${
                location.pathname === settingsPath ||
                location.pathname.startsWith(`${settingsPath}/`)
                  ? "text-white"
                  : "text-Black70"
              }`}
            />
            Settings
          </Link>
        )}
        <button className="flex items-center px-4 py-3 w-full rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut className="mr-3 h-5 w-5 text-gray-500" />
          Log Out
        </button>
      </div>
    </div>
  )
}
