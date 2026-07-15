"use client";

import { useState, useEffect, useCallback } from "react";
import { getFavorites, toggleFavorite, isFavorite } from "@/lib/storage";
import type { FavoritesMap } from "@/types";

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoritesMap>({});

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggle = useCallback((expression: string): boolean => {
    const nowFav = toggleFavorite(expression);
    setFavorites(getFavorites());
    return nowFav;
  }, []);

  const check = useCallback(
    (expression: string): boolean => {
      return !!favorites[expression.toLowerCase()];
    },
    [favorites]
  );

  return { favorites, toggle, check };
}
