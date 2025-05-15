"use client";

import {
  BestDeals,
  DiningCategories,
  HeroSection,
  Recomendations,
} from "@/components/screens/home";
import UserLayout from "@/components/layouts/user-layout";

export default function HomePage() {
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
  );
}
