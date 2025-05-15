"use client";

import { useState } from "react";
import { cuisineOptions } from "@/constants/home";
import {
  AllRestaurantsSection,
  NearbySections,
  RecommendationsSection,
  Searchbar,
  SidebarFilters,
} from "@/components/screens/explore-restaurants";
import UserLayout from "@/components/layouts/user-layout";
import { Breadcrumb } from "@/components/common";

const ExploreRestaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cuisineSearch, setCuisineSearch] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([
    "Fine Dining",
  ]);

  const filteredCuisineOptions = cuisineOptions.filter((cuisine) =>
    cuisine.toLowerCase().includes(cuisineSearch.toLowerCase())
  );

  const handleCuisineChange = (cuisine: string) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  return (
    <UserLayout className="!max-w-7xl">
      <Breadcrumb screen="Restaurant lists" />
      <div className="w-full flex flex-col md:flex-row gap-6 mt-10">
        {/* Sidebar Filters */}
        <SidebarFilters
          cuisineSearch={cuisineSearch}
          setCuisineSearch={setCuisineSearch}
          selectedCuisines={selectedCuisines}
          handleCuisineChange={handleCuisineChange}
          filteredCuisineOptions={filteredCuisineOptions}
        />

        {/* Main Content */}
        <div className="w-full flex flex-col gap-8">
          {/* Search Bar */}
          <Searchbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Nearby Section */}
          <NearbySections />

          {/* Recommendations Section */}
          <RecommendationsSection />

          {/* All Restaurants Section */}
          <AllRestaurantsSection />
        </div>
      </div>
    </UserLayout>
  );
};

export default ExploreRestaurants;
