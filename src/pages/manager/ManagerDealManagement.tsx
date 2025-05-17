
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { DealManagement } from '@/components/manager/deal-management'

export default function ManagerDealManagementPage() {
  // Mock deals data
  const mockDeals = [
    {
      id: "deal1",
      name: "BOGO Main Dish",
      type: "BOGO",
      description: "Buy one main dish, get one free",
      isActive: true,
      days: ["mon"]
    },
    {
      id: "deal2",
      name: "Happy Hour Special",
      type: "HAPPY_HOUR",
      description: "50% off selected appetizers",
      isActive: true,
      days: ["mon", "tue", "wed"],
      startTime: "17:00",
      endTime: "19:00"
    }
  ]
  
  // Mock functions
  const handleAddDeal = (deal) => Promise.resolve({ id: "new-deal", ...deal });
  const handleUpdateDeal = (id, deal) => Promise.resolve({ id, ...deal });
  const handleDeleteDeal = (id) => Promise.resolve(true);
  
  return (
    <DashboardLayout type="manager">
      <DealManagement 
        deals={mockDeals} 
        onAddDeal={handleAddDeal}
        onUpdateDeal={handleUpdateDeal}
        onDeleteDeal={handleDeleteDeal}
      />
    </DashboardLayout>
  )
}
