
import React from 'react'

export default function StaffBoardPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Staff Board</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-medium mb-4">Scan QR Code</h2>
        <div className="flex justify-center mb-6">
          <div className="w-64 h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">QR Scanner Here</span>
          </div>
        </div>
        <button className="w-full bg-primary text-white py-3 rounded-lg">Scan Customer QR</button>
      </div>
    </div>
  )
}
