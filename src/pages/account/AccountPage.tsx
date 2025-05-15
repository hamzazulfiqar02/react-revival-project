
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react'
import { useAuth } from '@/context/auth-context'
import { QRCodeModal } from '@/components/common/qr-code-modal'
import UserLayout from '@/components/layouts/user-layout'

const AccountPage = () => {
  const { user, signOut } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await signOut()
    } catch (error) {
      console.error("Error logging out:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <UserLayout>
      <div className="relative">
        {/* Top Section - First Half */}
        <div className="relative h-[40vh] bg-cover bg-center" 
             style={{ backgroundImage: "url('/images/wine-toast-background.png')" }}>

          {/* Back button */}
          <div className="absolute top-3 left-4 z-10 w-fit">
            <Link to="/" className="flex items-center gap-2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
              <ChevronLeft size={16} />
              <span className="font-medium text-sm">Profile</span>
            </Link>
          </div>

          {/* Logout button */}
          <div className="absolute top-3 right-4 z-10 w-fit">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center gap-2 bg-red-600 bg-opacity-90 text-white px-4 py-2 rounded-full"
            >
              <LogOut size={16} />
              <span className="font-medium text-sm">{isLoggingOut ? "Logging out..." : "Logout"}</span>
            </button>
          </div>

          {/* Dark overlay to ensure text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-[5]"></div>

          {/* Text Overlay - with black background */}
          <div className="absolute bottom-16 left-12 z-10">
            <div className="bg-black p-3 inline-block">
              <h1 className="text-primary text-4xl font-bold">Dine More,</h1>
              <h1 className="text-primary text-4xl font-bold -mt-2">Spend Less</h1>
              <p className="text-white text-3xl font-bold">Every Monday!</p>
            </div>
          </div>
        </div>

        {/* White Card with Curved Top - Positioned to overlap the background image */}
        <div className="relative top-[-5vh] bg-white rounded-t-[40px] shadow-sm z-20 pt-20 px-4 pb-6">
          {/* Profile Picture - Positioned to overlap both background and card */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 z-30">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <img
                src={user?.user_metadata?.avatar_url || "/images/profile-picture.png"}
                alt="Profile picture"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card Content - with padding to account for the profile picture */}
          <div className="pt-4">
            {/* Name and Edit Profile */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mt-3">{user?.user_metadata?.full_name || "John Doe"}</h2>
              <button className="text-primary text-sm mt-1">Edit profile</button>
            </div>

            {/* Menu Items */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              {/* Refer a friend */}
              <Link to="/refer" className="flex items-center justify-between p-4 bg-white">
                <span className="font-medium">Refer a friend</span>
                <ChevronRight size={20} className="text-gray-400" />
              </Link>

              {/* Divider */}
              <div className="h-px bg-gray-100"></div>

              {/* History */}
              <Link to="/deals" className="flex items-center justify-between p-4 bg-white">
                <span className="font-medium">History</span>
                <ChevronRight size={20} className="text-gray-400" />
              </Link>

              {/* Divider */}
              <div className="h-px bg-gray-100"></div>

              {/* QR Code */}
              <div 
                className="flex items-center justify-between p-4 bg-white cursor-pointer"
                onClick={openModal}
              >
                <span className="font-medium">My QR Code</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>

            {/* Confirmation Code Numbers */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4 text-center">Weekly Confirmation Code</h3>
              <div className="flex justify-center gap-2">
                <div className="w-[72px] h-[100px] bg-gray-100 rounded-lg flex items-center justify-center text-4xl font-bold">
                  9
                </div>
                <div className="w-[72px] h-[100px] bg-gray-100 rounded-lg flex items-center justify-center text-4xl font-bold">
                  3
                </div>
                <div className="w-[72px] h-[100px] bg-gray-100 rounded-lg flex items-center justify-center text-4xl font-bold">
                  4
                </div>
                <div className="w-[72px] h-[100px] bg-gray-100 rounded-lg flex items-center justify-center text-4xl font-bold">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QRCodeModal isOpen={isModalOpen} onClose={closeModal} />
    </UserLayout>
  )
}

export default AccountPage
