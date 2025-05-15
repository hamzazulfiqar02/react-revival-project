import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

interface Props {
  cuisineSearch: string;
  setCuisineSearch: (val: string) => void;
  selectedCuisines: string[];
  handleCuisineChange: (val: string) => void;
  filteredCuisineOptions: string[] | [];
}

const SidebarFilters = ({
  cuisineSearch,
  setCuisineSearch,
  selectedCuisines,
  handleCuisineChange,
  filteredCuisineOptions,
}: Props) => {
  return (
    <div className="w-full md:w-64 shrink-0 font-poppins">
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="text-lg font-medium text-Black90 mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-Black70 mb-3">Cuisines</h3>
          <div className="relative mb-3">
            <Search
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary"
              size={16}
            />
            <Input
              type="text"
              placeholder="Search for Cuisine"
              value={cuisineSearch}
              onChange={(e) => setCuisineSearch(e.target.value)}
              className="px-2 py-1 h-9 text-sm"
            />
          </div>
          <div className="space-y-4">
            {filteredCuisineOptions.map((cuisine) => (
              <div key={cuisine} className="flex items-center space-x-2">
                <Checkbox
                  id={cuisine}
                  checked={selectedCuisines.includes(cuisine)}
                  onCheckedChange={() => handleCuisineChange(cuisine)}
                />
                <label
                  htmlFor={cuisine}
                  className="text-[13px] !text-Black60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {cuisine}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
