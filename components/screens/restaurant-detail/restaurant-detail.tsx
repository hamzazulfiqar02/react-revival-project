"use client";

import { useState } from "react";
import { RestaurantInfo } from "./restaurant-info";
import { AvailableDeals } from "./available-deals";
import { MenuTabs } from "./menu-tabs";
import { MenuItems } from "./menu-items";
import { OrderSummary } from "./order-summary";
import { Search } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export function RestaurantDetail({ restaurantId }: { restaurantId: string }) {
  const restaurant = {
    id: restaurantId,
    name: "Velvet Room",
    category: "Fine Dining",
    image: "/images/recomendation-image.png",
    distance: "3KM Away",
    availableDeals: 3,
    hours: "11:00 - 23:59",
  };

  const deals = [
    {
      id: "1",
      restaurant: "The Forest",
      deal: "Buy 1 Main Dish, Get One Free",
      daysLeft: 4,
      validity: "Valid Everyday",
    },
    {
      id: "2",
      restaurant: "The Forest",
      deal: "Buy 1 Main Dish, Get One Free",
      daysLeft: 4,
      validity: "Valid Everyday",
    },
    {
      id: "3",
      restaurant: "The Forest",
      deal: "Buy 1 Main Dish, Get One Free",
      daysLeft: 4,
      validity: "Valid Everyday",
    },
  ];

  return (
    <div>
      <RestaurantInfo restaurant={restaurant} />
      <AvailableDeals deals={deals} />
    </div>
  );
}
