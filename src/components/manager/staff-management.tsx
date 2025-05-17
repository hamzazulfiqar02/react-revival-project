
import React, { useState } from 'react';
import { Staff } from './types';
import { Button } from '../ui/button';
import { StaffMemberModal } from '../screens/manager/staff-member-modal';
import { DataTable } from '../screens/manager/data-table';

interface StaffManagementProps {
  staff: Staff[];
  onAddStaff: (staff: Partial<Staff>) => Promise<Staff>;
  onUpdateStaff: (id: string, staff: Partial<Staff>) => Promise<Staff>;
  onDeleteStaff: (id: string) => Promise<boolean>;
}

export function StaffManagement({ staff, onAddStaff, onUpdateStaff, onDeleteStaff }: StaffManagementProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  
  const handleAddStaff = async (data: Partial<Staff>) => {
    await onAddStaff(data);
    setIsAddModalOpen(false);
  };
  
  const handleUpdateStaff = async (id: string, data: Partial<Staff>) => {
    await onUpdateStaff(id, data);
    setEditingStaff(null);
  };
  
  const handleDeleteConfirmation = async (id: string) => {
    if (confirm('Are you sure you want to delete this staff member?')) {
      await onDeleteStaff(id);
    }
  };
  
  const columns = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "role",
      header: "Role",
      render: (value: string) => value === 'MANAGER' ? 'Manager' : 'Staff',
    },
    {
      key: "isActive",
      header: "Status",
      render: (value: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}>
          {value ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (_: any, row: any) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={() => setEditingStaff(row)}>
            Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={() => handleDeleteConfirmation(row.id)}>
            Delete
          </Button>
        </div>
      ),
    }
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">
          Manage staff members who can access your restaurant's dashboard.
        </p>
        <Button onClick={() => setIsAddModalOpen(true)}>Add Staff Member</Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <DataTable columns={columns} data={staff} />
      </div>
      
      {isAddModalOpen && (
        <StaffMemberModal 
          open={isAddModalOpen}
          onOpenChange={() => setIsAddModalOpen(false)}
          onSave={handleAddStaff}
          title="Add Staff Member"
        />
      )}
      
      {editingStaff && (
        <StaffMemberModal
          open={!!editingStaff}
          onOpenChange={() => setEditingStaff(null)}
          onSave={(data: Partial<Staff>) => handleUpdateStaff(editingStaff.id, data)}
          initialData={editingStaff}
          title="Edit Staff Member"
        />
      )}
    </div>
  );
}
