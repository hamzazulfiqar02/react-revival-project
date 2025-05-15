"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useFavorites } from "@/context/favorites-context";

interface FavoriteButtonProps {
  restaurantId: number | string;
  initialFavorited?: boolean;
  size?: number;
  className?: string;
}

export default function FavoriteButton({
  restaurantId,
  initialFavorited = false,
  size = 20,
  className = "",
}: FavoriteButtonProps) {
  const numericId =
    typeof restaurantId === "string"
      ? Number.parseInt(restaurantId)
      : restaurantId;
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(initialFavorited);

  // Sync with context on mount
  useEffect(() => {
    setIsFavorited(isFavorite(numericId));
  }, [numericId, isFavorite]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    e.stopPropagation(); // Prevent event bubbling

    const newStatus = !isFavorited;
    setIsFavorited(newStatus);

    if (newStatus) {
      addFavorite(numericId);
    } else {
      removeFavorite(numericId);
    }
  };

  return (
    <button
    onClick={toggleFavorite}
    className={`block w-14 h-14 ${className} `}
    aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    style={{ lineHeight: 0, fontSize: 0 }}
  >
    <div className="w-full h-full flex items-center justify-center">
      <Heart
        size={size}
        className={`text-primary ml-2 mt-2 ${isFavorited ? "fill-primary" : "none"}`}
        strokeWidth={2}
      />
    </div>
  </button>
  );
}
