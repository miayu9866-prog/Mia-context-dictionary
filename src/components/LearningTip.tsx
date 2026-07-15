import { Lightbulb } from "lucide-react";

interface LearningTipProps {
  tip: string;
}

export default function LearningTip({ tip }: LearningTipProps) {
  return (
    <div className="bg-[#F7F7F5] rounded-2xl p-8 space-y-4 border border-[#E8E8E5] shadow-sm">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-emerald-500" />
        <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Learning Tip 记忆方法</h2>
      </div>
      <p className="text-sm text-[#444] leading-relaxed">{tip}</p>
    </div>
  );
}