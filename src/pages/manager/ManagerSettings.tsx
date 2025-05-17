
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { RestaurantSettings } from '@/components/manager/restaurant-settings'

export default function ManagerSettingsPage() {
  // Mock restaurant data
  const mockRestaurant = {
    id: "restaurant1",
    name: "Sample Restaurant",
    logo: "/placeholder-logo.png",
    cuisineType: "Italian",
    address: "123 Main St, City",
    phoneNumber: "555-123-4567",
    email: "contact@restaurant.com",
    website: "https://restaurant.com",
    reservationUrl: "https://restaurant.com/reserve",
    isPremium: true
  };
  
  // Mock function
  const handleUpdateRestaurant = (data) => {
    console.log('Restaurant updated:', data);
    return Promise.resolve(data);
  };
  
  return (
    <DashboardLayout type="manager">
      <RestaurantSettings 
        restaurant={mockRestaurant}
        onUpdateRestaurant={handleUpdateRestaurant}
      />
    </DashboardLayout>
  )
}
