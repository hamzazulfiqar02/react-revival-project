
import React from "react";
import { DataTable } from "./data-table";

export default function StaffTable() {
  // Mock staff data
  const staffData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@restaurant.com",
      role: "MANAGER",
      status: "Active"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@restaurant.com",
      role: "STAFF",
      status: "Active"
    }
  ];

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
    },
    {
      key: "status",
      header: "Status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === "Active" 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (_: any, row: any) => (
        <div className="flex space-x-2">
          <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
            Edit
          </button>
          <button className="text-xs bg-red-500 text-white px-2 py-1 rounded">
            Delete
          </button>
        </div>
      ),
    }
  ];

  return (
    <DataTable columns={columns} data={staffData} />
  );
}
