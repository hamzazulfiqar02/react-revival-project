import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";

const Slider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        navigation={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        modules={[Keyboard, Navigation]}
        className="w-full"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
