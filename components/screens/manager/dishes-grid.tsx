"use client";

import { useState } from "react";
import { DishCard } from "./dish-card";
import { FilterTag } from "./filter-tag";
import { AddSearchFilter, Pagination } from "@/components/common";

interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
  cuisine: string;
}

interface DishesGridProps {
  dishes: Dish[];
  onViewDish: (id: string) => void;
  onEditDish: (id: string) => void;
  onDeleteDish: (id: string) => void;
  onAddDish: (val: boolean) => void;
}

export function DishesGrid({
  dishes,
  onViewDish,
  onEditDish,
  onDeleteDish,
  onAddDish,
}: DishesGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter dishes based on cuisine and search term
  const filteredDishes = dishes.filter((dish) => {
    const matchesFilter =
      filters.length === 0 || filters.includes(dish.cuisine);
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Paginate dishes
  const indexOfLastDish = currentPage * itemsPerPage;
  const indexOfFirstDish = indexOfLastDish - itemsPerPage;
  const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);
  const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);

  // Get unique cuisines for filter options
  const cuisines = [...new Set(dishes.map((dish) => dish.cuisine))];

  const addFilter = (cuisine: string) => {
    if (!filters.includes(cuisine)) {
      setFilters([...filters, cuisine]);
    }
  };

  const removeFilter = (cuisine: string) => {
    setFilters(filters.filter((f) => f !== cuisine));
  };

  return (
    <div className="flex flex-col gap-6">
      <AddSearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        actionBtnText={"Add Dish"}
        isActionBtn={true}
        onAdd={() => onAddDish(true)}
      />

      {/* Active filters */}
      {filters.length > 0 && (
        <div className="mb-4">
          {filters.map((filter) => (
            <FilterTag
              key={filter}
              label={filter}
              onRemove={() => removeFilter(filter)}
            />
          ))}
        </div>
      )}

      {/* Dishes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {currentDishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            name={dish.name}
            image={dish.image}
            price={dish.price}
            cuisine={dish.cuisine}
            onView={onViewDish}
            onEdit={onEditDish}
            onDelete={onDeleteDish}
          />
        ))}
      </div>

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
