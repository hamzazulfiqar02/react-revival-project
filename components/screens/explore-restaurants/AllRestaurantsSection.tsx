import { RestaurantCard } from "@/components/common";
import { allRestaurants } from "@/constants/home";
import React from "react";

const AllRestaurantsSection = () => {
  return (
    <div>
      <section>
        <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium text-Black90 font-poppins">All Restaurants</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {allRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllRestaurantsSection;
