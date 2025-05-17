
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { DashboardOverview } from '@/components/manager/dashboard-overview'
import { managerRedemptionData, managerStatsData } from '@/constants/dashboard'

export default function ManagerDashboardOverview() {
  // Mock restaurant data since we don't have the useRestaurantData hook yet
  const mockRestaurant = {
    id: "restaurant1",
    name: "Sample Restaurant",
    logo: "/placeholder-logo.png",
    address: "123 Main St, City",
    phoneNumber: "555-123-4567"
  }
  
  // Mock deals data
  const mockDeals = [
    {
      id: "deal1",
      isActive: true,
      name: "BOGO Main Dish"
    },
    {
      id: "deal2",
      isActive: true,
      name: "Happy Hour Special"
    }
  ]
  
  // Use the mock data and the data from constants
  return (
    <DashboardLayout type="manager">
      <DashboardOverview 
        restaurant={mockRestaurant}
        deals={mockDeals}
        redemptions={managerRedemptionData || []}
      />
    </DashboardLayout>
  )
}
