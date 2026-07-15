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
    <div className="bg-[#F7F7F5] rounded-2xl border border-[#E8E8E5] shadow-sm overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#EFEFED] transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookText className="w-3.5 h-3.5 text-[#999]" />
          <h3 className="text-sm font-medium text-[#666] tracking-wide uppercase">{title}</h3>
        </div>
        {open ? <ChevronUp className="w-3.5 h-3.5 text-[#999]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#999]" />}
      </button>
      {open && <div className="px-6 pb-5">{children}</div>}
    </div>
  );
}