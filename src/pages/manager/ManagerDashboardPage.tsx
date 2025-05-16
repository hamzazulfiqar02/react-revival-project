
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

  return (
    <Routes>
      <Route path="/" element={
        <DashboardLayout type="manager">
          <DashboardOverview restaurant={restaurant} deals={deals || []} redemptions={redemptions || []} />
        </DashboardLayout>
      } />
      
      <Route path="/deal-management" element={
        <DashboardLayout type="manager">
          <DealManagement 
            deals={deals || []} 
            onAddDeal={addDeal}
            onUpdateDeal={updateDeal}
            onDeleteDeal={deleteDeal}
          />
        </DashboardLayout>
      } />
      
      <Route path="/staff-management" element={
        <DashboardLayout type="manager">
          <StaffManagement 
            staff={staff || []}
            onAddStaff={addStaff}
            onUpdateStaff={updateStaff}
            onDeleteStaff={deleteStaff}
          />
        </DashboardLayout>
      } />
      
      <Route path="/report-redemption" element={
        <DashboardLayout type="manager">
          <RedeemReporting onRedeemSubmit={addRedemption} />
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
            restaurant={restaurant}
            onUpdateRestaurant={updateRestaurant}
          />
        </DashboardLayout>
      } />
    </Routes>
  );
}
