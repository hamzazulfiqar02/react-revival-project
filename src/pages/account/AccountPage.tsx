
import React from 'react'

export default function AccountPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">My Account</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div>
              <h2 className="text-xl font-medium">John Doe</h2>
              <p className="text-gray-500">john@example.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b">
              <span>Profile Settings</span>
              <span>→</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span>Notification Preferences</span>
              <span>→</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span>Payment Methods</span>
              <span>→</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span>Help Center</span>
              <span>→</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-red-500 text-white py-3 rounded-lg">Log Out</button>
      </div>
    </div>
  )
}
