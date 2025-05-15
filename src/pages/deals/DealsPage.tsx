
import React from 'react'

export default function DealsPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">My Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder content */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="h-32 bg-gray-200 rounded-md mb-4"></div>
          <h2 className="text-lg font-medium mb-2">Buy One Get One Free</h2>
          <p className="text-sm text-gray-500">Restaurant Name • Valid until 30 Jun</p>
        </div>
      </div>
    </div>
  )
}
