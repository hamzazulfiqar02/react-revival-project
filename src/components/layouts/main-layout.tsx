
import React, { ReactNode } from "react"
import { Header, Footer } from "../common"
import BottomNavigation from "../bottom-navigation"
import RoleSwitcher from "../common/role-switcher"
import { useLocation } from "react-router-dom"

interface Props {
  children: ReactNode
  className?: string
}

const MainLayout = ({ children, className = "" }: Props) => {
  const location = useLocation()
  
  // Don't show the header on the home page to prevent duplication
  const isHomePage = location.pathname === "/"
  
  return (
    <div
      className={`min-h-screen bg-white max-w-6xl mx-auto px-4 pb-16 md:pb-0 flex flex-col gap-8 md:gap-16 my-6 ${className}`}
    >
      <div className="fixed top-4 right-4 z-50">
        <RoleSwitcher />
      </div>
      
      {/* Only show Header if not on home page */}
      {!isHomePage && <Header />}

      <main className="h-full flex-1">{children}</main>

      {/* Footer */}
      <Footer />
      <BottomNavigation />
    </div>
  )
}

export default MainLayout
