"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"
import ProtectedRoute from "@/components/protected-route"
import { useAuth } from "@/context/auth-context"
import { ErrorToast } from "@/helpers/toast"
import { useRouter } from "next/navigation"
import Header from "@/components/common/header"

function ProfilePageContent() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await signOut()
      router.push("/login")
    } catch (error) {
      ErrorToast("Error logging out:")
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-white pb-16 font-poppins">
      <Header />
      {/* Main container with relative positioning to allow proper z-index stacking */}
      <div className="relative">
        {/* Top Section - First Half */}
        <div className="relative h-[40vh]">
          {/* Background Image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman-in-white-long-sleeve-shirt-holding-wine-glass-7BpuzmcxlHU-G8EuceZYxuczrk6ONdXcvs70eD0Rna.png"
            alt="People toasting with wine glasses"
            fill
            className="object-cover"
            priority
          />

          {/* Back button */}
          <div className="absolute top-3 left-4 z-10 w-fit">
            <Link href="/" className="flex items-center gap-2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
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
              <h1 className="text-primary text-4xl font-bold font-el-messiri">Dine More,</h1>
              <h1 className="text-primary text-4xl font-bold font-el-messiri -mt-2">Spend Less</h1>
              <p className="text-white text-3xl font-bold font-el-messiri">Every Monday!</p>
            </div>
          </div>
        </div>

        {/* White Card with Curved Top - Positioned to overlap the background image */}
        <div className="absolute top-[35vh] left-0 right-0 bg-white rounded-t-[40px] shadow-sm z-20">
          {/* Profile Picture - Positioned to overlap both background and card */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 z-30">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <Image
                src={user?.user_metadata?.avatar_url || "/images/profile-picture.png"}
                alt="Profile picture"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card Content - with padding to account for the profile picture */}
          <div className="pt-20 px-4 pb-6">
            {/* Name and Edit Profile */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mt-3"> {user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User"}</h2>
              <button className="text-primary text-sm mt-1">Edit profile</button>
            </div>

            {/* Menu Items */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              {/* Refer a friend */}
              <Link href="/refer" className="flex items-center justify-between p-4 bg-white">
                <span className="font-medium">Refer a friend</span>
                <ChevronRight size={20} className="text-gray-400" />
              </Link>

              {/* Divider */}
              <div className="h-px bg-gray-100"></div>

              {/* History */}
              <Link href="/history" className="flex items-center justify-between p-4 bg-white">
                <span className="font-medium">History</span>
                <ChevronRight size={20} className="text-gray-400" />
              </Link>

              {/* Divider */}
              <div className="h-px bg-gray-100"></div>

              {/* Confirmation Code */}
              <div className="p-4 bg-white">
                <span className="font-medium">Confirmation Code</span>
              </div>
            </div>

            {/* Confirmation Code Numbers */}
            <div className="mt-4 flex justify-center gap-2">
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

          {/* Add extra space at the bottom to ensure content isn't cut off */}
          <div className="h-16"></div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}


export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfilePageContent />
    </ProtectedRoute>
  )
}