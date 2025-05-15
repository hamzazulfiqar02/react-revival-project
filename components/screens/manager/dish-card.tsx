"use client";

import Image from "next/image";
import { useState } from "react";
import { MoreVertical } from "lucide-react";

interface DishCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  cuisine: string;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DishCard({
  id,
  name,
  image,
  price,
  cuisine,
  onView,
  onEdit,
  onDelete,
}: DishCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-2">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover rounded-t-xl"
        />
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MoreVertical className="h-5 w-5 text-gray-600" />
        </button>

        {showMenu && (
          <div className="absolute max-w-[100px] top-8 right-4 bg-white rounded-xl shadow-lg py-1 z-10">
            <button
              className="w-full text-left px-7 py-4 text-xs text-Gray700 hover:text-Gray900"
              onClick={() => {
                onView(id);
                setShowMenu(false);
              }}
            >
              View
            </button>
            <button
              className="w-full text-left px-7 py-4 text-xs text-Gray700 hover:text-Gray900"
              onClick={() => {
                onEdit(id);
                setShowMenu(false);
              }}
            >
              Edit
            </button>
            <button
              className="w-full text-left px-7 py-4 text-xs text-Gray700 hover:text-Gray900"
              onClick={() => {
                onDelete(id);
                setShowMenu(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="px-1 py-4 flex justify-between items-center">
        <div>
          <h3 className=" font-semibold text-base font-poppins text-primary">
            {name}
          </h3>
          <p className="inline-block px-2 py-1 text-xs rounded-full bg-Black0 text-Gray600">
            {cuisine}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold font-poppins text-Black100">${price}</span>
        </div>
      </div>
    </div>
  );
}
