
import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Super Mondays - Restaurant Membership Platform
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Connect restaurants offering exclusive deals with customers who want to access them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Customer Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-6 py-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">For Customers</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Browse restaurants and access exclusive deals
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Browse as Customer
                </Link>
              </div>
              <div className="mt-4">
                <Link to="/login" className="text-primary hover:text-primary-dark text-sm font-medium">
                  Customer Login
                </Link>
                {" · "}
                <Link to="/signup" className="text-primary hover:text-primary-dark text-sm font-medium">
                  Customer Signup
                </Link>
              </div>
            </div>
          </div>

          {/* Restaurant Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg border-2 border-primary">
            <div className="px-6 py-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">For Restaurants</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage your restaurant and promotional offers
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/manager/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Register Your Restaurant
                </Link>
              </div>
              <div className="mt-4">
                <Link to="/manager/login" className="text-primary hover:text-primary-dark text-sm font-medium">
                  Restaurant Login
                </Link>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900">Restaurant Dashboard Access</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link to="/manager/overview" className="text-primary hover:text-primary-dark">
                      → Dashboard Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/manager/deal-management" className="text-primary hover:text-primary-dark">
                      → Deal Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/manager/staff-management" className="text-primary hover:text-primary-dark">
                      → Staff Management
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Admin Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-6 py-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Admin Portal</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Platform administration and management
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Admin Login
                </Link>
              </div>
              <div className="mt-4">
                <Link to="/admin/overview" className="text-primary hover:text-primary-dark text-sm font-medium">
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Restaurant Deals</h2>
          <Link
            to="/explore-restaurants"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
          >
            Explore All Restaurants
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
