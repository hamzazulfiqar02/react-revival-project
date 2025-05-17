
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RedemptionHistory } from '@/components/manager/redemption-history'
import { useRestaurantData } from '@/hooks/useRestaurantData'

export default function ManagerRedemptionHistoryPage() {
  const { redemptions = [] } = useRestaurantData()
  
  return (
    <DashboardLayout type="manager">
      <RedemptionHistory redemptions={redemptions} />
    </DashboardLayout>
  )
}
