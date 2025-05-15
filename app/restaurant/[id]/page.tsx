"use client";

import { use } from "react";
import { RestaurantDetail } from "@/components/screens/restaurant-detail";
import { Breadcrumb } from "@/components/common";
import UserLayout from "@/components/layouts/user-layout";

export default function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <UserLayout>
      <div>
        {/* Breadcrumb */}
        <Breadcrumb screen="Restaurant lists" subScreen="Velvet Room" />
        <RestaurantDetail restaurantId={id} />
      </div>
    </UserLayout>
  );
}
