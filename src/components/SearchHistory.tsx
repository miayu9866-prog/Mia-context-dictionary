"use client";

import { Clock } from "lucide-react";
import Link from "next/link";
import type { SearchHistoryItem } from "@/types";

interface SearchHistoryProps {
  history: SearchHistoryItem[];
  onClear: () => void;
}

export default function SearchHistory({ history, onClear }: SearchHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className="flex items-center gap-3 text-xs text-[#999]">
      <Clock className="w-3 h-3" />
      <span>Recent:</span>
      <div className="flex gap-2">
        {history.slice(0, 5).map((item) => (
          <Link
            key={`${item.expression}-${item.visitedAt}`}
            href={`/word/${encodeURIComponent(item.expression)}`}
            className="text-[#222] underline underline-offset-2 decoration-[#DDD]
              hover:decoration-[#222] transition-all duration-200"
          >
            {item.expression}
          </Link>
        ))}
      </div>
      <button onClick={onClear} className="hover:text-[#222] transition-colors">
        Clear
      </button>
    </div>
  );
}
