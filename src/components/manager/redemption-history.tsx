
import React from 'react';
import { Redemption } from "../../types/restaurant";
import { RedemptionTable } from '../screens/manager/redemption-table';

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

export function RedemptionHistory({ redemptions }: RedemptionHistoryProps) {
  // Transform redemptions data to the format expected by RedemptionTable
  const redemptionTableData = redemptions.map(r => ({
    dealId: r.dealId,
    claimedUsers: r.claimedUsers,
    totalDinners: r.totalDiners,
    totalBill: r.totalBill,
    dateTime: new Date(r.date).toLocaleString()
  }));

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Redemption History</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-md p-3 text-center">
            <p className="text-sm text-gray-500">Total Redemptions</p>
            <p className="text-xl font-medium">{redemptions.length}</p>
          </div>
          <div className="border rounded-md p-3 text-center">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-medium">
              ${redemptions.reduce((sum, r) => sum + r.totalBill, 0).toFixed(2)}
            </p>
          </div>
          <div className="border rounded-md p-3 text-center">
            <p className="text-sm text-gray-500">Avg. Bill Amount</p>
            <p className="text-xl font-medium">
              ${redemptions.length ? (redemptions.reduce((sum, r) => sum + r.totalBill, 0) / redemptions.length).toFixed(2) : '0.00'}
            </p>
          </div>
        </div>
      </div>
      
      <RedemptionTable data={redemptionTableData} />
    </div>
  );
}
