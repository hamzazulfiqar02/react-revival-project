
import React from "react";
import { bestDeals } from "../../../constants/home";

const BestDeals = () => {
  return (
    <div className="my-16">
      <h3 className="text-xl font-medium font-poppins text-black mb-3">
        Best Deals in Town
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bestDeals.map((deal) => (
          <div
            key={deal.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="p-4">
              <h4 className="font-semibold text-lg">{deal.restaurant}</h4>
              <p className="text-primary font-medium mt-1">{deal.deal}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-600">{deal.validity}</span>
                <span className="bg-primary/10 text-primary text-sm py-1 px-2 rounded">
                  {deal.daysLeft} days left
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
