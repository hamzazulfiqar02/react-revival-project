
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { StaffManagement } from '@/components/manager/staff-management'

export default function ManagerStaffManagementPage() {
  // Mock staff data
  const mockStaff = [
    {
      id: "staff1",
      name: "John Doe",
      email: "john@restaurant.com",
      role: "MANAGER",
      isActive: true
    },
    {
      id: "staff2",
      name: "Jane Smith",
      email: "jane@restaurant.com",
      role: "STAFF",
      isActive: true
    }
  ]
  
  // Mock functions
  const handleAddStaff = (staff) => Promise.resolve({ id: "new-staff", ...staff });
  const handleUpdateStaff = (id, staff) => Promise.resolve({ id, ...staff });
  const handleDeleteStaff = (id) => Promise.resolve(true);
  
  return (
    <DashboardLayout type="manager">
      <StaffManagement 
        staff={mockStaff}
        onAddStaff={handleAddStaff}
        onUpdateStaff={handleUpdateStaff}
        onDeleteStaff={handleDeleteStaff}
      />
    </DashboardLayout>
  )
}
