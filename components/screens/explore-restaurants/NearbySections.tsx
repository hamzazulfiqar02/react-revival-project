"use client";
import { RestaurantCard, Slider } from "@/components/common";
import { Button } from "@/components/ui/button";
import { nearbyRestaurants } from "@/constants/home";
import { ChevronRight } from "lucide-react";
import { SwiperSlide } from "swiper/react";

const NearbySections = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium text-Black90 font-poppins">Nearby</h2>
      </div>

      {/* Swiper container with proper width constraints */}
      <div className="w-full">
        <Slider>
          {nearbyRestaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <div className="w-full">
                <RestaurantCard restaurant={restaurant} />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NearbySections;
