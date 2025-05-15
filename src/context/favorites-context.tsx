
import React, { createContext, useContext, useState, useEffect } from "react"

type Favorite = {
  id: string
  restaurantId: string
}

type FavoritesContextType = {
  favorites: Favorite[]
  addFavorite: (restaurantId: string) => void
  removeFavorite: (restaurantId: string) => void
  isFavorite: (restaurantId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  useEffect(() => {
    // Load favorites from localStorage
    const loadFavorites = () => {
      try {
        const saved = localStorage.getItem('favorites')
        if (saved) {
          setFavorites(JSON.parse(saved))
        }
      } catch (error) {
        console.error('Error loading favorites:', error)
      }
    }

    loadFavorites()
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (restaurantId: string) => {
    setFavorites((prev) => [
      ...prev, 
      { id: `fav-${Date.now()}`, restaurantId }
    ])
  }

  const removeFavorite = (restaurantId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.restaurantId !== restaurantId))
  }

  const isFavorite = (restaurantId: string) => {
    return favorites.some((fav) => fav.restaurantId === restaurantId)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
