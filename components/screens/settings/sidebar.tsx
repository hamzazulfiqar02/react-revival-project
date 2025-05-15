import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  activeSection: string;
  handleSectionChange: (val: string) => void;
}

const Sidebar = ({ activeSection, handleSectionChange }: Props) => {
  return (
    <div className="w-full md:w-64">
      <div className="flex flex-col gap-4 rounded-lg overflow-hidden">
        <Button
          className={`w-full text-sm font-poppins bg-transparent flex justify-start !text-left text-secondary-dark px-6 py-4 hover:bg-gray-100 transition-colors ${
            activeSection === "profile" ? "bg-Gray50" : ""
          }`}
          onClick={() => handleSectionChange("profile")}
        >
          Profile
        </Button>
        <Button
          className={`w-full text-sm font-poppins bg-transparent flex justify-start !text-left text-secondary-dark px-6 py-4 hover:bg-Gray50 transition-colors ${
            activeSection === "password" ? "bg-Gray50" : ""
          }`}
          onClick={() => handleSectionChange("password")}
        >
          Password
        </Button>
        <Button
          className={`w-full text-sm font-poppins bg-transparent flex justify-start !text-left text-secondary-dark px-6 py-4 hover:bg-Gray50 transition-colors ${
            activeSection === "subscription" ? "bg-Gray50" : ""
          }`}
          onClick={() => handleSectionChange("diningHistory")}
        >
          Dining History
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
