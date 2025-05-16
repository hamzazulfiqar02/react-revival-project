
import React, { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  additionalInfo?: ReactNode;
}

export function StatCard({ icon, title, value, additionalInfo }: StatCardProps) {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-sm border border-primary-lightest">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-primary-lightest text-primary">
            {icon}
          </div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-sm font-normal mt-1 text-gray-600">{value}</div>
          </div>
        </div>
        {additionalInfo && <div className="mt-1">{additionalInfo}</div>}
      </div>
    </div>
  );
}

export default StatCard;
