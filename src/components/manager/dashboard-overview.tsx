
import React from "react";
import { StatCard } from "@/components/common";
import { Calendar, DollarSign, Store, Users } from "lucide-react";
import { Redemption } from "@/types/restaurant";

interface DashboardOverviewProps {
  redemptions: Redemption[];
}

export function DashboardOverview({ redemptions }: DashboardOverviewProps) {
  // Calculate statistics
  const totalRedemptions = redemptions.length;
  const activeDeals = 3; // This would typically come from your deals data
  
  const totalRevenue = redemptions.reduce(
    (sum, redemption) => sum + redemption.totalBill,
    0
  );
  
  const mondayVisits = redemptions.filter(redemption => {
    const date = new Date(redemption.date);
    return date.getDay() === 1; // 1 is Monday
  }).length;

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Restaurant Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<Store size={16} />} 
          title="Total Redemptions" 
          value={totalRedemptions.toString()} 
        />
        <StatCard 
          icon={<Users size={16} />} 
          title="Active Deals" 
          value={activeDeals.toString()} 
        />
        <StatCard 
          icon={<DollarSign size={16} />} 
          title="Total Revenue" 
          value={`$${totalRevenue.toFixed(2)}`} 
        />
        <StatCard 
          icon={<Calendar size={16} />} 
          title="Super Monday Visits" 
          value={mondayVisits.toString()} 
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="font-medium mb-4">Recent Redemptions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {redemptions.slice(0, 5).map((redemption) => (
                <tr key={redemption.id}>
                  <td className="px-4 py-3 text-sm">Customer {redemption.id.slice(-4)}</td>
                  <td className="px-4 py-3 text-sm">BOGO Main Dish</td>
                  <td className="px-4 py-3 text-sm">{new Date(redemption.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-sm">${redemption.totalBill.toFixed(2)}</td>
                </tr>
              ))}
              {redemptions.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-sm text-center text-gray-500">
                    No redemptions yet
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
