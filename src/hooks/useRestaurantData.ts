
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Restaurant, Deal, Staff, Redemption } from "../types/restaurant";

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
  ];
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
  ];
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
  ];
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

  // Updated mock functions to ensure all required properties are set
  const updateRestaurant = (data: Partial<Restaurant>): Promise<Restaurant> => {
    console.log("Updating restaurant:", data);
    // In a real app, this would make an API call
    const updatedRestaurant: Restaurant = {
      id: restaurant?.id || restaurantId,
      name: data.name || restaurant?.name || "Unknown Restaurant",
      logo: data.logo || restaurant?.logo || "/placeholder-logo.png",
      cuisineType: data.cuisineType || restaurant?.cuisineType || "Other",
      address: data.address || restaurant?.address || "No address provided",
      phoneNumber: data.phoneNumber || restaurant?.phoneNumber || "",
      email: data.email || restaurant?.email || "",
      website: data.website || restaurant?.website || "",
      reservationUrl: data.reservationUrl || restaurant?.reservationUrl || "",
      isPremium: data.isPremium ?? restaurant?.isPremium ?? false
    };
    return Promise.resolve(updatedRestaurant);
  };

  const addDeal = (deal: Partial<Deal>): Promise<Deal> => {
    console.log("Adding deal:", deal);
    // In a real app, this would make an API call
    const newDeal: Deal = {
      id: `deal-${Date.now()}`,
      restaurantId,
      type: deal.type || "BOGO",
      name: deal.name || "New Deal",
      description: deal.description || "No description provided",
      days: deal.days || ["mon"],
      startDate: deal.startDate || new Date().toISOString().split('T')[0],
      isActive: deal.isActive ?? true,
      // Optional fields can be included if provided
      endDate: deal.endDate,
      startTime: deal.startTime,
      endTime: deal.endTime,
      menuUrl: deal.menuUrl
    };
    return Promise.resolve(newDeal);
  };

  const updateDeal = (id: string, deal: Partial<Deal>): Promise<Deal> => {
    console.log("Updating deal:", id, deal);
    // In a real app, this would make an API call
    const existingDeal = deals?.find(d => d.id === id);
    if (!existingDeal) {
      throw new Error(`Deal with id ${id} not found`);
    }
    
    const updatedDeal: Deal = {
      id,
      restaurantId: deal.restaurantId || existingDeal.restaurantId,
      type: deal.type || existingDeal.type,
      name: deal.name || existingDeal.name,
      description: deal.description || existingDeal.description,
      days: deal.days || existingDeal.days,
      startDate: deal.startDate || existingDeal.startDate,
      isActive: deal.isActive ?? existingDeal.isActive,
      // Optional fields can be included if provided
      endDate: deal.endDate ?? existingDeal.endDate,
      startTime: deal.startTime ?? existingDeal.startTime,
      endTime: deal.endTime ?? existingDeal.endTime,
      menuUrl: deal.menuUrl ?? existingDeal.menuUrl
    };
    return Promise.resolve(updatedDeal);
  };

  const deleteDeal = (id: string): Promise<boolean> => {
    console.log("Deleting deal:", id);
    // In a real app, this would make an API call
    return Promise.resolve(true);
  };

  const addStaff = (staff: Partial<Staff>): Promise<Staff> => {
    console.log("Adding staff member:", staff);
    // In a real app, this would make an API call
    const newStaff: Staff = {
      id: `staff-${Date.now()}`,
      restaurantId,
      name: staff.name || "New Staff",
      email: staff.email || `staff-${Date.now()}@example.com`,
      role: staff.role || "STAFF",
      isActive: staff.isActive ?? true
    };
    return Promise.resolve(newStaff);
  };

  const updateStaff = (id: string, data: Partial<Staff>): Promise<Staff> => {
    console.log("Updating staff member:", id, data);
    // In a real app, this would make an API call
    const existingStaff = staff?.find(s => s.id === id);
    if (!existingStaff) {
      throw new Error(`Staff member with id ${id} not found`);
    }
    
    const updatedStaff: Staff = {
      id,
      restaurantId: data.restaurantId || existingStaff.restaurantId,
      name: data.name || existingStaff.name,
      email: data.email || existingStaff.email,
      role: data.role || existingStaff.role,
      isActive: data.isActive ?? existingStaff.isActive
    };
    return Promise.resolve(updatedStaff);
  };

  const deleteStaff = (id: string): Promise<boolean> => {
    console.log("Deleting staff member:", id);
    // In a real app, this would make an API call
    return Promise.resolve(true);
  };

  const addRedemption = (redemption: Partial<Redemption>): Promise<Redemption> => {
    console.log("Adding redemption:", redemption);
    // In a real app, this would make an API call
    const newRedemption: Redemption = {
      id: `redemption-${Date.now()}`,
      restaurantId,
      dealId: redemption.dealId || "deal1",
      date: redemption.date || new Date().toISOString(),
      totalBill: redemption.totalBill || 0,
      claimedUsers: redemption.claimedUsers || 0,
      totalDiners: redemption.totalDiners || 0,
      confirmationCode: redemption.confirmationCode || "0000",
      receiptImage: redemption.receiptImage
    };
    return Promise.resolve(newRedemption);
  };

  return {
    restaurant,
    deals,
    staff,
    redemptions,
    updateRestaurant,
    addDeal,
    updateDeal,
    deleteDeal,
    addStaff,
    updateStaff,
    deleteStaff,
    addRedemption
  };
};
