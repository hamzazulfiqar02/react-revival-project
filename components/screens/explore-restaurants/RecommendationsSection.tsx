import { RestaurantCard, Slider } from "@/components/common";
import { recommendedRestaurants } from "@/constants/home";
import React from "react";
import { SwiperSlide } from "swiper/react";

const RecommendationsSection = () => {
  return (
    <section className="w-full">
      <div className="w-full flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium text-Black90 font-poppins">
        Recommendations
        </h2>
      </div>

      {/* Swiper container with proper width constraints */}
      <div className="w-full">
        <Slider>
          {recommendedRestaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <div className="w-full">
                <RestaurantCard restaurant={restaurant} />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecommendationsSection;
