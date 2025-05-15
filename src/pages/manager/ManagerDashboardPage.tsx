
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '@/components/layouts/dashboard-layout'

// Create simple placeholder components for dashboard routes
const OverviewPage = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Total Redemptions</h2>
          <p className="text-3xl font-bold">48</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Active Deals</h2>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">$12,450</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
)

const DealManagement = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Deal Management</h1>
      <p>Manage your restaurant deals here</p>
    </div>
  </DashboardLayout>
)

const StaffManagement = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      <p>Manage your restaurant staff here</p>
    </div>
  </DashboardLayout>
)

const Settings = () => (
  <DashboardLayout type="manager">
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Settings</h1>
      <p>Update your restaurant settings here</p>
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
