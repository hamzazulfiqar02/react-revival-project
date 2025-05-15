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
import { Pagination } from "@/components/common";

// Sample data for the table
const restaurants = [
  {
    id: 1,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Approved",
    happyHourStatus: "Approved",
  },
  {
    id: 2,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Approved",
    happyHourStatus: "Approved",
  },
  {
    id: 3,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Approved",
    happyHourStatus: "Approved",
  },
  {
    id: 4,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Approved",
    happyHourStatus: "Approved",
  },
  {
    id: 5,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Approved",
    happyHourStatus: "Approved",
  },
  {
    id: 6,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Pending",
    happyHourStatus: "Pending",
  },
  {
    id: 7,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Pending",
    happyHourStatus: "Pending",
  },
  {
    id: 8,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Pending",
    happyHourStatus: "Pending",
  },
  {
    id: 9,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Pending",
    happyHourStatus: "Pending",
  },
  {
    id: 10,
    name: "El's Restaurant",
    email: "corpulent@gmail.com",
    uploadedDate: "12-12-2024",
    joinedOn: "12-12-2024",
    renewalDate: "12-12-2024",
    serviceFee: "$25",
    status: "Pending",
    happyHourStatus: "Pending",
  },
];

export default function RestaurantTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const paginatedRestaurants = restaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-primary-lightest">
        <h2 className="px-4 text-lg font-semibold font-poppins my-4">
          Recently Added Restaurants
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Restaurant Name</TableHead>
              <TableHead>Restaurant Email</TableHead>
              <TableHead>Uploaded Date</TableHead>
              <TableHead>Joined On</TableHead>
              <TableHead>Renewal Date</TableHead>
              <TableHead>Restaurant Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRestaurants.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell>{restaurant.name}</TableCell>
                <TableCell>{restaurant.email}</TableCell>
                <TableCell>{restaurant.uploadedDate}</TableCell>
                <TableCell>{restaurant.joinedOn}</TableCell>
                <TableCell>{restaurant.renewalDate}</TableCell>
                {/* <TableCell>{restaurant.serviceFee}</TableCell> */}
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      restaurant.status === "Approved"
                        ? "bg-successLight text-successDark"
                        : "bg-warningLight text-warningDark"
                    }`}
                  >
                    {restaurant.status}
                  </span>
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
