
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Staff } from "../../types/restaurant";

interface StaffFormProps {
  onSubmit: (staff: Partial<Staff>) => void;
  initialData?: Partial<Staff>;
}

export function StaffForm({ onSubmit, initialData }: StaffFormProps) {
  const [formData, setFormData] = useState<Partial<Staff>>(initialData || {
    name: "",
    email: "",
    role: "STAFF",
    isActive: true
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRoleChange = (value: "MANAGER" | "STAFF") => {
    setFormData(prev => ({ ...prev, role: value }));
  };
  
  const handleActiveChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isActive: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="role">Role</Label>
        <Select 
          onValueChange={(value) => handleRoleChange(value as "MANAGER" | "STAFF")} 
          defaultValue={formData.role}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MANAGER">Manager</SelectItem>
            <SelectItem value="STAFF">Staff</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="isActive" className="flex-grow">Active Status</Label>
        <Switch 
          id="isActive"
          checked={formData.isActive}
          onCheckedChange={handleActiveChange}
        />
      </div>
      
      <Button type="submit" className="w-full">
        {initialData ? 'Update Staff Member' : 'Add Staff Member'}
      </Button>
    </form>
  );
}
