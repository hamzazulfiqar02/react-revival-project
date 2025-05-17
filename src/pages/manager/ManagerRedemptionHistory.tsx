
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RedemptionHistory } from '@/components/manager/redemption-history'
import { Redemption } from '@/types/restaurant'

export default function ManagerRedemptionHistoryPage() {
  // Mock redemptions data with proper types
  const mockRedemptions: Redemption[] = [
    {
      id: "redemption1",
      dealId: "deal1",
      restaurantId: "restaurant1",
      date: "2025-05-15T18:30:00",
      totalBill: 85.40,
      claimedUsers: 2,
      totalDiners: 4,
      confirmationCode: "1234"
    },
    {
      id: "redemption2",
      dealId: "deal2",
      restaurantId: "restaurant1",
      date: "2025-05-14T19:15:00",
      totalBill: 65.75,
      claimedUsers: 1,
      totalDiners: 2,
      confirmationCode: "5678"
    }
  ]
  
  return (
    <DashboardLayout type="manager">
      <RedemptionHistory redemptions={mockRedemptions} />
    </DashboardLayout>
  )
}
