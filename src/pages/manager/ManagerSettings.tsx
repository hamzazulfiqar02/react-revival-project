
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RestaurantSettings } from '@/components/manager/restaurant-settings'
import { useRestaurantData } from '@/hooks/useRestaurantData'

export default function ManagerSettingsPage() {
  const { restaurant, updateRestaurant } = useRestaurantData()
  
  if (!restaurant) {
    return <div>Loading...</div>
  }
  
  return (
    <DashboardLayout type="manager">
      <RestaurantSettings 
        restaurant={restaurant}
        onUpdateRestaurant={updateRestaurant}
      />
    </DashboardLayout>
  )
}
