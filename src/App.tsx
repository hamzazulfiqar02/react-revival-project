
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import ManagerSignupPage from './pages/manager/ManagerSignupPage';
import RestaurantReviewPage from './pages/manager/RestaurantReviewPage';
import ManagerDashboardPage from './pages/manager/ManagerDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Manager Routes */}
        <Route path="/manager/signup" element={<ManagerSignupPage />} />
        <Route path="/manager/restaurant-review" element={<RestaurantReviewPage />} />
        <Route path="/manager/*" element={<ManagerDashboardPage />} />

        {/* Default redirect */}
        <Route path="*" element={<ManagerSignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
