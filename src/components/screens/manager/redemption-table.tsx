
import React from "react";
import { DataTable } from "./data-table";

interface RedemptionData {
  dealId: string;
  claimedUsers: number;
  totalDinners: number;
  totalBill: number;
  dateTime: string;
}

interface RedemptionTableProps {
  data: RedemptionData[];
}

export function RedemptionTable({ data }: RedemptionTableProps) {
  const columns = [
    {
      key: "dealId",
      header: "Deal ID",
    },
    {
      key: "claimedUsers",
      header: "Claimed Users",
    },
    {
      key: "totalDinners",
      header: "Total Dinners",
    },
    {
      key: "totalBill",
      header: "Total Bill Amount",
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      key: "dateTime",
      header: "Date & Time",
      width: "20%",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium mb-4">Redemption Overview</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
