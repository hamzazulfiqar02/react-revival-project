
import React from 'react';
import { Redemption } from './types';
import { DataTable } from '../screens/manager/data-table';

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

export function RedemptionHistory({ redemptions }: RedemptionHistoryProps) {
  // Format data for table display
  const formattedData = redemptions.map(redemption => ({
    id: redemption.id,
    date: new Date(redemption.date).toLocaleDateString(),
    time: new Date(redemption.date).toLocaleTimeString(),
    dealId: redemption.dealId,
    totalBill: redemption.totalBill,
    claimedUsers: redemption.claimedUsers,
    totalDiners: redemption.totalDiners,
    confirmationCode: redemption.confirmationCode
  }));
  
  const columns = [
    {
      key: "date",
      header: "Date",
      width: "15%"
    },
    {
      key: "time",
      header: "Time",
      width: "15%"
    },
    {
      key: "dealId",
      header: "Deal",
      render: (value: string) => value.startsWith('deal') ? 'BOGO Main Dish' : 'Happy Hour'
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
      key: "totalBill",
      header: "Total Bill",
      render: (value: number) => `$${value.toFixed(2)}`
    },
    {
      key: "confirmationCode",
      header: "Code",
    }
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Redemption History</h1>
      
      <div className="mb-4">
        <p className="text-gray-500">
          View a history of all redemptions at your restaurant.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <DataTable columns={columns} data={formattedData} />
      </div>
    </div>
  );
}
