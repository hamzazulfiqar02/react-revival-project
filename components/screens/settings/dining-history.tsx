import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "1023",
    date: "May 15, 2022",
    status: "BOGO Main Dish",
    amount: "$9.99",
  },
  {
    id: "1017",
    date: "Nov 22, 2008",
    status: "Happy Hour",
    amount: "$9.99",
  },
  {
    id: "1021",
    date: "Apr 16, 2007",
    status: "BOGO Main Dish",
    amount: "$19.99",
  },
];

const DiningHistory = () => {
  return (
    <div className="rounded-lg border border-[#EDEDED]">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="!bg-Gray50">
            <TableRow className="border-b">
              <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                <div className="flex items-center">
                  Dish <ChevronDown size={16} className="ml-1" />
                </div>
              </TableHead>
              <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                <div className="flex items-center">
                  Rehhhh <ChevronDown size={16} className="ml-1" />
                </div>
              </TableHead>
              <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                <div className="flex items-center">
                  Deal Type <ChevronDown size={16} className="ml-1" />
                </div>
              </TableHead>
              <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                <div className="flex items-center">
                  Time & Date <ChevronDown size={16} className="ml-1" />
                </div>
              </TableHead>

              <TableHead className="text-left py-3 px-4 font-medium text-gray-600"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} className="border-b">
                <TableCell className="py-4 px-4">
                  Invoice #{invoice.id}
                </TableCell>
                <TableCell className="py-4 px-4">
                  <div className="flex items-center">{invoice.status}</div>
                </TableCell>
                <TableCell className="py-4 px-4">
                  <div className="flex items-center">{invoice.status}</div>
                </TableCell>
                <TableCell className="py-4 px-4">{invoice.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DiningHistory;
