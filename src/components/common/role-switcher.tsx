
import React from "react"
import { useNavigate } from "react-router-dom"
import { useRole } from "@/context/role-context" 
import { Button } from "@/components/ui/button"
import { UserRound, Building2, Users } from "lucide-react"

const roleRoutes = {
  user: "/",
  admin: "/admin/overview",
  manager: "/manager/overview"
}

export default function RoleSwitcher() {
  const { currentRole, switchRole } = useRole()
  const navigate = useNavigate()

  const handleSwitchRole = (role: "admin" | "manager" | "user") => {
    switchRole(role)
    navigate(roleRoutes[role])
  }

  return (
    <div className="flex gap-2">
      <Button 
        variant={currentRole === "user" ? "default" : "outline"} 
        size="sm"
        onClick={() => handleSwitchRole("user")}
        className="flex items-center gap-1"
      >
        <UserRound size={16} />
        <span className="hidden md:inline">Customer</span>
      </Button>
      <Button 
        variant={currentRole === "manager" ? "default" : "outline"} 
        size="sm"
        onClick={() => handleSwitchRole("manager")}
        className="flex items-center gap-1"
      >
        <Building2 size={16} />
        <span className="hidden md:inline">Manager</span>
      </Button>
      <Button 
        variant={currentRole === "admin" ? "default" : "outline"} 
        size="sm"
        onClick={() => handleSwitchRole("admin")}
        className="flex items-center gap-1"
      >
        <Users size={16} />
        <span className="hidden md:inline">Admin</span>
      </Button>
    </div>
  )
}
