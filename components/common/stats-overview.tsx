import React from "react"
import { Calendar, User } from "lucide-react";
import { StatCard } from "./stat-card";

interface StatsOverviewProps {
  activeDeals: number;
  redemptionsToday: number;
  revenue: number;
  weeklyVisits: number;
  monthlyVisits: number;
}

export function StatsOverview({
  activeDeals,
  redemptionsToday,
  revenue,
  weeklyVisits,
  monthlyVisits,
}: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={<User size={16} className="text-primary" />}
        title="Active Deals"
        value={String(activeDeals).padStart(2, "0")}
      />
      <StatCard
        icon={<Calendar size={16} className="text-primary" />}
        title="Redemptions Today"
        value={String(redemptionsToday).padStart(2, "0")}
      />
      <StatCard
        icon={<User size={16} className="text-primary" />}
        title="Revenue"
        value={`$${revenue.toLocaleString()}`}
      />
      <StatCard
        icon={<User size={16} className="text-primary" />}
        title="Members Visit"
        value=""
        additionalInfo={
          <div className="flex flex-col text-sm">
            <div className="flex justify-between">
              <span className="text-sm text-Gray600 font-poppins">Weekly</span>
              <span className="text-sm font-poppins font-semibold text-Black100 ml-2">
                {weeklyVisits}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-Gray600 font-poppins">Monthly</span>
              <span className="text-sm font-poppins font-semibold text-Black100 ml-2">
                {monthlyVisits}
              </span>
            </div>
          </div>
        }
      />
    </div>
  );
}
