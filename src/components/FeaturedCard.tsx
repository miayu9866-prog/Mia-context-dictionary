"use client";

import Link from "next/link";
import { BookOpen, BookCheck } from "lucide-react";
import { useEffect, useState } from "react";
import type { ExpressionData } from "@/types";
import { getCuratedExpression } from "../../data/curated-expressions";
import { useSearchHistory } from "@/hooks/useSearchHistory";

export default function FeaturedCard({ expression, cachedMeaning }: { expression: string; cachedMeaning?: string }) {
  const data = getCuratedExpression(expression);

  if (!data && cachedMeaning) {
    return (
      <Link
        href={`/word/${encodeURIComponent(expression)}`}
        className="group block bg-[#F7F7F5] rounded-2xl p-6 space-y-3
          hover:bg-[#F7F3EA]/50 transition-all duration-200 border border-[#DDD3C4] hover:border-[#C4B8A8]"
      >
        <h3 className="text-lg font-medium text-[#2C2925] group-hover:opacity-70 transition-opacity">
          {expression}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed line-clamp-2">{cachedMeaning}</p>
        <div className="flex items-center gap-2 pt-1">
          <BookCheck className="w-3.5 h-3.5 text-[#A0856B]" />
          <span className="text-xs text-[#9C9488]">Cached</span>
        </div>
      </Link>
    );
  }

  // Show a simple card when neither curated nor cached data is available
  if (!data) {
    return (
      <Link
        href={`/word/${encodeURIComponent(expression)}`}
        className="group block bg-[#F7F7F5] rounded-2xl p-6 space-y-3
          hover:bg-[#F7F3EA]/50 transition-all duration-200 border border-[#DDD3C4] hover:border-[#C4B8A8]"
      >
        <h3 className="text-lg font-medium text-[#2C2925] group-hover:opacity-70 transition-opacity">
          {expression}
        </h3>
        <div className="flex items-center gap-2 pt-1">
          <BookOpen className="w-4 h-4 text-[#A0856B]" />
          <span className="text-xs text-[#9C9488]">Search to explore</span>
        </div>
      </Link>
    );
  }

  const firstTag = data.tags[0];

  return (
    <Link
      href={`/word/${encodeURIComponent(expression)}`}
        className="group block bg-[#F7F7F5] rounded-2xl p-6 space-y-3
          hover:bg-[#F7F3EA]/50 transition-all duration-200 border border-[#DDD3C4] hover:border-[#C4B8A8]"
      >
        <h3 className="text-lg font-medium text-[#2C2925] group-hover:opacity-70 transition-opacity">
        {expression}
      </h3>
      <p className="text-sm text-[#6B6258] leading-relaxed line-clamp-2">
        {data.coreMeaning.english}
      </p>
      {firstTag && (
        <div className="flex items-center gap-2 pt-1">
          <span>{firstTag.emoji}</span>
          <span className="text-xs text-[#9C9488]">{firstTag.label}</span>
        </div>
      )}
    </Link>
  );
}

export function FeaturedGrid() {
  const { history } = useSearchHistory();
  const defaultExpressions = ["keep tabs on", "figure out", "resort to", "awkward"];

  const expressions = history.length > 0
    ? history.slice(0, 4).map((item) => item.expression)
    : defaultExpressions;

  const [cachedMeanings, setCachedMeanings] = useState<Record<string, string>>({});

  useEffect(() => {
    const nonCurated = expressions.filter((exp) => !getCuratedExpression(exp));
    if (nonCurated.length === 0) {
      setCachedMeanings({});
      return;
    }

    fetch("/api/check-cache", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expressions: nonCurated }),
    })
      .then((res) => res.json())
      .then((data) => {
        const meanings: Record<string, string> = {};
        for (const [key, val] of Object.entries(data.results || {})) {
          const v = val as { meaning?: string };
          if (v?.meaning) {
            meanings[key] = v.meaning;
          }
        }
        setCachedMeanings(meanings);
      })
      .catch(() => {});
  }, [expressions]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {expressions.map((exp) => (
        <FeaturedCard key={exp} expression={exp} cachedMeaning={cachedMeanings[exp.toLowerCase()]} />
      ))}
    </div>
  );
}
