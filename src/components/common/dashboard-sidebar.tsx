
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LogOut, Settings, LayoutDashboard, Store, Users, CalendarIcon, MessageSquare, BarChart2, FileText, Clock } from "lucide-react"
import RoleSwitcher from "./role-switcher"
import { useRole } from "@/context/role-context"

interface Props {
  type: string
}

export default function DashboardSidebar({ type }: Props) {
  const location = useLocation()
  const { switchRole } = useRole()

  // Admin navigation items
  const adminNavItems = [
    { name: "Overview", href: "/admin/overview", icon: LayoutDashboard },
    { name: "Restaurants", href: "/admin/restaurants", icon: Store },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Activity Logs", href: "/admin/activity-logs", icon: FileText },
  ]

  // Manager navigation items
  const managerNavItems = [
    { name: "Overview", href: "/manager/overview", icon: LayoutDashboard },
    { name: "Deal Management", href: "/manager/deal-management", icon: CalendarIcon },
    { name: "Staff Management", href: "/manager/staff-management", icon: Users },
    { name: "Dishes", href: "/manager/dishes", icon: Store },
    { name: "Redemption View", href: "/manager/redemption-view", icon: BarChart2 },
    { name: "Redemption History", href: "/manager/redemption-history", icon: Clock },
    { name: "Report Redemption", href: "/manager/report-redemption", icon: MessageSquare },
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
  const settingsPath = `/${type}/settings`

  // Handle logout
  const handleLogout = () => {
    // Navigate to customer view
    switchRole("user")
    window.location.href = "/"
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 flex justify-between items-center">
        <Link to={`/${type}`} className="w-10 h-10 flex items-center shadow-md">
          <img
            src="/images/super-mondays-logo.png"
            alt="Super Mondays Logo"
            className="w-10 h-10 mr-2"
          />
        </Link>
        <div className="scale-75 origin-right">
          <RoleSwitcher />
        </div>
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
              <item.icon
                className={`mr-3 h-4 w-4 ${isActive ? "text-white" : "text-Black70"}`}
              />
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
        <button 
          onClick={handleLogout}
          className="flex items-center px-4 py-3 w-full rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 text-gray-500" />
          Log Out
        </button>
      </div>
    </div>
  )
}
