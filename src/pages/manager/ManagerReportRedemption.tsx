
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RedeemReporting } from '@/components/manager/redeem-reporting'
import { useRestaurantData } from '@/hooks/useRestaurantData'

export default function ManagerReportRedemptionPage() {
  const { addRedemption } = useRestaurantData()
  
  return (
    <DashboardLayout type="manager">
      <RedeemReporting onRedeemSubmit={addRedemption} />
    </DashboardLayout>
  )
}
