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
          <Search className="w-4 h-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What expression do you want to understand?"
          className="w-full pl-11 pr-5 py-3.5 bg-white rounded-xl border border-[#E8E8E5]
            text-sm text-[#222] placeholder:text-[#999]
            focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
            transition-all duration-200"
        />
      </div>
    </form>
  );
}