import { Lightbulb } from "lucide-react";

interface LearningTipProps {
  tip: string;
}

export default function LearningTip({ tip }: LearningTipProps) {
  return (
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] p-7 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[10px] text-[#9C9488] font-mono tracking-wider">05</span>
          <div className="h-px flex-1 bg-[#DDD3C4]/50" />
        </div>
        <h2 className="font-serif text-sm text-[#6B6258] font-medium">THE PRACTICE</h2>
        <p className="text-[11px] text-[#9C9488]">AI Challenge</p>
      </div>
      <div className="flex items-start gap-3 pt-1">
        <Lightbulb className="w-4 h-4 text-[#A0856B] mt-0.5 shrink-0" />
        <p className="text-sm text-[#6B6258] leading-relaxed">{tip}</p>
      </div>
    </div>
  );
}
