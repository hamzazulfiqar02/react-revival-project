
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Restaurant, Deal, Staff, Redemption } from "@/types/restaurant";

// Mock API functions 
const fetchRestaurant = async (id: string): Promise<Restaurant> => {
  // This would be a real API call in production
  return {
    id: id,
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
};

const fetchDeals = async (restaurantId: string): Promise<Deal[]> => {
  // This would be a real API call in production
  return [
    {
      id: "deal1",
      restaurantId: restaurantId,
      type: "BOGO",
      name: "BOGO Main Dish",
      description: "Buy one main dish, get one free",
      days: ["mon"],
      startDate: "2025-05-01",
      isActive: true
    },
    {
      id: "deal2",
      restaurantId: restaurantId,
      type: "HAPPY_HOUR",
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
  ] as Deal[];
};

const fetchStaff = async (restaurantId: string): Promise<Staff[]> => {
  // This would be a real API call in production
  return [
    {
      id: "staff1",
      restaurantId: restaurantId,
      name: "John Doe",
      email: "john@restaurant.com",
      role: "MANAGER",
      isActive: true
    },
    {
      id: "staff2",
      restaurantId: restaurantId,
      name: "Jane Smith",
      email: "jane@restaurant.com",
      role: "STAFF",
      isActive: true
    }
  ] as Staff[];
};

const fetchRedemptions = async (restaurantId: string): Promise<Redemption[]> => {
  // This would be a real API call in production
  return [
    {
      id: "redemption1",
      dealId: "deal1",
      restaurantId: restaurantId,
      date: "2025-05-06T18:30:00",
      totalBill: 85.40,
      claimedUsers: 2,
      totalDiners: 4,
      confirmationCode: "1234"
    },
    {
      id: "redemption2",
      dealId: "deal1",
      restaurantId: restaurantId,
      date: "2025-05-05T19:15:00",
      totalBill: 65.75,
      claimedUsers: 1,
      totalDiners: 2,
      confirmationCode: "5678"
    }
  ] as Redemption[];
};

export const useRestaurantData = (restaurantId: string = "restaurant1") => {
  const { data: restaurant } = useQuery({
    queryKey: ['restaurant', restaurantId],
    queryFn: () => fetchRestaurant(restaurantId),
  });

  const { data: deals } = useQuery({
    queryKey: ['deals', restaurantId],
    queryFn: () => fetchDeals(restaurantId),
  });

  const { data: staff } = useQuery({
    queryKey: ['staff', restaurantId],
    queryFn: () => fetchStaff(restaurantId),
  });

  const { data: redemptions } = useQuery({
    queryKey: ['redemptions', restaurantId],
    queryFn: () => fetchRedemptions(restaurantId),
  });

  return {
    restaurant,
    deals,
    staff,
    redemptions
  };
};
