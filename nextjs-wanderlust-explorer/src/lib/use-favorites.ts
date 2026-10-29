"use client";

import { createContext, useContext } from "react";

export type FavoritesState = {
  ids: string[];
  isReady: boolean;
  error: string | null;
  toggleFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesState | null>(null);

export function useFavorites() {
  const favorites = useContext(FavoritesContext);
  if (!favorites) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider.");
  }
  return favorites;
}
