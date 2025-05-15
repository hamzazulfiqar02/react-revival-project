import { ListFilter, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const SearchFilter = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div className="w-full flex flex-row items-center gap-4">
      <div className="relative max-w-[340px] w-full shadow-md rounded-xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search User"
          className="pl-9 h-10 border border-Gray200 rounded-xl focus:border-primary box-border:none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button className="w-10 h-10 flex justify-center items-center bg-transparent hover:bg-transparent border border-Gray200 shadow-md">
        <ListFilter size={16} className="text-primary" />
      </Button>
    </div>
  );
};

export default SearchFilter;
