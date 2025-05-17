
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RedeemReporting } from '@/components/manager/redeem-reporting'
import { Redemption } from '@/types/restaurant'

export default function ManagerReportRedemptionPage() {
  // Mock function with proper type annotation
  const handleRedeemSubmit = (data: Partial<Redemption>): Promise<Redemption> => {
    console.log('Redemption submitted:', data);
    return Promise.resolve({ 
      id: 'new-redemption', 
      restaurantId: "restaurant1",
      dealId: data.dealId || "deal1",
      date: data.date || new Date().toISOString(),
      totalBill: data.totalBill || 0,
      claimedUsers: data.claimedUsers || 0,
      totalDiners: data.totalDiners || 0,
      confirmationCode: data.confirmationCode || "0000"
    });
  };
  
  return (
    <DashboardLayout type="manager">
      <RedeemReporting onRedeemSubmit={handleRedeemSubmit} />
    </DashboardLayout>
  )
}
