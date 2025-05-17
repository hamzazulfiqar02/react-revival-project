
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/dashboard-layout';
import { useRestaurantData } from '../../hooks/useRestaurantData';

// Import manager components
import { DashboardOverview } from '../../components/manager/dashboard-overview';
import { DealManagement } from '../../components/manager/deal-management';
import { StaffManagement } from '../../components/manager/staff-management';
import { RedeemReporting } from '../../components/manager/redeem-reporting';
import { RedemptionHistory } from '../../components/manager/redemption-history';
import { RestaurantSettings } from '../../components/manager/restaurant-settings';
import { Restaurant, Deal, Staff, Redemption } from '../../components/manager/types';

export default function ManagerDashboardPage() {
  const navigate = useNavigate();
  const {
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
  } = useRestaurantData();

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  // Convert types if needed
  const typedRestaurant: Restaurant = {
    id: restaurant.id,
    name: restaurant.name,
    logo: restaurant.logo,
    cuisineType: restaurant.cuisineType,
    address: restaurant.address,
    phoneNumber: restaurant.phoneNumber || '',
    email: restaurant.email || '',
    website: restaurant.website || '',
    reservationUrl: restaurant.reservationUrl || '',
    isPremium: restaurant.isPremium
  };

  // Create wrapper functions to ensure correct typing
  const handleUpdateRestaurant = (data: Partial<Restaurant>): Promise<Restaurant> => {
    return updateRestaurant(data).then((updatedRestaurant) => {
      return {
        id: updatedRestaurant.id,
        name: updatedRestaurant.name,
        logo: updatedRestaurant.logo,
        cuisineType: updatedRestaurant.cuisineType,
        address: updatedRestaurant.address,
        phoneNumber: updatedRestaurant.phoneNumber || '',
        email: updatedRestaurant.email || '',
        website: updatedRestaurant.website || '',
        reservationUrl: updatedRestaurant.reservationUrl || '',
        isPremium: updatedRestaurant.isPremium
      };
    });
  };
  
  const handleAddDeal = (deal: Partial<Deal>) => addDeal(deal as any);
  const handleUpdateDeal = (id: string, deal: Partial<Deal>) => updateDeal(id, deal as any);
  const handleAddStaff = (staff: Partial<Staff>) => addStaff(staff as any);
  const handleUpdateStaff = (id: string, staff: Partial<Staff>) => updateStaff(id, staff as any);
  const handleAddRedemption = (data: Partial<Redemption>) => addRedemption(data as any);

  return (
    <Routes>
      <Route path="/" element={
        <DashboardLayout type="manager">
          <DashboardOverview restaurant={typedRestaurant} deals={deals || []} redemptions={redemptions || []} />
        </DashboardLayout>
      } />
      
      <Route path="/deal-management" element={
        <DashboardLayout type="manager">
          <DealManagement 
            deals={deals || []} 
            onAddDeal={handleAddDeal}
            onUpdateDeal={handleUpdateDeal}
            onDeleteDeal={deleteDeal}
          />
        </DashboardLayout>
      } />
      
      <Route path="/staff-management" element={
        <DashboardLayout type="manager">
          <StaffManagement 
            staff={staff || []}
            onAddStaff={handleAddStaff}
            onUpdateStaff={handleUpdateStaff}
            onDeleteStaff={deleteStaff}
          />
        </DashboardLayout>
      } />
      
      <Route path="/report-redemption" element={
        <DashboardLayout type="manager">
          <RedeemReporting onRedeemSubmit={handleAddRedemption} />
        </DashboardLayout>
      } />
      
      <Route path="/redemption-history" element={
        <DashboardLayout type="manager">
          <RedemptionHistory redemptions={redemptions || []} />
        </DashboardLayout>
      } />
      
      <Route path="/settings" element={
        <DashboardLayout type="manager">
          <RestaurantSettings 
            restaurant={typedRestaurant}
            onUpdateRestaurant={handleUpdateRestaurant}
          />
        </DashboardLayout>
      } />
    </Routes>
  );
}
