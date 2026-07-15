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
      <header className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-5xl sm:text-6xl font-medium text-[#2C2925] tracking-tight leading-[1.1]">
            Expression Atlas
          </h1>
          <p className="text-sm text-[#6B6258] leading-relaxed max-w-md mx-auto font-[450]">
            Discover the hidden world behind native English expressions.
          </p>
          <p className="text-[11px] text-[#9C9488]">
            Search an expression you want to understand:
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
          <h2 className="text-xs font-medium text-[#9C9488] uppercase tracking-widest">Today's Atlas Entries</h2>
          <Link
            href="/favorites"
            className="inline-flex items-center gap-1.5 text-xs text-[#9C9488] hover:text-[#A0856B] transition-colors"
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
        <p className="text-xs text-[#DDD3C4]">Context Dictionary</p>
      </footer>
    </div>
  );
}
