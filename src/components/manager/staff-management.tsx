
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Staff } from "@/types/restaurant";
import { StaffForm } from "./staff-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/helpers/toast";

interface StaffManagementProps {
  staff: Staff[];
  onAddStaff: (staff: Partial<Staff>) => void;
  onUpdateStaff: (id: string, staff: Partial<Staff>) => void;
  onDeleteStaff: (id: string) => void;
}

export function StaffManagement({ staff, onAddStaff, onUpdateStaff, onDeleteStaff }: StaffManagementProps) {
  const [open, setOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  
  const handleOpenDialog = (staff: Staff | null = null) => {
    setSelectedStaff(staff);
    setOpen(true);
  };
  
  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedStaff(null);
  };
  
  const handleAddStaff = (staff: Partial<Staff>) => {
    onAddStaff(staff);
    toast.success("Staff member added successfully");
    handleCloseDialog();
  };
  
  const handleUpdateStaff = (staff: Partial<Staff>) => {
    if (selectedStaff) {
      onUpdateStaff(selectedStaff.id, staff);
      toast.success("Staff member updated successfully");
      handleCloseDialog();
    }
  };
  
  const handleDeleteStaff = (id: string) => {
    onDeleteStaff(id);
    toast.success("Staff member removed successfully");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Staff Management</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4 flex justify-between">
          <h2 className="font-medium">Restaurant Staff</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => handleOpenDialog()}>
                <Plus size={16} className="mr-2" />
                Add Staff Member
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{selectedStaff ? "Edit Staff Member" : "Add New Staff Member"}</DialogTitle>
              </DialogHeader>
              <StaffForm
                onSubmit={selectedStaff ? handleUpdateStaff : handleAddStaff}
                initialData={selectedStaff || undefined}
              />
            </DialogContent>
          </Dialog>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {staff.map((staffMember) => (
              <tr key={staffMember.id}>
                <td className="px-4 py-3 text-sm">{staffMember.name}</td>
                <td className="px-4 py-3 text-sm">{staffMember.email}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-block text-xs px-2 py-1 rounded ${
                    staffMember.role === 'MANAGER' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {staffMember.role === 'MANAGER' ? 'Manager' : 'Staff'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button 
                    className="text-blue-600 mr-2"
                    onClick={() => handleOpenDialog(staffMember)}
                  >
                    Edit
                  </button>
                  <button 
                    className="text-red-600"
                    onClick={() => handleDeleteStaff(staffMember.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {staff.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-sm text-center text-gray-500">
                  No staff members added yet. Add your first staff member.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
