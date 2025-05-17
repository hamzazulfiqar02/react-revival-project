
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/dashboard-layout';

// Import admin components
const AdminOverview = () => <div className="p-4"><h1 className="text-2xl font-bold">Admin Overview</h1></div>;
const RestaurantsManagement = () => <div className="p-4"><h1 className="text-2xl font-bold">Restaurants Management</h1></div>;
const UsersManagement = () => <div className="p-4"><h1 className="text-2xl font-bold">Users Management</h1></div>;
const ActivityLogs = () => <div className="p-4"><h1 className="text-2xl font-bold">Activity Logs</h1></div>;

export default function AdminDashboardPage() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/overview" replace />} />
      
      <Route path="/overview" element={
        <DashboardLayout type="admin">
          <AdminOverview />
        </DashboardLayout>
      } />
      
      <Route path="/restaurants" element={
        <DashboardLayout type="admin">
          <RestaurantsManagement />
        </DashboardLayout>
      } />
      
      <Route path="/users" element={
        <DashboardLayout type="admin">
          <UsersManagement />
        </DashboardLayout>
      } />
      
      <Route path="/activity-logs" element={
        <DashboardLayout type="admin">
          <ActivityLogs />
        </DashboardLayout>
      } />
    </Routes>
  );
}
