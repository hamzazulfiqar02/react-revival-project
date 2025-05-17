
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { StatCard } from '@/components/common'
import { RedemptionTable } from '@/components/screens/manager'
import { managerRedemptionData, managerStatsData } from '@/constants/dashboard'

export default function ManagerDashboardOverview() {
  return (
    <DashboardLayout type="manager">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managerStatsData.map(
            ({ icon, title, value, additionalInfo }, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-lg p-4 shadow-[0px_3px_8px_-1px_#3232470D] border border-primary-lightest"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4 my-auto">
                    <div className={`p-2 rounded-full bg-primary-lightest`}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold font-poppins text-Black100">
                        {title}
                      </div>
                      <div className="text-sm font-normal font-poppins mt-1 text-Gray600">
                        {value}
                      </div>
                    </div>
                  </div>
                  {additionalInfo && (
                    <div className="mt-1">{additionalInfo}</div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
        <RedemptionTable data={managerRedemptionData} />
      </div>
    </DashboardLayout>
  )
}
