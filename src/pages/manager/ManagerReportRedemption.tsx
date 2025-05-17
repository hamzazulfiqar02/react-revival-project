
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RedeemReporting } from '@/components/manager/redeem-reporting'

export default function ManagerReportRedemptionPage() {
  // Mock function
  const handleRedeemSubmit = (data) => {
    console.log('Redemption submitted:', data);
    return Promise.resolve({ id: 'new-redemption', ...data });
  };
  
  return (
    <DashboardLayout type="manager">
      <RedeemReporting onRedeemSubmit={handleRedeemSubmit} />
    </DashboardLayout>
  )
}
