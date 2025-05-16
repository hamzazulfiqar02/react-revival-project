
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
import ManagerDashboardPage from "./pages/manager/ManagerDashboardPage"
import AdminDashboardPage from "./pages/admin/AdminDashboardPage"
import NotFound from "./pages/NotFound"

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
                <Route path="/manager/*" element={<ManagerDashboardPage />} />
                
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
