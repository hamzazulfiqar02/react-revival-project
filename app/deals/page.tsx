"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/common/header";
import { FilterDropdown, Footer } from "@/components/common";
import UserLayout from "@/components/layouts/user-layout";

// Mock data for deals
const deals = [
  {
    id: 1,
    title: "BOGO Pizza - Monday",
    description: "50% off all pizzas every Monday!",
    image: "/images/recomendation-image.png",
    restaurant: "Pizza Palace",
  },
  {
    id: 2,
    title: "Happy Hour Drinks - Tuesday",
    description: "Buy 1 drink, get 1 free!",
    image: "/images/recomendation-image.png",
    restaurant: "Cocktail Lounge",
  },
  {
    id: 3,
    title: "Free Appetizer with Main Course",
    description: "Free appetizer with any main course",
    image: "/images/recomendation-image.png",
    restaurant: "Fine Dining Co.",
  },
  {
    id: 4,
    title: "2-for-1 Burger Deal",
    description: "Buy 1 burger and get another one for free",
    image: "/images/recomendation-image.png",
    restaurant: "Burger Joint",
  },
  {
    id: 5,
    title: "Discounted Pasta-Wednesday",
    description: "30% off on all pasta",
    image: "/images/recomendation-image.png",
    restaurant: "Italian Corner",
  },
];

export default function DealsPage() {
  const [filteredDeals, setFilteredDeals] = useState(deals);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Saved Deals");

  const handleRedeem = (dealId: number) => {
    console.log(`Redeeming deal ${dealId}`);
    // Implement redemption logic here
  };

  return (
    <UserLayout>
      {/* Content */}
      <div>
        {/* Page title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 font-el-messiri">
          My <span className="text-primary">Deals!</span>
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center italic text-sm text-Gray600 font-poppins mb-8">
          <Link href="/" className="hover:text-primary">
            Homepage
          </Link>
          <span className="mx-2">/</span>
          <span>My Deals</span>
        </div>

        {/* Deals section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-[40px] font-bold font-el-messiri">
            All Deals
          </h2>

          {/* <div className="cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
            <ListFilter className="text-primary" size={16} />
          </div> */}
          <FilterDropdown onFilterChange={setSelectedFilter} />
        </div>

        {/* Deals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow p-2 shadow-[0px_4.8px_16.8px_0px_#00000026]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg md:text-2xl font-semibold font-el-messiri text-primary mb-1 line-clamp-1">
                  {deal.title}
                </h3>
                <p className="text-xs font-poppins">{deal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
}
