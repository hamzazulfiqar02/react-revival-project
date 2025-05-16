
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { StatCard } from '@/components/common'
import { Store, Users, Activity, Settings } from 'lucide-react'

// Admin Overview Page
const OverviewPage = () => (
  <DashboardLayout type="admin">
    <div>
      <h1 className="text-xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<Store size={16} />} 
          title="Total Restaurants" 
          value="24" 
        />
        <StatCard 
          icon={<Users size={16} />} 
          title="Total Users" 
          value="156" 
        />
        <StatCard 
          icon={<Activity size={16} />} 
          title="Active Deals" 
          value="43" 
        />
        <StatCard 
          icon={<Settings size={16} />} 
          title="Pending Approvals" 
          value="5" 
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="font-medium mb-4">Recently Added Restaurants</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Restaurant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cuisine</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: 'The Forest', cuisine: 'Fine Dining', location: 'New York, NY', status: 'Active' },
                { name: 'Velvet Room', cuisine: 'Italian', location: 'Boston, MA', status: 'Pending' },
                { name: 'Cut n\' Cut', cuisine: 'Steakhouse', location: 'Chicago, IL', status: 'Active' },
              ].map((restaurant, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm">{restaurant.name}</td>
                  <td className="px-4 py-3 text-sm">{restaurant.cuisine}</td>
                  <td className="px-4 py-3 text-sm">{restaurant.location}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      restaurant.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {restaurant.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button className="text-blue-600 mr-2">View</button>
                    <button className="text-gray-600">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
)

// Restaurant Management Page
const RestaurantManagement = () => (
  <DashboardLayout type="admin">
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Management</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <input 
              type="text" 
              placeholder="Search restaurants..." 
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>All Cuisines</option>
              <option>Fine Dining</option>
              <option>Casual</option>
              <option>Italian</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Restaurant</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cuisine</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { name: 'The Forest', owner: 'John Doe', cuisine: 'Fine Dining', location: 'New York, NY', status: 'Active' },
              { name: 'Velvet Room', owner: 'Jane Smith', cuisine: 'Italian', location: 'Boston, MA', status: 'Pending' },
              { name: 'Cut n\' Cut', owner: 'Robert Johnson', cuisine: 'Steakhouse', location: 'Chicago, IL', status: 'Active' },
              { name: 'Sea Breeze', owner: 'Emma Wilson', cuisine: 'Seafood', location: 'Miami, FL', status: 'Active' },
              { name: 'Spice Garden', owner: 'Michael Brown', cuisine: 'Indian', location: 'San Francisco, CA', status: 'Suspended' },
            ].map((restaurant, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-sm">{restaurant.name}</td>
                <td className="px-4 py-3 text-sm">{restaurant.owner}</td>
                <td className="px-4 py-3 text-sm">{restaurant.cuisine}</td>
                <td className="px-4 py-3 text-sm">{restaurant.location}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    restaurant.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    restaurant.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {restaurant.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 mr-2">View</button>
                  <button className="text-gray-600 mr-2">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mt-4 flex justify-between">
          <div>
            <span className="text-sm text-gray-700">
              Showing 1 to 5 of 24 entries
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="border border-gray-300 rounded-md px-3 py-1">Previous</button>
            <button className="border border-gray-300 rounded-md px-3 py-1 bg-primary text-white">1</button>
            <button className="border border-gray-300 rounded-md px-3 py-1">2</button>
            <button className="border border-gray-300 rounded-md px-3 py-1">3</button>
            <button className="border border-gray-300 rounded-md px-3 py-1">Next</button>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
)

// User Management Page
const UserManagement = () => (
  <DashboardLayout type="admin">
    <div>
      <h1 className="text-xl font-semibold mb-4">User Management</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <input 
              type="text" 
              placeholder="Search users..." 
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <button className="px-3 py-2 bg-primary text-white rounded-md">Add New User</button>
          </div>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membership</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { name: 'John Doe', email: 'john@example.com', membership: 'Premium', joinedDate: '01/05/2023' },
              { name: 'Jane Smith', email: 'jane@example.com', membership: 'Standard', joinedDate: '12/10/2023' },
              { name: 'Robert Johnson', email: 'robert@example.com', membership: 'Premium', joinedDate: '03/15/2024' },
              { name: 'Emma Wilson', email: 'emma@example.com', membership: 'Standard', joinedDate: '05/20/2024' },
              { name: 'Michael Brown', email: 'michael@example.com', membership: 'Free', joinedDate: '01/30/2024' },
            ].map((user, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-sm">{user.name}</td>
                <td className="px-4 py-3 text-sm">{user.email}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    user.membership === 'Premium' ? 'bg-purple-100 text-purple-800' : 
                    user.membership === 'Standard' ? 'bg-blue-100 text-blue-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user.membership}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{user.joinedDate}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 mr-2">View</button>
                  <button className="text-gray-600 mr-2">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
)

export default function AdminDashboardPage() {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/restaurants" element={<RestaurantManagement />} />
      <Route path="/users" element={<UserManagement />} />
    </Routes>
  )
}
