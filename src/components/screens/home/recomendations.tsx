
import React from "react";
import { recommendations } from "../../../constants/home";
import { ChevronRight } from "lucide-react";

const Recomendations = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-medium font-poppins text-black">
          Recommendations
        </h3>
        <a
          href="/explore-restaurants"
          className="flex items-center text-sm font-poppins"
        >
          See More <ChevronRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((restaurant) => (
          <div key={restaurant.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg">{restaurant.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{restaurant.category}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">{restaurant.distance}</span>
                </div>
                <span className="bg-primary/10 text-primary text-sm py-1 px-2 rounded">
                  {restaurant.deals} deals
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
