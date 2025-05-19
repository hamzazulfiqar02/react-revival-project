
import React from 'react';
import DashboardLayout from '../../components/layouts/dashboard-layout';
import StaffTable from '../../components/screens/manager/staff-table';

export default function ManagerStaffManagementPage() {
  return (
    <DashboardLayout type="manager">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-4">Staff Management</h2>
        <p className="text-gray-500 mb-6">
          Manage staff members who can access your restaurant's dashboard.
        </p>
        
        <StaffTable />
      </div>
    </DashboardLayout>
  );
}
