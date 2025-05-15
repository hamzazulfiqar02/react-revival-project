"use client";

import { useState } from "react";
import { User, Store } from "lucide-react";
import { StatCard } from "@/components/common/stat-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/layouts/dashboard-layout";

export default function RedemptionViewPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <DashboardLayout type={"manager"}>
      <div className="mb-6">
        <div className="flex flex-wrap gap-4 mb-6 items-end">
          <div>
            <label
              htmlFor="startDate"
              className="block text-xs font-semibold font-poppins mb-1"
            >
              Start Date
            </label>
            <Input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="shadow-md rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="block text-xs font-semibold font-poppins mb-1"
            >
              End Date
            </label>
            <Input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="shadow-md rounded-md p-2 w-full"
            />
          </div>

          <Button className="text-white bg-pink-600 hover:bg-pink-700">
            Apply filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<User size={16} className="text-primary" />}
            title="Super Mondays Claims"
            value="15"
          />

          <StatCard
            icon={<User size={16} className="text-primary" />}
            title="Repeated Members"
            value="05"
          />

          <StatCard
            icon={<User size={16} className="text-primary" />}
            title="Revenue"
            value="$200"
          />

          <StatCard
            icon={<Store size={16} className="text-primary" />}
            title="Number of Diners"
            value="50"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
