"use client";

import { useState, useEffect, useCallback } from "react";
import type { SearchHistoryItem } from "@/types";
import {
  getSearchHistory,
  addSearchHistory,
  clearSearchHistory,
} from "@/lib/storage";

export function useSearchHistory() {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getSearchHistory());
  }, []);

  const add = useCallback((expression: string) => {
    addSearchHistory(expression);
    setHistory(getSearchHistory());
  }, []);

  const clear = useCallback(() => {
    clearSearchHistory();
    setHistory([]);
  }, []);

  return { history, add, clear };
}
