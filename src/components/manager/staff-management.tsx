
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Staff } from "../../types/restaurant";
import { StaffMemberModal } from '../screens/manager/staff-member-modal';

interface StaffManagementProps {
  staff: Staff[];
  onAddStaff: (staff: Partial<Staff>) => Promise<Staff>;
  onUpdateStaff: (id: string, staff: Partial<Staff>) => Promise<Staff>;
  onDeleteStaff: (id: string) => Promise<boolean>;
}

export function StaffManagement({ staff, onAddStaff, onUpdateStaff, onDeleteStaff }: StaffManagementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  
  const handleOpenAddModal = () => {
    setEditingStaff(null);
    setIsModalOpen(true);
  };
  
  const handleOpenEditModal = (staffMember: Staff) => {
    setEditingStaff(staffMember);
    setIsModalOpen(true);
  };
  
  const handleSaveStaff = async (data: Partial<Staff>) => {
    if (editingStaff) {
      await onUpdateStaff(editingStaff.id, data);
    } else {
      await onAddStaff(data);
    }
  };
  
  const handleDeleteStaff = async (id: string) => {
    if (confirm('Are you sure you want to delete this staff member?')) {
      await onDeleteStaff(id);
    }
  };
  
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Restaurant Staff</h2>
        <Button onClick={handleOpenAddModal}>Add Staff Member</Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {staff.map((staffMember) => (
              <tr key={staffMember.id}>
                <td className="px-4 py-3 text-sm">{staffMember.name}</td>
                <td className="px-4 py-3 text-sm">{staffMember.email}</td>
                <td className="px-4 py-3 text-sm">{staffMember.role}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    staffMember.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {staffMember.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleOpenEditModal(staffMember)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteStaff(staffMember.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {staff.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                  No staff members yet. Add your first one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <StaffMemberModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveStaff}
        initialData={editingStaff || undefined}
        title={editingStaff ? 'Edit Staff Member' : 'Add Staff Member'}
      />
    </div>
  );
}
