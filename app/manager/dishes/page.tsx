"use client";

import { useState } from "react";
import { mockDishes } from "@/constants/dashboard";
import { DishesGrid } from "@/components/screens/manager/dishes-grid";
import { AddDishModal } from "@/components/screens/manager/add-dish-modal";
import { DishDetails } from "@/components/screens/manager/add-dish-modal/dish-details-steps";
import DashboardLayout from "@/components/layouts/dashboard-layout";

// Mock data for dishes

export default function DishesPage() {
  const [dishes, setDishes] = useState(mockDishes);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleViewDish = (id: string) => {
    console.log("View dish:", id);
    // Implement view functionality
  };

  const handleEditDish = (id: string) => {
    console.log("Edit dish:", id);
    // Implement edit functionality
  };

  const handleDeleteDish = (id: string) => {
    if (confirm("Are you sure you want to delete this dish?")) {
      setDishes(dishes.filter((dish) => dish.id !== id));
    }
  };

  const handleSaveDish = ({
    images,
    details,
  }: {
    images: string[];
    details: DishDetails;
  }) => {
    const newDish = {
      id: `${Date.now()}`,
      name: details.title,
      image: images[0] || "/images/food-1.png",
      price: Number.parseFloat(details.price),
      cuisine: details.cuisineType,
    };

    setDishes([...dishes, newDish]);
    setIsAddModalOpen(false);
  };

  return (
    <DashboardLayout type={"manager"}>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold font-poppins text-Black100">
            Manage dishes
          </h2>
        </div>

        <DishesGrid
          dishes={dishes}
          onViewDish={handleViewDish}
          onEditDish={handleEditDish}
          onDeleteDish={handleDeleteDish}
          onAddDish={setIsAddModalOpen}
        />
      </div>

      <AddDishModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveDish}
      />
    </DashboardLayout>
  );
}
