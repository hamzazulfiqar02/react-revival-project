
import React from 'react';
import { Redemption } from './types';
import { DataTable } from "../screens/manager/data-table";

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

export function RedemptionHistory({ redemptions }: RedemptionHistoryProps) {
  const columns = [
    {
      key: "date",
      header: "Date & Time",
      width: "20%",
      render: (value: string) => new Date(value).toLocaleString()
    },
    {
      key: "dealId",
      header: "Deal ID",
    },
    {
      key: "totalBill",
      header: "Amount",
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      key: "claimedUsers",
      header: "Claimed Users",
    },
    {
      key: "totalDiners",
      header: "Total Diners",
    },
    {
      key: "confirmationCode",
      header: "Confirmation Code",
    }
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Redemption History</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Recent Redemptions</h2>
        <DataTable 
          columns={columns} 
          data={redemptions.map(r => ({
            ...r,
            date: r.date
          }))} 
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-medium mb-4">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Total Redemptions</h3>
            <p className="text-2xl font-semibold">{redemptions.length}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Total Value</h3>
            <p className="text-2xl font-semibold">
              ${redemptions.reduce((total, r) => total + r.totalBill, 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Users Served</h3>
            <p className="text-2xl font-semibold">
              {redemptions.reduce((total, r) => total + r.claimedUsers, 0)}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">Average Bill</h3>
            <p className="text-2xl font-semibold">
              ${redemptions.length > 0
                ? (redemptions.reduce((total, r) => total + r.totalBill, 0) / redemptions.length).toFixed(2)
                : "0.00"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
