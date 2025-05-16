
import React from 'react';
import { Redemption } from "../../types/restaurant";

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

export function RedemptionHistory({ redemptions }: RedemptionHistoryProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Redemption History</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Deal</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Confirmation Code</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customers</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Bill Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {redemptions.map((redemption) => (
                <tr key={redemption.id}>
                  <td className="px-4 py-2 text-sm whitespace-nowrap">
                    {new Date(redemption.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {redemption.dealId.startsWith('deal') ? 'BOGO Main Dish' : 'Happy Hour'}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {redemption.confirmationCode}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {redemption.claimedUsers} / {redemption.totalDiners}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    ${redemption.totalBill.toFixed(2)}
                  </td>
                </tr>
              ))}
              {redemptions.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                    No redemptions recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
