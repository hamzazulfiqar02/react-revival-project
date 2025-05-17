
import React from 'react';

interface Redemption {
  id: string;
  date: string;
  dealId: string;
  totalBill: number;
  claimedUsers: number;
  totalDiners: number;
  confirmationCode: string;
  [key: string]: any;
}

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

export function RedemptionHistory({ redemptions }: RedemptionHistoryProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Redemption History</h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claimed Users</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Diners</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confirmation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {redemptions.map((redemption) => (
              <tr key={redemption.id}>
                <td className="px-4 py-3 text-sm">
                  {new Date(redemption.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm">
                  {redemption.dealId.startsWith('deal') ? 'BOGO Main Dish' : 'Happy Hour'}
                </td>
                <td className="px-4 py-3 text-sm">
                  {redemption.claimedUsers}
                </td>
                <td className="px-4 py-3 text-sm">
                  {redemption.totalDiners}
                </td>
                <td className="px-4 py-3 text-sm">
                  ${redemption.totalBill.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm">
                  {redemption.confirmationCode}
                </td>
              </tr>
            ))}
            {redemptions.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-sm text-gray-500">
                  No redemptions recorded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
