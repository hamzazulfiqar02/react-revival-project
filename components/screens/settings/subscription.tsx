import React from "react";
import { ChevronDown, Download } from "lucide-react";
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

const Subscription = () => {
  return (
    <div>
      <div className="border border-[#EDEDED] rounded-lg p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-xl font-poppins">Plan: Professional</h3>
          <p className="text-xs text-[#8A8A8A]">Expiration Date: 12/12/2023</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-poppins text-[#0B6DFF]">
            $9.99 / month
          </div>
          <button className="text-sm font-poppins border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50">
            Manage Plan
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-[#EDEDED]">
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader className="!bg-Gray50">
              <TableRow className="border-b">
                <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Invoice <ChevronDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Billing Date <ChevronDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Status <ChevronDown size={16} className="ml-1" />
                  </div>
                </TableHead>
                <TableHead className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center">
                    Amount <ChevronDown size={16} className="ml-1" />
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
                  <TableCell className="py-4 px-4">{invoice.date}</TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-center">
                      <span
                        className={`w-2 h-2 rounded-full mr-2 ${
                          invoice.status === "Paid"
                            ? "bg-successDark"
                            : "bg-dangerDark"
                        }`}
                      ></span>
                      <span
                        className={
                          invoice.status === "Paid"
                            ? "text-successDark"
                            : "text-dangerDark"
                        }
                      >
                        {invoice.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4">{invoice.amount}</TableCell>
                  <TableCell className="py-4 px-4 text-right">
                    <button className="text-gray-400 hover:text-Gray600">
                      <Download size={18} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
