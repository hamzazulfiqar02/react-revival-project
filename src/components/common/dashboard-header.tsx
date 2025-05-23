
import React from "react";
import { Bell, ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  type?: "admin" | "manager";
}

export function DashboardHeader({ type = "admin" }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 py-4 px-6">
      <div>
        <h1 className="text-lg font-semibold text-black">
          {type === "admin" ? "Admin Dashboard" : "Restaurant Dashboard"}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img 
              src="/profile.png" 
              alt="User" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-sm font-medium text-gray-700">
            {type === "admin" ? "Admin" : "Restaurant Manager"}
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
