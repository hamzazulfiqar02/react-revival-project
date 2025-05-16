
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { StatCard } from '@/components/common'
import { Store, Users, Calendar, DollarSign } from 'lucide-react'

// Create simple placeholder components for dashboard routes
const OverviewPage = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<Store size={16} />} 
          title="Total Redemptions" 
          value="48" 
        />
        <StatCard 
          icon={<Users size={16} />} 
          title="Active Deals" 
          value="3" 
        />
        <StatCard 
          icon={<DollarSign size={16} />} 
          title="Total Revenue" 
          value="$12,450" 
        />
        <StatCard 
          icon={<Calendar size={16} />} 
          title="Super Monday Visits" 
          value="32" 
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="font-medium mb-4">Recent Redemptions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <tr key={item}>
                  <td className="px-4 py-3 text-sm">Customer {item}</td>
                  <td className="px-4 py-3 text-sm">BOGO Main Dish</td>
                  <td className="px-4 py-3 text-sm">{new Date().toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-sm">${Math.floor(Math.random() * 100) + 50}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
)

const DealManagement = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Deal Management</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4 flex justify-between">
          <h2 className="font-medium">Active Deals</h2>
          <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">Add New Deal</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['BOGO Monday Deal', 'Happy Hour Special'].map((deal, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">{deal}</h3>
                <div className="flex space-x-2">
                  <button className="text-blue-600 text-sm">Edit</button>
                  <button className="text-red-600 text-sm">Delete</button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Valid on: Monday, Tuesday</p>
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
)

const StaffManagement = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4 flex justify-between">
          <h2 className="font-medium">Restaurant Staff</h2>
          <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">Add Staff Member</button>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { name: 'John Doe', email: 'john@example.com', role: 'Manager' },
              { name: 'Jane Smith', email: 'jane@example.com', role: 'Staff' },
              { name: 'Robert Johnson', email: 'robert@example.com', role: 'Staff' },
            ].map((staff, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-sm">{staff.name}</td>
                <td className="px-4 py-3 text-sm">{staff.email}</td>
                <td className="px-4 py-3 text-sm">{staff.role}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 mr-2">Edit</button>
                  <button className="text-red-600">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
)

const Settings = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Settings</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-medium mb-4">Restaurant Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
            <input 
              type="text" 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" 
              defaultValue="The Forest Restaurant"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cuisine Type</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3">
              <option>Fine Dining</option>
              <option>Casual</option>
              <option>Fast Food</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="text" 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" 
              defaultValue="+1 234 567 8900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" 
              defaultValue="contact@forestrestaurant.com"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input 
              type="text" 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" 
              defaultValue="123 Main St, New York, NY 10001"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-primary text-white rounded-md">Save Changes</button>
        </div>
      </div>
    </div>
  </DashboardLayout>
)

export default function ManagerDashboardPage() {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/deal-management" element={<DealManagement />} />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
