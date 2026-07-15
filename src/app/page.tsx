"use client";

import Link from "next/link";
import { BookHeart } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import SearchHistory from "@/components/SearchHistory";
import { FeaturedGrid } from "@/components/FeaturedCard";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useFavorites } from "@/hooks/useFavorites";

export default function Home() {
  const { history, clear } = useSearchHistory();
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Hero */}
      <header className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#222] tracking-tight leading-[1.15]">
            Understand English<br />
            <span className="text-emerald-600">beyond translation.</span>
          </h1>
          <p className="text-base text-[#888] leading-relaxed max-w-lg mx-auto">
            Discover how native speakers actually feel and use expressions.
          </p>
          <div className="pt-4">
            <SearchBar />
          </div>
          <div className="flex justify-center">
            <SearchHistory history={history} onClear={clear} />
          </div>
        </div>
      </header>

      {/* Featured */}
      <section className="max-w-2xl mx-auto px-6 pb-24 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Featured Expressions</h2>
          <Link
            href="/favorites"
            className="inline-flex items-center gap-1.5 text-xs text-[#999] hover:text-rose-400 transition-colors"
          >
            <BookHeart className="w-3.5 h-3.5" />
            {Object.keys(favorites).length > 0
              ? `Word Book (${Object.keys(favorites).length})`
              : "Word Book"}
          </Link>
        </div>
        <FeaturedGrid />
      </section>

      {/* Footer */}
      <footer className="text-center pb-10">
        <p className="text-xs text-[#CCC]">Context Dictionary</p>
      </footer>
    </div>
  );
}
