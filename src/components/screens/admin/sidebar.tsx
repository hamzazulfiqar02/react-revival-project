
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LogOut } from "lucide-react"

export function AdminSidebar() {
  const location = useLocation()
  
  // Admin navigation items
  const navItems = [
    { name: "Overview", href: "/admin/overview", icon: () => <span>📊</span> },
    { name: "Restaurants", href: "/admin/restaurants", icon: () => <span>🍽️</span> },
    { name: "Users", href: "/admin/users", icon: () => <span>👥</span> },
    { name: "Activity Logs", href: "/admin/activity-logs", icon: () => <span>📝</span> },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4">
        <Link to="/admin" className="w-10 h-10 flex items-center shadow-md">
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
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center px-4 py-3 w-full rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut className="mr-3 h-5 w-5 text-gray-500" />
          Log Out
        </button>
      </div>
    </div>
  )
}
