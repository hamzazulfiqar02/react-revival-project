
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Staff } from "@/types/restaurant";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StaffFormProps {
  onSubmit: (staff: Partial<Staff>) => void;
  initialData?: Partial<Staff>;
}

export function StaffForm({ onSubmit, initialData }: StaffFormProps) {
  const [formData, setFormData] = useState<Partial<Staff>>(initialData || {
    name: "",
    email: "",
    role: "STAFF",
    isActive: true,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: Partial<Staff>) => ({ ...prev, [name]: value }));
  };
  
  const handleRoleChange = (value: string) => {
    setFormData((prev: Partial<Staff>) => ({ ...prev, role: value as Staff['role'] }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Staff Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter staff name"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="role">Role</Label>
        <Select 
          onValueChange={handleRoleChange} 
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
      
      <Button type="submit" className="w-full">
        {initialData ? "Update Staff" : "Add Staff"}
      </Button>
    </form>
  );
}
