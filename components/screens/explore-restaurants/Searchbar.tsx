import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const Searchbar = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div className="relative">
      <Search
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
        size={22}
      />
      <Input
        type="text"
        placeholder="Find restaurant, food or nearby places"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 h-12"
      />
    </div>
  );
};

export default Searchbar;
