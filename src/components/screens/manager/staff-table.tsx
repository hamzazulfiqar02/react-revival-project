
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "../../ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { StaffMemberModal } from "./staff-member-modal";

// Sample data for the table
const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    status: "Active",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert@example.com",
    status: "Disabled",
  },
];

export default function StaffTable() {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  const handleSaveStaffMember = (data: any) => {
    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUser.id ? { ...user, ...data } : user
      ));
      setEditingUser(null);
    } else {
      // Add new user
      setUsers([...users, { 
        id: users.length + 1, 
        name: data.name, 
        email: data.email, 
        status: data.isActive ? "Active" : "Disabled" 
      }]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    if (confirm("Are you sure you want to delete this staff member?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Staff Members</h2>
          <p className="text-gray-500">Manage your restaurant staff accounts</p>
        </div>
        <Button onClick={() => { setEditingUser(null); setIsModalOpen(true); }}>
          Add Staff Member
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex justify-start gap-2">
                    <Button
                      size="sm"
                      className="h-8 px-3 text-xs"
                      variant="outline"
                      onClick={() => handleEditUser(user)}
                    >
                      <Pencil size={12} className="mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm"
                      className="h-8 px-3 text-xs"
                      variant="destructive"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <Trash2 size={12} className="mr-1" />
                      Delete
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs"
                    >
                      <Eye size={12} className="mr-1" />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <StaffMemberModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleSaveStaffMember}
        initialData={editingUser}
        title={editingUser ? "Edit Staff Member" : "Add Staff Member"}
      />
    </div>
  );
}
