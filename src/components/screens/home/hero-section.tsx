
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold font-el-messiri text-center md:leading-[66px]">
        Dine More, <span className="text-primary">Spend Less</span>
        <br />
        Every Monday!
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mt-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Find restaurant, food or nearby places"
            className="w-full h-14 p-3 pl-4 pr-10 border border-[#B3B3B3] rounded-lg"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
