"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookText } from "lucide-react";

interface CollapsibleCardProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function CollapsibleCard({ title, defaultOpen = false, children }: CollapsibleCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-[#F7F3EA]/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookText className="w-3.5 h-3.5 text-[#9C9488]" />
          <h3 className="text-sm font-medium text-[#6B6258]">{title}</h3>
        </div>
        {open ? <ChevronUp className="w-3.5 h-3.5 text-[#9C9488]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#9C9488]" />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}
