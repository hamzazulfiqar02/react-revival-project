"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import FavoriteButton from "../favorite-button";
import { AvailableDealsIcon } from "@/icons";

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    category: string;
    image: string;
    distance: string;
    deals: number;
  };
  className?: string;
}

export function RestaurantCard({ restaurant, className = "" }: any) {
  return (
    <Link
      href={`/restaurant/${restaurant.id}`}
      className={`w-full ${className}`}
    >
      <div className="rounded-lg overflow-hidden border border-gray-200 h-full">
        <div className="relative h-40 w-full">
          <Image
            src={
              restaurant.image ||
              "/placeholder.svg?height=160&width=256&query=restaurant"
            }
            alt={restaurant.name}
            fill
            className="object-cover"
          />
          <div className="absolute right-0 bottom-0 font-size-0 line-height-0 custom-bg">
            <FavoriteButton restaurantId={restaurant.id} size={24} />
          </div>
        </div>
        <div className="p-3">
          <p className="text-xl font-semibold text-primary font-el-messiri">
            {restaurant.name}
          </p>
          <p className="text-xs text-Black70">{restaurant.category}</p>
          <div className="flex items-center gap-3 mt-2 pr-4">
            <div className="flex items-center gap-1 text-xs text-Black70">
              <MapPin size={12} />
              <span className="text-[11px] text-Gray600">
                {restaurant.distance} away
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-Black70">
              <AvailableDealsIcon />
              <span className="text-[11px] text-Gray600">
                {restaurant.deals} available deals
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

{
  /* <Link href="/restaurant/1" key={restaurant.id} className="w-full">
<div className="w-full h-full group shadow-lg rounded-sm">
  <div className="relative w-full h-40 rounded-sm overflow-hidden">
    <Image
      src={restaurant.image || "/images/restaurant-food-table.png"}
      alt={restaurant.name}
      fill
      className="object-cover w-full h-full transition-transform group-hover:scale-105"
    />
    <div className="absolute right-0 bottom-0 font-size-0 line-height-0 custom-bg">
      <FavoriteButton restaurantId={restaurant.id} size={24} />
    </div>
  </div>
  <div className="px-3.5 pt-2 pb-3">
    <h4 className="text-primary font-semibold text-2xl font-el-messiri line-clamp-1">
      {restaurant.name}
    </h4>
    <p className="text-xs text-Black70">{restaurant.category}</p>
    <div className="flex items-center gap-3 mt-2">
      <div className="flex items-center justify-between gap-1">
        <MapPin strokeWidth={1} size={13} />
        <span className="text-[11px] text-Gray600">
          {restaurant.distance}
        </span>
      </div>
      <div className="flex items-center justify-between gap-1">
        <AvailableDealsIcon />
        <span className="text-[11px] text-Gray600">
          {restaurant.deals} available deals
        </span>
      </div>
    </div>
  </div>
</div>
</Link> */
}
