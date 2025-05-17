
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { StaffManagement } from '@/components/manager/staff-management'
import { useRestaurantData } from '@/hooks/useRestaurantData'

export default function ManagerStaffManagementPage() {
  const {
    staff = [],
    addStaff,
    updateStaff,
    deleteStaff
  } = useRestaurantData()
  
  return (
    <DashboardLayout type="manager">
      <StaffManagement 
        staff={staff}
        onAddStaff={addStaff}
        onUpdateStaff={updateStaff}
        onDeleteStaff={deleteStaff}
      />
    </DashboardLayout>
  )
}
