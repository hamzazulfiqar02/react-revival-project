"use client";

import { useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type FilterOption = "Saved Deals" | "Recently Viewed" | "BOGO" | "Happy Hours";

interface FilterDropdownProps {
  onFilterChange?: (filter: FilterOption) => void;
}

export function FilterDropdown({ onFilterChange }: FilterDropdownProps) {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterOption>("Saved Deals");

  const handleFilterSelect = (filter: FilterOption) => {
    setSelectedFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
        <ListFilter className="text-primary" size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-2xl">
        <DropdownMenuItem
          className={`px-7 py-3 min-w-fit text-Gray700`}
          onClick={() => handleFilterSelect("Saved Deals")}
        >
          Saved Deals
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`px-7 py-3 min-w-fit text-Gray700 `}
          onClick={() => handleFilterSelect("Recently Viewed")}
        >
          Recently Viewed
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`px-7 py-3 min-w-fit text-Gray700 `}
          onClick={() => handleFilterSelect("BOGO")}
        >
          BOGO
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`px-7 py-3 min-w-fit text-Gray700 `}
          onClick={() => handleFilterSelect("Happy Hours")}
        >
          Happy Hours
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
