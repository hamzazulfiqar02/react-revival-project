"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminDashboardPage() {
  const router = useRouter()

  // This is a placeholder for authentication check
  // In a real app, you would check if the user is authenticated
  useEffect(() => {
    // Simulate checking authentication
    const isAuthenticated = false // This would be a real check in your app

    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          RESTAURANT-<span className="text-primary">PARTNERS</span> DASHBOARD
        </h1>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard</h2>
          <p className="text-gray-600">
            This is a placeholder for the admin dashboard. In a real application, you would see your restaurant
            management tools here.
          </p>
        </div>
      </div>
    </div>
  )
}
