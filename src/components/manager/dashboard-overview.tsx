
import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/ui/chart";
import { Restaurant, Deal, Redemption } from "@/types/restaurant";

interface DashboardOverviewProps {
  restaurant: Restaurant | undefined;
  deals: Deal[] | undefined;
  redemptions: Redemption[] | undefined;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ 
  restaurant, 
  deals, 
  redemptions 
}) => {
  // Calculate statistics
  const activeDeals = deals?.filter(deal => deal.isActive).length || 0;
  const totalRedemptions = redemptions?.length || 0;
  const revenue = redemptions?.reduce((acc, curr) => acc + curr.totalBill, 0) || 0;
  
  // Chart data
  const chartData = [
    { name: "Monday", value: redemptions?.filter(r => new Date(r.date).getDay() === 1).length || 0 },
    { name: "Tuesday", value: redemptions?.filter(r => new Date(r.date).getDay() === 2).length || 0 },
    { name: "Wednesday", value: redemptions?.filter(r => new Date(r.date).getDay() === 3).length || 0 },
    { name: "Thursday", value: redemptions?.filter(r => new Date(r.date).getDay() === 4).length || 0 },
    { name: "Friday", value: redemptions?.filter(r => new Date(r.date).getDay() === 5).length || 0 },
    { name: "Saturday", value: redemptions?.filter(r => new Date(r.date).getDay() === 6).length || 0 },
    { name: "Sunday", value: redemptions?.filter(r => new Date(r.date).getDay() === 0).length || 0 },
  ];
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      {/* Restaurant Info */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Restaurant Information</h2>
        {restaurant ? (
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={restaurant.logo} 
                alt={restaurant.name} 
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.cuisineType}</p>
              </div>
            </div>
            <p className="text-gray-700">{restaurant.address}</p>
            {restaurant.phoneNumber && (
              <p className="text-gray-700">Phone: {restaurant.phoneNumber}</p>
            )}
          </div>
        ) : (
          <p>Loading restaurant information...</p>
        )}
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Active Deals</h3>
          <p className="text-3xl font-bold">{activeDeals}</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Total Redemptions</h3>
          <p className="text-3xl font-bold">{totalRedemptions}</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Revenue</h3>
          <p className="text-3xl font-bold">${revenue.toFixed(2)}</p>
        </Card>
      </div>
      
      {/* Redemptions Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Redemptions by Day</h3>
        <div className="h-64">
          <BarChart 
            data={chartData}
            index="name"
            categories={["value"]}
            yAxisWidth={40}
            className="h-full"
          />
        </div>
      </Card>
    </div>
  );
};

export default DashboardOverview;
