
import React from "react";
import { StatCard } from "../common/stat-card";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";

interface Restaurant {
  id: string;
  name: string;
  [key: string]: any;
}

interface Deal {
  id: string;
  isActive: boolean;
  [key: string]: any;
}

interface Redemption {
  id: string;
  date: string;
  totalBill: number;
  dealId: string;
  claimedUsers: number;
  totalDiners: number;
  [key: string]: any;
}

interface DashboardOverviewProps {
  restaurant: Restaurant;
  deals: Deal[];
  redemptions: Redemption[];
}

export function DashboardOverview({ restaurant, deals, redemptions }: DashboardOverviewProps) {
  const activeDeals = deals.filter(deal => deal.isActive).length;
  const totalRedemptions = redemptions.length;
  const todayRedemptions = redemptions.filter(
    r => new Date(r.date).toDateString() === new Date().toDateString()
  ).length;
  
  const revenue = redemptions.reduce((total, r) => total + r.totalBill, 0);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Active Deals" 
          value={`${activeDeals}`}
          icon={<Calendar className="h-5 w-5 text-blue-500" />}
          description="Currently active deals"
        />
        
        <StatCard 
          title="Today's Redemptions" 
          value={`${todayRedemptions}`}
          icon={<Clock className="h-5 w-5 text-green-500" />}
          description="Deals redeemed today"
        />
        
        <StatCard 
          title="Total Redemptions" 
          value={`${totalRedemptions}`}
          icon={<Users className="h-5 w-5 text-purple-500" />}
          description="All-time redemptions"
        />
        
        <StatCard 
          title="Revenue" 
          value={`$${revenue.toFixed(2)}`}
          icon={<DollarSign className="h-5 w-5 text-yellow-500" />}
          description="From redeemed deals"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="font-medium mb-4">Recent Redemptions</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Deal</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customers</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Bill</th>
            </tr>
          </thead>
          <tbody>
            {redemptions.slice(0, 5).map((redemption) => (
              <tr key={redemption.id}>
                <td className="px-4 py-2 text-sm">
                  {new Date(redemption.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm">
                  {redemption.dealId.startsWith('deal') ? 'BOGO Main Dish' : 'Happy Hour'}
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
                <td colSpan={4} className="px-4 py-4 text-center text-sm text-gray-500">
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
