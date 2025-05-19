
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RoleProvider } from './context/role-context';

// Import pages
import HomePage from './pages/home/HomePage';
import ManagerSignupPage from './pages/manager/ManagerSignupPage';
import RestaurantReviewPage from './pages/manager/RestaurantReviewPage';
import ManagerDashboardPage from './pages/manager/ManagerDashboardPage';

// Import admin pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

// Import user/customer pages
import ExplorePage from './pages/explore/ExplorePage';
import DealsPage from './pages/deals/DealsPage';
import AccountPage from './pages/account/AccountPage';
import DiscountPage from './pages/discount/DiscountPage';
import FeedbackPage from './pages/feedback/FeedbackPage';

// Auth pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Layout components
import MainLayout from './components/layouts/main-layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <RoleProvider>
      <Routes>
        {/* User/Customer Routes - HomePage doesn't use MainLayout to prevent duplicate headers */}
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<MainLayout><ExplorePage /></MainLayout>} />
        <Route path="/explore-restaurants" element={<MainLayout><ExplorePage /></MainLayout>} />
        <Route path="/deals" element={<MainLayout><DealsPage /></MainLayout>} />
        <Route path="/account" element={<MainLayout><AccountPage /></MainLayout>} />
        <Route path="/discount" element={<MainLayout><DiscountPage /></MainLayout>} />
        <Route path="/feedback" element={<MainLayout><FeedbackPage /></MainLayout>} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Manager Routes */}
        <Route path="/manager/signup" element={<ManagerSignupPage />} />
        <Route path="/manager/restaurant-review" element={<RestaurantReviewPage />} />
        <Route path="/manager/*" element={<ManagerDashboardPage />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminDashboardPage />} />

        {/* Routes for direct access based on URL */}
        <Route path="/users" element={<Navigate to="/admin/users" replace />} />
        <Route path="/restaurants" element={<Navigate to="/admin/restaurants" replace />} />
        
        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RoleProvider>
  );
}

export default App;
