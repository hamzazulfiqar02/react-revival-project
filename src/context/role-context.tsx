
import React, { createContext, useContext, useState } from "react"

type Role = "admin" | "manager" | "user"

type RoleContextType = {
  currentRole: Role
  switchRole: (role: Role) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState<Role>("user")

  const switchRole = (role: Role) => {
    setCurrentRole(role)
  }

  return (
    <RoleContext.Provider value={{ currentRole, switchRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider")
  }
  return context
}
