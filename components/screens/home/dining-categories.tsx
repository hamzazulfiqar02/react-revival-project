import { categories } from "@/constants/home";
import Image from "next/image";
import React from "react";

const DiningCategories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 border border-[#B3B3B3] rounded-lg hover:border-primary hover:shadow-sm transition-all cursor-pointer"
        >
          <Image src={category.icon} alt="Icon" width={35} height={35} />{" "}
          <span className="text-lg text-center font-poppins mt-1.5">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DiningCategories;
