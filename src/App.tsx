
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/context/auth-context"
import { FavoritesProvider } from "@/context/favorites-context"

// Pages
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
import ResetPasswordPage from "./pages/auth/ResetPasswordPage"
import ExploreRestaurantsPage from "./pages/restaurants/ExploreRestaurantsPage"
import RestaurantDetailPage from "./pages/restaurants/RestaurantDetailPage"
import DealsPage from "./pages/deals/DealsPage"
import FeedbackPage from "./pages/feedback/FeedbackPage"
import DiscountPage from "./pages/discount/DiscountPage"
import ExplorePage from "./pages/explore/ExplorePage"
import AccountPage from "./pages/account/AccountPage"
import StaffBoardPage from "./pages/staff/StaffBoardPage"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

// Manager Pages
import ManagerLoginPage from "./pages/manager/ManagerLoginPage"
import ManagerSignupPage from "./pages/manager/ManagerSignupPage"
import ManagerDashboardOverview from "./pages/manager/ManagerDashboardOverview"
import ManagerDealManagement from "./pages/manager/ManagerDealManagement"
import ManagerStaffManagement from "./pages/manager/ManagerStaffManagement"
import ManagerReportRedemption from "./pages/manager/ManagerReportRedemption"
import ManagerRedemptionHistory from "./pages/manager/ManagerRedemptionHistory"
import ManagerSettings from "./pages/manager/ManagerSettings"

// Admin Pages
import AdminDashboardPage from "./pages/admin/AdminDashboardPage"

const App = () => {
  // Move the QueryClient instantiation inside the component
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <FavoritesProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <ToastContainer autoClose={3000} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/index" element={<Index />} />
                
                {/* Authentication Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                
                {/* Customer Routes */}
                <Route path="/explore-restaurants" element={<ExploreRestaurantsPage />} />
                <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
                <Route path="/deals" element={<DealsPage />} />
                <Route path="/discount" element={<DiscountPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/account" element={<AccountPage />} />
                
                {/* Staff & Manager Routes */}
                <Route path="/staff/board" element={<StaffBoardPage />} />
                
                {/* Manager Routes */}
                <Route path="/manager/login" element={<ManagerLoginPage />} />
                <Route path="/manager/signup" element={<ManagerSignupPage />} />
                <Route path="/manager/overview" element={<ManagerDashboardOverview />} />
                <Route path="/manager/deal-management" element={<ManagerDealManagement />} />
                <Route path="/manager/staff-management" element={<ManagerStaffManagement />} />
                <Route path="/manager/report-redemption" element={<ManagerReportRedemption />} />
                <Route path="/manager/redemption-history" element={<ManagerRedemptionHistory />} />
                <Route path="/manager/settings" element={<ManagerSettings />} />
                
                {/* Admin Routes */}
                <Route path="/admin/*" element={<AdminDashboardPage />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </FavoritesProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
