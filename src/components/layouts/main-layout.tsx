
import React, { ReactNode } from "react"
import { Header, Footer } from "../common"
import BottomNavigation from "../bottom-navigation"
import RoleSwitcher from "../common/role-switcher"

interface Props {
  children: ReactNode
  className?: string
}

const MainLayout = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`min-h-screen bg-white max-w-6xl mx-auto px-4 pb-16 md:pb-0 flex flex-col gap-8 md:gap-16 my-6 ${className}`}
    >
      <div className="fixed top-4 right-4 z-50">
        <RoleSwitcher />
      </div>
      
      {/* Header */}
      <Header />

      <main className="h-full flex-1">{children}</main>

      {/* Footer */}
      <Footer />
      <BottomNavigation />
    </div>
  )
}

export default MainLayout
