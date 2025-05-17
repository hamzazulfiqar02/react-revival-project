
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { StaffManagement } from '@/components/manager/staff-management'
import { Staff } from '@/types/restaurant'

export default function ManagerStaffManagementPage() {
  // Mock staff data with proper types
  const mockStaff: Staff[] = [
    {
      id: "staff1",
      restaurantId: "restaurant1",
      name: "John Doe",
      email: "john@restaurant.com",
      role: "MANAGER",
      isActive: true
    },
    {
      id: "staff2",
      restaurantId: "restaurant1",
      name: "Jane Smith",
      email: "jane@restaurant.com",
      role: "STAFF",
      isActive: true
    }
  ]
  
  // Mock functions with proper type annotations
  const handleAddStaff = (staff: Partial<Staff>): Promise<Staff> => {
    return Promise.resolve({
      id: "new-staff",
      restaurantId: "restaurant1",
      name: staff.name || "",
      email: staff.email || "",
      role: staff.role || "STAFF",
      isActive: staff.isActive !== undefined ? staff.isActive : true
    });
  };
  
  const handleUpdateStaff = (id: string, staff: Partial<Staff>): Promise<Staff> => {
    return Promise.resolve({
      id,
      restaurantId: "restaurant1",
      name: staff.name || "",
      email: staff.email || "",
      role: staff.role || "STAFF",
      isActive: staff.isActive !== undefined ? staff.isActive : true
    });
  };
  
  const handleDeleteStaff = (id: string): Promise<boolean> => {
    return Promise.resolve(true);
  };
  
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
