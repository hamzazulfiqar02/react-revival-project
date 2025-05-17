
import React from 'react';
import { Button } from "../ui/button";

interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  [key: string]: any;
}

interface StaffManagementProps {
  staff: Staff[];
  onAddStaff: (staff: Partial<Staff>) => Promise<Staff>;
  onUpdateStaff: (id: string, staff: Partial<Staff>) => Promise<Staff>;
  onDeleteStaff: (id: string) => Promise<boolean>;
}

export function StaffManagement({ staff, onAddStaff, onUpdateStaff, onDeleteStaff }: StaffManagementProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Restaurant Staff</h2>
        <Button>Add Staff Member</Button>
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
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
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
    </div>
  );
}
