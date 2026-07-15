"use client";

import { Volume2 } from "lucide-react";
import WordOrigin from "./WordOrigin";
import type { ExpressionData } from "@/types";

interface ExpressionSidebarProps {
  data: ExpressionData;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-sm leading-none ${i < count ? "text-[#222]" : "text-[#DDD]"}`}>★</span>
      ))}
    </span>
  );
}

export default function ExpressionSidebar({ data }: ExpressionSidebarProps) {
  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(data.expression);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <aside className="bg-white rounded-2xl border border-[#E8E8E5] shadow-sm p-6 space-y-7">
      {/* Expression */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-[#222] leading-tight">
          {data.expression}
        </h1>
      </div>

      {/* Pronunciation - US only */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Pronunciation</h2>
        <button
          onClick={speak}
          className="w-full flex items-center gap-3 p-3 bg-[#F7F7F5] rounded-xl
            hover:bg-[#EFEFED] transition-all duration-200 border border-[#E8E8E5] group"
        >
          <span className="text-base">🇺🇸</span>
          <div className="flex-1 text-left">
            <span className="text-xs text-[#888] block">American English</span>
            <span className="text-sm text-[#555] font-mono">{data.pronunciation.us.ipa}</span>
          </div>
          <Volume2 className="w-4 h-4 text-[#999] group-hover:text-emerald-500 transition-colors" />
        </button>
      </div>

      {/* Core Meaning - bilingual */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Meaning</h2>
        <p className="text-sm text-[#222] leading-relaxed">{data.coreMeaning.english}</p>
        <p className="text-xs text-[#888] leading-relaxed">{data.coreMeaning.chinese}</p>
      </div>

      {/* Tags */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Context</h2>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F7F5] rounded-full text-xs text-[#555]"
            >
              <span>{tag.emoji}</span>
              <span>{tag.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Commonness */}
      <div className="space-y-2">
        <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Commonness</h2>
        <StarRating count={data.commonness} />
      </div>

      {/* Related Expressions */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Related</h2>
        <div className="space-y-1.5">
          {data.relatedExpressions.map((exp) => (
            <a
              key={exp}
              href={`/word/${encodeURIComponent(exp)}`}
              className="block text-sm text-[#222] underline underline-offset-2 decoration-[#DDD]
                hover:decoration-emerald-500 transition-all duration-200"
            >
              {exp}
            </a>
          ))}
    </div>
      </div>

      {/* Word Origin */}
      <WordOrigin data={data.wordOrigin} />
    </aside>
  );
}
