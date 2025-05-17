
export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  cuisineType: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  reservationUrl: string;
  isPremium: boolean;
}

export interface Deal {
  id: string;
  restaurantId: string;
  type: 'BOGO' | 'HAPPY_HOUR';
  name: string;
  description: string;
  days: string[];
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  isActive: boolean;
  menuUrl?: string;
}

export interface Staff {
  id: string;
  restaurantId: string;
  name: string;
  email: string;
  role: 'MANAGER' | 'STAFF';
  isActive: boolean;
}

export interface Redemption {
  id: string;
  dealId: string;
  restaurantId: string;
  date: string;
  totalBill: number;
  claimedUsers: number;
  totalDiners: number;
  receiptImage?: string;
  confirmationCode: string;
}

export interface MediaItem {
  id: string;
  restaurantId: string;
  url: string;
  type: 'INTERIOR' | 'FOOD' | 'MENU';
}
