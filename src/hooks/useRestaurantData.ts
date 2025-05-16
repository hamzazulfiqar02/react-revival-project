
import { useState } from "react";
import { Restaurant, Deal, Staff, Redemption } from "@/types/restaurant";

// Mock data for restaurant dashboard
const mockRestaurant: Restaurant = {
  id: "rest-123",
  name: "The Forest Restaurant",
  logo: "/restaurant-logo.png",
  cuisineType: "Fine Dining",
  address: "123 Main St, New York, NY 10001",
  phoneNumber: "+1 234 567 8900",
  email: "contact@forestrestaurant.com",
  website: "https://forestrestaurant.com",
  reservationUrl: "https://forestrestaurant.com/reservations",
  isPremium: true
};

const mockDeals: Deal[] = [
  {
    id: "deal-1",
    restaurantId: "rest-123",
    type: "BOGO",
    name: "BOGO Monday Deal",
    description: "Buy one main dish, get one free (of equal or lesser value)",
    days: ["mon"],
    startDate: "2025-05-01",
    endDate: "2025-08-31",
    isActive: true
  },
  {
    id: "deal-2",
    restaurantId: "rest-123",
    type: "HAPPY_HOUR",
    name: "Happy Hour Special",
    description: "50% off all appetizers and select drinks",
    days: ["mon", "tue", "wed", "thu", "fri"],
    startDate: "2025-05-01",
    startTime: "17:00",
    endTime: "19:00",
    isActive: true,
    menuUrl: "/menu.pdf"
  }
];

const mockStaff: Staff[] = [
  {
    id: "staff-1",
    restaurantId: "rest-123",
    name: "John Doe",
    email: "john@example.com",
    role: "MANAGER",
    isActive: true
  },
  {
    id: "staff-2",
    restaurantId: "rest-123",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "STAFF",
    isActive: true
  },
  {
    id: "staff-3",
    restaurantId: "rest-123",
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "STAFF",
    isActive: true
  }
];

const mockRedemptions: Redemption[] = [
  {
    id: "redem-1",
    dealId: "deal-1",
    restaurantId: "rest-123",
    date: "2025-05-13T18:30:00Z",
    totalBill: 120.50,
    claimedUsers: 2,
    totalDiners: 4,
    confirmationCode: "1234"
  },
  {
    id: "redem-2",
    dealId: "deal-1",
    restaurantId: "rest-123",
    date: "2025-05-06T19:15:00Z",
    totalBill: 92.25,
    claimedUsers: 1,
    totalDiners: 2,
    confirmationCode: "5678"
  },
  {
    id: "redem-3",
    dealId: "deal-1",
    restaurantId: "rest-123",
    date: "2025-04-29T20:00:00Z",
    totalBill: 176.80,
    claimedUsers: 3,
    totalDiners: 6,
    confirmationCode: "9012"
  }
];

export function useRestaurantData() {
  const [restaurant, setRestaurant] = useState<Restaurant>(mockRestaurant);
  const [deals, setDeals] = useState<Deal[]>(mockDeals);
  const [staff, setStaff] = useState<Staff[]>(mockStaff);
  const [redemptions, setRedemptions] = useState<Redemption[]>(mockRedemptions);
  
  // Restaurant management
  const updateRestaurant = (updatedData: Partial<Restaurant>) => {
    setRestaurant({ ...restaurant, ...updatedData });
  };
  
  // Deal management
  const addDeal = (deal: Partial<Deal>) => {
    const newDeal: Deal = {
      id: `deal-${Date.now()}`,
      restaurantId: restaurant.id,
      type: deal.type!,
      name: deal.name || "",
      description: deal.description || "",
      days: deal.days || [],
      startDate: deal.startDate || new Date().toISOString().split('T')[0],
      endDate: deal.endDate,
      startTime: deal.startTime,
      endTime: deal.endTime,
      isActive: deal.isActive !== undefined ? deal.isActive : true,
      menuUrl: deal.menuUrl
    };
    setDeals([...deals, newDeal]);
  };
  
  const updateDeal = (id: string, updatedData: Partial<Deal>) => {
    setDeals(
      deals.map((deal) => (deal.id === id ? { ...deal, ...updatedData } : deal))
    );
  };
  
  const deleteDeal = (id: string) => {
    setDeals(deals.filter((deal) => deal.id !== id));
  };
  
  // Staff management
  const addStaff = (staffMember: Partial<Staff>) => {
    const newStaff: Staff = {
      id: `staff-${Date.now()}`,
      restaurantId: restaurant.id,
      name: staffMember.name || "",
      email: staffMember.email || "",
      role: staffMember.role || "STAFF",
      isActive: staffMember.isActive !== undefined ? staffMember.isActive : true
    };
    setStaff([...staff, newStaff]);
  };
  
  const updateStaff = (id: string, updatedData: Partial<Staff>) => {
    setStaff(
      staff.map((staffMember) => 
        staffMember.id === id ? { ...staffMember, ...updatedData } : staffMember
      )
    );
  };
  
  const deleteStaff = (id: string) => {
    setStaff(staff.filter((staffMember) => staffMember.id !== id));
  };
  
  // Redemption management
  const addRedemption = (redemption: Partial<Redemption>) => {
    const newRedemption: Redemption = {
      id: `redem-${Date.now()}`,
      dealId: redemption.dealId || deals[0].id,
      restaurantId: restaurant.id,
      date: redemption.date || new Date().toISOString(),
      totalBill: redemption.totalBill || 0,
      claimedUsers: redemption.claimedUsers || 0,
      totalDiners: redemption.totalDiners || 0,
      receiptImage: redemption.receiptImage,
      confirmationCode: redemption.confirmationCode || ""
    };
    setRedemptions([newRedemption, ...redemptions]);
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
}
