"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface MenuItemsProps {
  menuItems: MenuItem[];
  addToCart: (item: any) => void;
}

export function MenuItems({ menuItems, addToCart }: MenuItemsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex border border-borderSecondary rounded-lg overflow-hidden p-4 gap-3"
          >
            <div className="flex-1">
              <h3 className="font-semibold font-poppins text-Black90 mb-1">
                {item.name}
              </h3>
              <p className="text-primary font-poppins font-medium mb-2">
                ${item.price}
              </p>
              <p className="text-xs font-poppins text-Black60">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <button
                className=" bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
                onClick={() => addToCart(item)}
              >
                <Plus size={14} className="text-Black90" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
