
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Staff } from "@/types/restaurant";

interface StaffMemberModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: Partial<Staff>) => void;
  initialData?: Staff;
  title?: string;
}

export function StaffMemberModal({ 
  open, 
  onClose, 
  onSave, 
  initialData, 
  title = "Add Staff Member" 
}: StaffMemberModalProps) {
  const [formData, setFormData] = React.useState<Partial<Staff>>({
    name: initialData?.name || "",
    email: initialData?.email || "",
    role: initialData?.role || "STAFF",
    isActive: initialData?.isActive !== undefined ? initialData.isActive : true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: "MANAGER" | "STAFF") => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Role</Label>
            <RadioGroup 
              value={formData.role} 
              onValueChange={(value: "MANAGER" | "STAFF") => handleRoleChange(value)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="MANAGER" id="manager" />
                <Label htmlFor="manager">Manager</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="STAFF" id="staff" />
                <Label htmlFor="staff">Staff</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label>Status</Label>
            <RadioGroup 
              value={formData.isActive ? "active" : "inactive"} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, isActive: value === "active" }))}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active">Active</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inactive" id="inactive" />
                <Label htmlFor="inactive">Inactive</Label>
              </div>
            </RadioGroup>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
