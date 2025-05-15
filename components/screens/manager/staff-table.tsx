"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  ListFilter,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddSearchFilter, Pagination } from "@/components/common";
import { StaffMemberModal } from "./staff-member-modal";

// Sample data for the table
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 6,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john@example.com",
    status: "Disabled",
  },
  {
    id: 8,
    name: "John Doe",
    email: "john@example.com",
    status: "Disabled",
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@example.com",
    status: "Disabled",
  },
  {
    id: 10,
    name: "John Doe",
    email: "john@example.com",
    status: "Disabled",
  },
];

export default function StaffTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  // Filter users based on active tab and search query
  const filteredUsers = users.filter((user) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && user.status === "Active") ||
      (activeTab === "disabled" && user.status === "Disabled");

    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSaveStaffMembers = () => {
  }

  const onAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <AddSearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        actionBtnText={"Add User"}
        isActionBtn={true}
        onAdd={onAdd}
      />

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="bg-transparent border-gray-200 w-full justify-start rounded-none p-0 h-auto">
          <TabsTrigger value="all">All Users (467)</TabsTrigger>
          <TabsTrigger value="active">Active (467)</TabsTrigger>
          <TabsTrigger value="disabled">Disabled (467)</TabsTrigger>
        </TabsList>
      </Tabs>

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
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-successLight text-successDark"
                          : "bg-warningLight text-warningDark"
                      }`}
                    >
                      {user.status}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 ml-1 ${
                        user.status === "Active"
                          ? "text-successDark"
                          : "text-warningDark"
                      }`}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-start gap-2">
                    <Button
                      size="sm"
                      className="h-8 px-3 text-xs text-white bg-warningDark hover:bg-warningDark"
                    >
                      <Pencil size={12} />
                      Edit
                    </Button>
                    <Button className="h-8 px-3 text-xs text-white bg-dangerDark hover:bg-dangerDark">
                      <Trash2 size={12} />
                      Delete
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-xs text-Blue100 border-none"
                    >
                      <Eye size={12} />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      <StaffMemberModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleSaveStaffMembers}
      />
    </div>
  );
}
