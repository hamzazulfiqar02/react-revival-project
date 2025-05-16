
import React from "react"
import UserLayout from "@/components/layouts/user-layout"

// Import the components directly from their file paths
import HeroSection from "@/components/screens/home/hero-section"
import DiningCategories from "@/components/screens/home/dining-categories"
import BestDeals from "@/components/screens/home/best-deals"
import Recomendations from "@/components/screens/home/recomendations"

const HomePage = () => {
  return (
    <UserLayout>
      <div>
        {/* Hero */}
        <HeroSection />

        {/* Categories */}
        <DiningCategories />

        {/* Best Deals */}
        <BestDeals />

        {/* Recommendations */}
        <Recomendations />
      </div>
    </UserLayout>
  )
}

export default HomePage
