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

  const expType = data.expression.includes(" ") ? "Phrasal Verb" : "Word";
  const cefrLevel: Record<number, string> = { 5: "C1", 4: "B2", 3: "B1", 2: "A2", 1: "A1" };
  const level = cefrLevel[data.commonness] || "B1";
  const tone = data.tags.some((t) => /formal|written|academic/i.test(t.label))
    ? "Formal"
    : data.tags.some((t) => /informal|casual|oral|daily/i.test(t.label))
    ? "Informal"
    : "Neutral";

  return (
    <aside className="bg-white border border-[#DDD3C4] p-7 space-y-8">
      {/* Archive metadata grid */}
      <div className="space-y-4">
        <div className="pb-4 border-b border-[#DDD3C4]/50">
          <h1 className="font-serif text-3xl tracking-tight text-[#2C2925] leading-tight font-medium">
            {data.expression}
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
          <div>
            <span className="text-[10px] text-[#9C9488] uppercase tracking-wider">Type</span>
            <p className="text-[#6B6258] mt-0.5">{expType}</p>
          </div>
          <div>
            <span className="text-[10px] text-[#9C9488] uppercase tracking-wider">Level</span>
            <p className="text-[#6B6258] mt-0.5">{level}</p>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] text-[#9C9488] uppercase tracking-wider">Frequency</span>
            <div className="mt-0.5">
              <StarRating count={data.commonness} />
            </div>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] text-[#9C9488] uppercase tracking-wider">Tone</span>
            <p className="text-[#6B6258] mt-0.5">{tone}</p>
          </div>
        </div>
      </div>

      {/* Pronunciation */}
      <div>
        <span className="text-[10px] text-[#9C9488] uppercase tracking-wider block mb-2">Pronunciation</span>
        <div className="border border-[#DDD3C4] p-3">
          <button
            onClick={speak}
            className="w-full flex items-center gap-3 text-left group"
          >
            <span className="text-base">🇺🇸</span>
            <div className="flex-1">
              <span className="text-[11px] text-[#9C9488] block">American English</span>
              <span className="text-sm text-[#6B6258] font-mono">{data.pronunciation.us.ipa}</span>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-[#9C9488] group-hover:text-[#A0856B] transition-colors" />
          </button>
        </div>
      </div>

      {/* Core Meaning */}
      <div>
        <span className="text-[10px] text-[#9C9488] uppercase tracking-wider block mb-2">Definition</span>
        <p className="text-sm text-[#2C2925] leading-relaxed">{data.coreMeaning.english}</p>
        <p className="text-xs text-[#9C9488] leading-relaxed mt-1.5">{data.coreMeaning.chinese}</p>
      </div>

      {/* Tags as archive labels */}
      <div>
        <span className="text-[10px] text-[#9C9488] uppercase tracking-wider block mb-2">Labels</span>
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1 px-2.5 py-1 border border-[#DDD3C4] text-[11px] text-[#6B6258] bg-[#FDFCF9]"
            >
              <span className="text-xs">{tag.emoji}</span>
              <span>{tag.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Word Origin */}
      <div>
        <WordOrigin data={data.wordOrigin} />
      </div>
    </aside>
  );
}
