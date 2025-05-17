
import React from 'react';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import { RestaurantSettings } from '@/components/manager/restaurant-settings';
import { Restaurant } from '@/components/manager/types';

export default function ManagerSettingsPage() {
  // Mock restaurant data
  const mockRestaurant: Restaurant = {
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
  
  // Mock function with proper type annotation
  const handleUpdateRestaurant = (data: Partial<Restaurant>): Promise<Restaurant> => {
    console.log('Restaurant updated:', data);
    return Promise.resolve({
      ...mockRestaurant,
      ...data
    });
  };
  
  return (
    <DashboardLayout type="manager">
      <RestaurantSettings 
        restaurant={mockRestaurant}
        onUpdateRestaurant={handleUpdateRestaurant}
      />
    </DashboardLayout>
  );
}
