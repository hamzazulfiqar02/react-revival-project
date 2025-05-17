
import React from 'react';
import DashboardLayout from '../../components/layouts/dashboard-layout';
import { DealManagement } from '../../components/manager/deal-management';
import { Deal } from '../../components/manager/types';

export default function ManagerDealManagementPage() {
  // Mock deals data
  const mockDeals: Deal[] = [
    {
      id: "deal1",
      restaurantId: "restaurant1",
      type: "BOGO",
      name: "BOGO Main Dish",
      description: "Buy one main dish, get one free",
      days: ["mon"],
      startDate: "2025-05-01",
      isActive: true
    },
    {
      id: "deal2",
      restaurantId: "restaurant1",
      type: "HAPPY_HOUR",
      name: "Happy Hour Special",
      description: "50% off selected appetizers",
      days: ["mon", "tue", "wed"],
      startDate: "2025-05-01",
      startTime: "17:00",
      endTime: "19:00",
      isActive: true
    }
  ];
  
  // Mock functions with type annotations
  const handleAddDeal = (deal: Partial<Deal>): Promise<Deal> => {
    console.log('Adding deal:', deal);
    return Promise.resolve({ 
      id: "new-deal", 
      restaurantId: "restaurant1",
      type: deal.type || "BOGO", 
      name: deal.name || "New Deal", 
      description: deal.description || "", 
      days: deal.days || ["mon"], 
      startDate: deal.startDate || new Date().toISOString().split('T')[0],
      isActive: deal.isActive !== undefined ? deal.isActive : true
    });
  };
  
  const handleUpdateDeal = (id: string, deal: Partial<Deal>): Promise<Deal> => {
    console.log('Updating deal:', id, deal);
    return Promise.resolve({ 
      id, 
      restaurantId: "restaurant1",
      type: deal.type || "BOGO", 
      name: deal.name || "Updated Deal", 
      description: deal.description || "", 
      days: deal.days || ["mon"], 
      startDate: deal.startDate || new Date().toISOString().split('T')[0],
      isActive: deal.isActive !== undefined ? deal.isActive : true
    });
  };
  
  const handleDeleteDeal = (id: string): Promise<boolean> => {
    console.log('Deleting deal:', id);
    return Promise.resolve(true);
  };
  
  return (
    <DashboardLayout type="manager">
      <DealManagement 
        deals={mockDeals} 
        onAddDeal={handleAddDeal}
        onUpdateDeal={handleUpdateDeal}
        onDeleteDeal={handleDeleteDeal}
      />
    </DashboardLayout>
  );
}
