
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, Search, Ticket, User, Settings } from "lucide-react"
import { useRole } from "../context/role-context"

export default function BottomNavigation() {
  const location = useLocation()
  const { currentRole } = useRole()
  
  // Don't show bottom navigation for admin and manager roles
  if (currentRole === "admin" || currentRole === "manager") {
    return null
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden z-50">
      <Link
        to="/"
        className={`flex flex-col items-center p-2 ${
          isActive("/") ? "text-primary" : "text-gray-500"
        }`}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        to="/explore-restaurants"
        className={`flex flex-col items-center p-2 ${
          isActive("/explore-restaurants") ? "text-primary" : "text-gray-500"
        }`}
      >
        <Search size={20} />
        <span className="text-xs mt-1">Explore</span>
      </Link>
      <Link
        to="/deals"
        className={`flex flex-col items-center p-2 ${
          isActive("/deals") ? "text-primary" : "text-gray-500"
        }`}
      >
        <Ticket size={20} />
        <span className="text-xs mt-1">Deals</span>
      </Link>
      <Link
        to="/account"
        className={`flex flex-col items-center p-2 ${
          isActive("/account") ? "text-primary" : "text-gray-500"
        }`}
      >
        <User size={20} />
        <span className="text-xs mt-1">Account</span>
      </Link>
    </div>
  )
}
