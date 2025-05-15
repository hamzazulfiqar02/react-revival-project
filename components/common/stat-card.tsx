"use client"

import React, { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string | ReactNode;
  value: string | number | ReactNode;
  additionalInfo?: ReactNode;
}

export function StatCard({
  icon,
  title,
  value,
  additionalInfo,
}: StatCardProps) {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-[0px_3px_8px_-1px_#3232470D] border border-primary-lightest">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4 my-auto">
          <div className={`p-2 rounded-full bg-primary-lightest`}>{icon}</div>
          <div>
            <div className="text-sm font-semibold font-poppins text-Black100">
              {title}
            </div>
            <div className="text-sm font-normal font-poppins mt-1 text-Gray600">
              {value}
            </div>
          </div>
        </div>
        {additionalInfo && <div className="mt-1">{additionalInfo}</div>}
      </div>
    </div>
  );
}
