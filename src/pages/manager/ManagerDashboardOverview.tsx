
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { DashboardOverview } from '@/components/manager/dashboard-overview'
import { useRestaurantData } from '@/hooks/useRestaurantData'

export default function ManagerDashboardOverview() {
  const { restaurant, deals = [], redemptions = [] } = useRestaurantData()
  
  if (!restaurant) {
    return <div>Loading...</div>
  }
  
  return (
    <DashboardLayout type="manager">
      <DashboardOverview 
        restaurant={restaurant} 
        deals={deals}
        redemptions={redemptions}
      />
    </DashboardLayout>
  )
}
