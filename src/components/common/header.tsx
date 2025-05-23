
import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import { Menu, X, Bell } from "lucide-react"
import { useRole } from "../../context/role-context"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const { currentRole } = useRole()
  
  // Don't show header for admin and manager roles
  if (currentRole === "admin" || currentRole === "manager") {
    return null
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Explore Restaurants", href: "/explore-restaurants" },
    { name: "My Deals", href: "/deals" },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="w-full py-2 px-4 rounded-full shadow-lg border border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/super-mondays-logo.png"
              alt="Super Mondays"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-Black60 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div 
                  className="flex items-center space-x-2 cursor-pointer" 
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/images/profile-picture.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {user.name || "User"}
                  </span>
                </div>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <Link 
                      to="/account" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Account
                    </Link>
                    <Link 
                      to="/deals" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Deals
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-b border-gray-200">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium ${
                  isActive(item.href) ? "text-primary" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-base font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-base font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/account"
                  className="text-base font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  My Account
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="text-base font-medium text-gray-700 text-left"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
