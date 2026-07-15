"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, BookmarkCheck } from "lucide-react";

import ExpressionSidebar from "@/components/ExpressionSidebar";
import NativeFeeling from "@/components/NativeFeeling";
import ContextMap from "@/components/ContextMap";
import RealScene from "@/components/RealScene";
import SimilarExpressions from "@/components/SimilarExpressions";
import ExpressionFamily from "@/components/ExpressionFamily";
import LearningTip from "@/components/LearningTip";
import LoadingSkeleton from "@/components/LoadingSkeleton";

import type { ExpressionData } from "@/types";
import { getCuratedExpression } from "../../../../data/curated-expressions";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useFavorites } from "@/hooks/useFavorites";

interface WordPageProps {
  params: Promise<{ expression: string }>;
}

export default function WordPage({ params }: WordPageProps) {
  const { expression } = use(params);
  const decoded = decodeURIComponent(expression).trim();
  const [data, setData] = useState<ExpressionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { add: addToHistory } = useSearchHistory();
  const { toggle: toggleFav, check: checkFav } = useFavorites();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!decoded) return;

    // Try curated data first
    const curated = getCuratedExpression(decoded);
    if (curated) {
      setData(curated);
      setError(null);
      addToHistory(decoded);
      setIsFav(checkFav(decoded));
      return;
    }

    // Fallback to AI API
    const fetchFromAI = async () => {
      try {
        setError(null);
        const res = await fetch("/api/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ expression: decoded }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error || "查询失败");
        }

        const json = await res.json();
        if (!json.success || !json.data) {
          throw new Error("未找到该表达的相关解析");
        }

        setData(json.data);
        addToHistory(decoded);
        setIsFav(checkFav(decoded));
      } catch (err) {
        setError(err instanceof Error ? err.message : "查询失败，请稍后重试");
      }
    };

    fetchFromAI();
  }, [decoded, addToHistory, checkFav]);

  const handleToggleFavorite = () => {
    setIsFav(toggleFav(decoded));
  };

  return (
    <div className="h-screen flex flex-col bg-page-bg">
      <nav className="px-6 pt-6 pb-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#999]
              hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>
          <button
            onClick={handleToggleFavorite}
            className={`p-2 transition-colors ${isFav ? "text-emerald-500" : "text-[#CCC] hover:text-[#999]"}`}
          >
            {isFav ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {!data && !error ? (
        <main className="flex-1 overflow-y-auto max-w-6xl mx-auto w-full px-6 pt-8 pb-8">
          <LoadingSkeleton />
        </main>
      ) : error ? (
        <main className="flex-1 overflow-y-auto max-w-6xl mx-auto w-full px-6 pt-20 pb-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <p className="text-[#666] mb-2">{error}</p>
            <Link
              href="/"
              className="text-sm text-emerald-600 underline underline-offset-2 decoration-emerald-300
                hover:decoration-emerald-600 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </main>
      ) : data ? (
        <main className="flex-1 flex flex-col overflow-hidden max-w-6xl mx-auto w-full px-6 pt-8">
         {/* Atlas Entry Header */}
          <div className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-16 overflow-hidden">
            <div className="w-full shrink-0 lg:w-[30%] lg:overflow-y-auto lg:pb-8">
              <ExpressionSidebar data={data} />
            </div>

            <div className="flex-1 min-w-0 lg:overflow-y-auto space-y-6 lg:pb-8">
              <NativeFeeling data={data.nativeFeeling} expression={data.expression} />
              <ContextMap scenes={data.contextMap.scenes} />
              <RealScene scenes={data.realScene.scenes} />
              <ExpressionFamily
                mainExpression={data.expression}
                family={data.expressionFamily}
              />
              <SimilarExpressions data={data.similarExpressions} />
              <LearningTip tip={data.learningTip} />
            </div>
          </div>
        </main>
      ) : null}

    </div>
  );
}
