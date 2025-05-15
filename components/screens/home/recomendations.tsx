import { RestaurantCard } from "@/components/common";
import FavoriteButton from "@/components/favorite-button";
import { recommendations } from "@/constants/home";
import { AvailableDealsIcon } from "@/icons";
import { AppWindow, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recomendations = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-medium font-poppins text-black">
          Recommendations
        </h3>
        <Link
          href="/explore-restaurants"
          className="flex items-center text-sm font-poppins"
        >
          See More <ChevronRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
