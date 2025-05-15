
import React from 'react'

export default function ExplorePage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Explore</h1>
      <div className="mb-6">
        <input 
          type="text" 
          className="w-full p-3 border rounded-lg shadow-sm" 
          placeholder="Search for restaurants, cuisines or deals" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder content */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
          <h2 className="text-lg font-medium mb-2">Featured Restaurant</h2>
          <p className="text-sm text-gray-500">Italian • 2.5 miles away</p>
        </div>
      </div>
    </div>
  )
}
