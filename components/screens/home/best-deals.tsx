import { DealCard } from "@/components/common";
import { bestDeals } from "@/constants/home";
import React from "react";

const BestDeals = () => {
  return (
    <div className="my-16">
      <h3 className="text-xl font-medium font-poppins text-black mb-3">
        Best Deals in Town
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bestDeals.map((deal) => (
          <DealCard
            key={deal.id}
            restaurant={deal.restaurant}
            deal={deal.deal}
            daysLeft={deal.daysLeft}
            validity={deal.validity}
          />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
