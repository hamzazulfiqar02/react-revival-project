
import React from 'react'

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-2">Reset Password</h1>
        <p className="text-center text-gray-500 mb-6">Enter your new password</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input id="password" type="password" className="w-full p-2 border rounded-md" placeholder="Enter new password" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input id="confirmPassword" type="password" className="w-full p-2 border rounded-md" placeholder="Confirm new password" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">Update Password</button>
        </form>
      </div>
    </div>
  )
}
