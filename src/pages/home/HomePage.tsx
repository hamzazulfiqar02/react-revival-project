
import React from "react"
import {
  BestDeals,
  DiningCategories,
  HeroSection,
  Recomendations,
} from "@/components/screens/home"
import UserLayout from "@/components/layouts/user-layout"

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
