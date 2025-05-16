
import React from "react";
import { Redemption } from "@/types/restaurant";

interface RedemptionHistoryProps {
  redemptions: Redemption[];
}

export function RedemptionHistory({ redemptions }: RedemptionHistoryProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Redemption History</h1>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-medium mb-4">All Redemptions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diner ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claimed Users</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Diners</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Bill</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {redemptions.map((redemption) => (
                <tr key={redemption.id}>
                  <td className="px-4 py-3 text-sm">DINER-{redemption.id.slice(-4)}</td>
                  <td className="px-4 py-3 text-sm">
                    {new Date(redemption.date).toLocaleDateString()} {new Date(redemption.date).toLocaleTimeString()}
                  </td>
                  <td className="px-4 py-3 text-sm">BOGO Main Dish</td>
                  <td className="px-4 py-3 text-sm">{redemption.claimedUsers}</td>
                  <td className="px-4 py-3 text-sm">{redemption.totalDiners}</td>
                  <td className="px-4 py-3 text-sm">${redemption.totalBill.toFixed(2)}</td>
                  <td className="px-4 py-3 text-sm">
                    <button className="text-blue-600 underline text-sm">View</button>
                  </td>
                </tr>
              ))}
              {redemptions.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-sm text-center text-gray-500">
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
