
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { DealManagement } from '@/components/manager/deal-management'
import { useRestaurantData } from '@/hooks/useRestaurantData'

export default function ManagerDealManagementPage() {
  const {
    deals = [],
    addDeal,
    updateDeal,
    deleteDeal
  } = useRestaurantData()
  
  return (
    <DashboardLayout type="manager">
      <DealManagement 
        deals={deals} 
        onAddDeal={addDeal}
        onUpdateDeal={updateDeal}
        onDeleteDeal={deleteDeal}
      />
    </DashboardLayout>
  )
}
