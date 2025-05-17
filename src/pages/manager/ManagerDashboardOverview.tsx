
import React from 'react'
import DashboardLayout from '@/components/layouts/dashboard-layout'
import { DashboardOverview } from '@/components/manager/dashboard-overview'

export default function ManagerDashboardOverview() {
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
  
  // Mock deals data
  const mockDeals = [
    {
      id: "deal1",
      restaurantId: "restaurant1",
      type: "BOGO" as const,
      name: "BOGO Main Dish",
      description: "Buy one main dish, get one free",
      days: ["mon"],
      startDate: "2025-05-01",
      isActive: true
    },
    {
      id: "deal2",
      restaurantId: "restaurant1",
      type: "HAPPY_HOUR" as const,
      name: "Happy Hour Special",
      description: "50% off selected appetizers",
      days: ["mon", "tue", "wed", "thu", "fri"],
      startDate: "2025-05-01",
      endDate: "2025-06-01",
      startTime: "17:00",
      endTime: "19:00",
      isActive: true,
      menuUrl: "/menu.pdf"
    }
  ];
  
  // Mock redemptions data
  const mockRedemptions = [
    {
      id: "redemption1",
      dealId: "deal1",
      restaurantId: "restaurant1",
      date: "2025-05-06T18:30:00",
      totalBill: 85.40,
      claimedUsers: 2,
      totalDiners: 4,
      confirmationCode: "1234"
    },
    {
      id: "redemption2",
      dealId: "deal1",
      restaurantId: "restaurant1",
      date: "2025-05-05T19:15:00",
      totalBill: 65.75,
      claimedUsers: 1,
      totalDiners: 2,
      confirmationCode: "5678"
    }
  ];
  
  return (
    <DashboardLayout type="manager">
      <DashboardOverview 
        restaurant={mockRestaurant}
        deals={mockDeals}
        redemptions={mockRedemptions}
      />
    </DashboardLayout>
  )
}
