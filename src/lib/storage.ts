import type { SearchHistoryItem, FavoritesMap } from "@/types";

const HISTORY_KEY = "ecd_search_history";
const FAVORITES_KEY = "ecd_favorites";
const MAX_HISTORY = 20;

export function getSearchHistory(): SearchHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addSearchHistory(expression: string): void {
  if (typeof window === "undefined") return;
  const history = getSearchHistory().filter(
    (item) => item.expression.toLowerCase() !== expression.toLowerCase()
  );
  history.unshift({ expression, visitedAt: Date.now() });
  localStorage.setItem(
    HISTORY_KEY,
    JSON.stringify(history.slice(0, MAX_HISTORY))
  );
}

export function clearSearchHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(HISTORY_KEY);
}

export function getFavorites(): FavoritesMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function toggleFavorite(expression: string): boolean {
  if (typeof window === "undefined") return false;
  const favs = getFavorites();
  const key = expression.toLowerCase();
  if (favs[key]) {
    delete favs[key];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    return false;
  } else {
    favs[key] = true;
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    return true;
  }
}

export function isFavorite(expression: string): boolean {
  const favs = getFavorites();
  return !!favs[expression.toLowerCase()];
}
