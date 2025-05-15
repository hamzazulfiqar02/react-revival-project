"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
  removeFromCart: (itemId: string) => void;
  addToCart: (item: any) => void;
}

export function OrderSummary({
  cartItems,
  removeFromCart,
  addToCart,
}: OrderSummaryProps) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-4 font-poppins">
      <h2 className="text-xs font-semibold text-center text-Black70">
        Order Summary
      </h2>

      <div className="mt-8">
        <h3 className="text-xs font-semibold text-Black70 mb-2">Your Items</h3>

        {cartItems.length === 0 ? (
          <div className="text-xs font-semibold text-Black70 py-2">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start rounded-lg border pt-2 pb-4 px-2"
              >
                <div className="relative w-16 h-16 rounded-md overflow-hidden mr-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-Black90">
                    {item.name}
                  </h4>
                  <div className="text-[13px] text-Black600">Fine Dining</div>
                  <div className="text-primary font-medium mt-1">
                    ${item.price}
                  </div>
                </div>
                <div className="flex items-center mt-auto border border-borderSecondary rounded-full p-2">
                  <button
                    className="text-gray-500 hover:text-primary"
                    onClick={() =>
                      item.quantity === 1
                        ? removeFromCart(item.id)
                        : removeFromCart(item.id)
                    }
                  >
                    {item.quantity === 1 ? (
                      <Trash2 size={16} />
                    ) : (
                      <Minus size={16} />
                    )}
                  </button>
                  <span className="text-xs mx-2">{item.quantity}</span>
                  <button
                    className="text-gray-500 hover:text-primary"
                    onClick={() => addToCart(item)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="order-t my-8" />

      <div className="border-t pt-4 mb-4 text-Black70">
        <div className="flex justify-between font-medium mt-2">
          <span className="text-xs font-semibold">
            Total <span className="text-[9px]">(incl. fees and tax)</span>
          </span>
          <span className="text-xs font-semibold">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full text-xs font-semibold bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors">
        Place Order
      </button>
    </div>
  );
}
