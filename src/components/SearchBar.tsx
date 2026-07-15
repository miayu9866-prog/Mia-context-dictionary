"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = query.trim();
      if (!trimmed) return;
      router.push(`/word/${encodeURIComponent(trimmed)}`);
    },
    [query, router]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="w-4 h-4 text-[#9C9488] group-focus-within:text-[#A0856B] transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Explore an expression"
          className="w-full pl-11 pr-5 py-3.5 bg-white border border-[#DDD3C4]
            text-sm text-[#2C2925] placeholder:text-[#9C9488]
            focus:outline-none focus:border-[#A0856B] focus:ring-2 focus:ring-[#A0856B]/20
            transition-all duration-200"
        />
      </div>
    </form>
  );
}
