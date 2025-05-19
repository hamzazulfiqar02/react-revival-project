
import React from 'react';
import { Header } from '../../components/common';
import { HeroSection, DiningCategories, RecommendationsSection, BestDeals } from '../../components/screens/home';
import BottomNavigation from '../../components/bottom-navigation';
import Footer from '../../components/common/footer';
import RoleSwitcher from '../../components/common/role-switcher';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto px-4 pb-16 md:pb-0 flex flex-col gap-8 md:gap-16 my-6">
      <div className="fixed top-4 right-4 z-50">
        <RoleSwitcher />
      </div>
      
      {/* Header */}
      <Header />

      <main className="flex-1 flex flex-col gap-12">
        <HeroSection />
        <DiningCategories />
        <RecommendationsSection />
        <BestDeals />
      </main>

      {/* Footer */}
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
