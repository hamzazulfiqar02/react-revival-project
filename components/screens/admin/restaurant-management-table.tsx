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
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  ListFilter,
  Search,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Pagination, SearchFilter } from "@/components/common";

// Sample data for the table
const restaurants = [
  {
    id: 1,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Approved",
    image: "/profile.png",
  },
  {
    id: 2,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Approved",
    image: "/profile.png",
  },
  {
    id: 3,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Approved",
    image: "/profile.png",
  },
  {
    id: 4,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Pending",
    image: "/profile.png",
  },
  {
    id: 5,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Rejected",
    image: "/profile.png",
  },
  {
    id: 6,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Pending",
    image: "/profile.png",
  },
  {
    id: 7,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Rejected",
    image: "/profile.png",
  },
  {
    id: 8,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Pending",
    image: "/profile.png",
  },
  {
    id: 9,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Approved",
    image: "/profile.png",
  },
  {
    id: 10,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Rejected",
    image: "/profile.png",
  },
  {
    id: 11,
    name: "El's Restaurant",
    ownerEmail: "john@example.com",
    registrationDate: "12-12-2024",
    status: "Pending",
    image: "/profile.png",
  },
];

export default function RestaurantManagementTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("restaurant");
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 10;

  // Filter restaurants based on active tab and search query
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const paginatedRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApprove = (id: number) => {
    console.log(`Approve restaurant with id: ${id}`);
    // Here you would update the restaurant status in your database
  };

  const handleReject = (id: number) => {
    console.log(`Reject restaurant with id: ${id}`);
    // Here you would update the restaurant status in your database
  };

  return (
    <div className="space-y-4">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Tabs
        defaultValue="restaurant"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="bg-transparent border-gray-200 w-full justify-start rounded-none p-0 h-auto">
          <TabsTrigger value="restaurant">Restaurant Listings</TabsTrigger>
          <TabsTrigger value="happyhour">Happy Hour Listings</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Restaurant Name</TableHead>
              <TableHead>Owner Email</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRestaurants.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md overflow-hidden">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    {restaurant.name}
                  </div>
                </TableCell>
                <TableCell>{restaurant.ownerEmail}</TableCell>
                <TableCell>{restaurant.registrationDate}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      restaurant.status === "Approved"
                        ? "bg-successLight text-successDark"
                        : restaurant.status === "Pending"
                        ? "bg-warningLight text-warningDark"
                        : "bg-dangerLight text-dangerDark"
                    }`}
                  >
                    {restaurant.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-start gap-2">
                    {restaurant.status === "Pending" && (
                      <>
                        <Button
                          size="sm"
                          className="h-8 px-3 text-xs rounded-lg text-successLight bg-successDark hover:bg-successDark"
                          onClick={() => handleApprove(restaurant.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 px-3 text-xs rounded-lg text-dangerLight bg-dangerDark hover:bg-dangerDark"
                          onClick={() => handleReject(restaurant.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    <Link href={`/admin/restaurants/${restaurant.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 text-xs text-Blue100 border-none"
                      >
                        <Eye size={12} />
                        View
                      </Button>
                    </Link>
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
    </div>
  );
}
