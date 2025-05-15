"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Star, Ticket, Filter, Tag } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";
import { useState } from "react";
import Header from "@/components/common/header";

export default function ExplorePage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    id: 1,
    name: "The Forest",
    image: "/images/restaurant-interior.png",
    price: 4,
    category: "Fine Dining",
    rating: 4.5,
    reviews: 2000,
    distance: 3,
    deals: 3,
  });

  return (
    <div className="min-h-screen bg-white font-poppins relative">
      <Header />
      {/* Map View */}
      <div className="relative h-[100vh] pb-20">
        {/* Map Image */}
        <Image
          src="/images/map-background.png"
          alt="Map view"
          fill
          className="object-cover"
          priority
        />

        {/* Search Bar */}
        <div className="absolute top-4 left-4 right-20 z-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Find restaurant, food or nearby places"
              className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-xl shadow-md bg-white"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-black" />
            </div>
          </div>
        </div>

        {/* Filter Button */}
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-black text-white p-3 rounded-lg shadow-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Restaurant Card Section - Transparent background */}
      <div className="min-h-fit absolute bottom-20 left-0 right-0 bg-transparent shadow-lg z-20">
        {/* Category and Deals Filter - Transparent background */}
        <div className="flex justify-center py-3">
          <div className="bg-white/80 rounded-full backdrop-blur-sm py-3 px-6 flex items-center gap-6 h-14 shadow-sm">
            <div className="flex items-center gap-2">
              <Image
                src={"/fork-knives.png"}
                alt={"fork-knives"}
                width={16}
                height={16}
              />
              <span className="font-medium text-sm">All category</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Image
                src={"/all-deals.png"}
                alt={"all-deals"}
                width={16}
                height={16}
              />
              <span className="font-medium text-sm">All deals</span>
            </div>
          </div>
        </div>
        
        {/* Restaurant Info - White background for this section only */}
        <div className="min-h-fit p-4 bg-white rounded-[15px] m-[10px]">
          <div className="flex gap-3 h-[100px]">
            {/* Restaurant Image - Fixed size 77x77 */}
            <div className="w-[77px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center self-center">
              <Image
                src="/images/wine-toast-background.png"
                alt="Map view"
                width={77}
                height={80}
              />
            </div>
            <div className="w-full h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary font-el-messiri">
                The Forest
              </h3>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < 4 ? "text-primary" : "text-gray-300"
                      }`}
                    >
                      $
                    </span>
                  ))}
              </div>
              <div>
                <span className="inline-block px-3 py-1 border border-gray-300 rounded-md text-xs mt-1.5">
                  Fine Dining
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3 border-t border-gray-100 pt-3">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-primary fill-primary" />
              <span className="text-xs font-medium">4.5 (2k Reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-black" />
              <span className="text-xs">3 Km</span>
            </div>
            <div className="flex items-center gap-1">
              <Ticket size={16} className="text-black" />
              <span className="text-xs">3 deals</span>
            </div>
          </div>

          <Link href="/restaurant/1" className="block w-full mt-3">
            <button className="w-full py-3 bg-primary text-white rounded-lg font-medium">
              See Details
            </button>
          </Link>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
