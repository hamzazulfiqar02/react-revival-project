import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AvailableDealsIcon } from "@/icons";
import { MapPin, Info } from "lucide-react";
import Image from "next/image";
import { DirectionsModal } from "./directions-modal";
import FavoriteButton from "@/components/favorite-button";

interface RestaurantInfoProps {
  restaurant: {
    id: string;
    name: string;
    category: string;
    image: string;
    distance: string;
    availableDeals: number;
    hours: string;
  };
}

export function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  const [showDirections, setShowDirections] = useState(false);

  const openDirections = () => {
    setShowDirections(true);
  };

  const closeDirections = () => {
    setShowDirections(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row shadow-lg rounded-xl">
        <div className="relative aspect-video w-full max-w-[370px] h-[170px] rounded-sm">
          <Image
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            fill
            className="object-contain h-full"
          />
          <div className="absolute right-0 bottom-0 font-size-0 line-height-0 custom-bg">
            <FavoriteButton restaurantId={restaurant.id} size={24} />
          </div>
        </div>
        <div className="w-full px-6 py-2">
          <p className="text-xs !text-Gray50 mb-1">{restaurant.category}</p>
          <h1 className="text-2xl font-semibold text-primary font-el-messiri mb-2">
            {restaurant.name}
          </h1>

          <div className=" flex flex-justify-between flex-wrap items-center gap-6">
            <div className="w-full flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="text-xs font-poppins text-black opacity-60">
                  {restaurant.distance}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AvailableDealsIcon />
                <span className="text-xs font-poppins text-black opacity-60">
                  {restaurant.availableDeals} available deals
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <Button
                variant={"outline"}
                className="flex items-center gap-2 text-primary border border-primary rounded-xl px-6 py-2 hover:bg-primary-lightest transition-colors"
                onClick={openDirections}
              >
                <Info size={16} />
                <span>More Info</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <DirectionsModal
        isOpen={showDirections}
        onClose={closeDirections}
        restaurant={{
          name: restaurant.name,
          address: "205 E Houston St, New York, NY 10002, United States",
          location: { lat: 40.7223, lng: -73.9878 },
        }}
      />
      
    </>
  );
}
