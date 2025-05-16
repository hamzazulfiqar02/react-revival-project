
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Staff } from "../../types/restaurant";
import { StaffForm } from "./staff-form";
import { toast } from "../../helpers/toast";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

interface StaffManagementProps {
  staff: Staff[];
  onAddStaff: (staff: Partial<Staff>) => Promise<Staff>;
  onUpdateStaff: (id: string, staff: Partial<Staff>) => Promise<Staff>;
  onDeleteStaff: (id: string) => Promise<boolean>;
}

export function StaffManagement({ staff, onAddStaff, onUpdateStaff, onDeleteStaff }: StaffManagementProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeStaff, setActiveStaff] = useState<Staff | null>(null);
  
  const handleOpenAddDialog = () => {
    setActiveStaff(null);
    setIsDialogOpen(true);
  };
  
  const handleOpenEditDialog = (staffMember: Staff) => {
    setActiveStaff(staffMember);
    setIsDialogOpen(true);
  };
  
  const handleStaffSubmit = async (staffData: Partial<Staff>) => {
    try {
      if (activeStaff) {
        await onUpdateStaff(activeStaff.id, staffData);
        toast.success('Staff member updated successfully!');
      } else {
        await onAddStaff(staffData);
        toast.success('Staff member added successfully!');
      }
      setIsDialogOpen(false);
    } catch (error) {
      toast.error('Failed to save staff member.');
    }
  };
  
  const handleDeleteStaff = async (id: string) => {
    try {
      await onDeleteStaff(id);
      toast.success('Staff member deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete staff member.');
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Restaurant Staff</h2>
        <Button onClick={handleOpenAddDialog} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" /> Add Staff Member
        </Button>
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
                <td className="px-4 py-3 text-sm flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleOpenEditDialog(staffMember)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDeleteStaff(staffMember.id)}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
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
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{activeStaff ? 'Edit Staff Member' : 'Add New Staff Member'}</DialogTitle>
          </DialogHeader>
          <StaffForm
            onSubmit={handleStaffSubmit}
            initialData={activeStaff || undefined}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
