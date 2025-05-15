
import React from "react"
import { Facebook, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-12 hidden md:block">
      <div className="px-6 md:px-8 flex flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Link to={"/"}>
            <img 
              src="/images/super-mondays-logo.png"
              alt="Super Mondays Logo"
              className="w-[60px] h-[60px]"
            />
          </Link>
        </div>
        <div className="text-sm text-Black70">© Super BOGO</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Facebook className="text-primary fill-primary" />
          <Instagram className="text-primary" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
