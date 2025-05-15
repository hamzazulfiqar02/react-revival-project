
import React from 'react'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-2">Forgot Password</h1>
        <p className="text-center text-gray-500 mb-6">Enter your email to reset your password</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">Reset Password</button>
        </form>
      </div>
    </div>
  )
}
