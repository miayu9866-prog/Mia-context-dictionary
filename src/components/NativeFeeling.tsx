
interface NativeFeelingProps {
  data: {
    coreFeeling: string;
    emotionalMeaning: string;
    chineseExplanation: string;
    intro: string;
    details: string[];
    keyInsight: string;
  };
  expression: string;
}

export default function NativeFeeling({ data, expression }: NativeFeelingProps) {
  return (
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] p-7 space-y-6">
      <div className="space-y-1 mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-[#9C9488] font-mono tracking-wider">01</span>
          <div className="h-px flex-1 bg-[#DDD3C4]/50" />
        </div>
        <h2 className="font-serif text-sm text-[#6B6258] font-medium">THE ESSENCE</h2>
        <p className="text-[11px] text-[#9C9488]">Native Feeling</p>
      </div>

      {/* Expression */}
      <p className="text-sm font-medium text-[#2C2925]">{expression}</p>

      {/* Core feeling quote */}
      <div className="bg-[#F7F3EA]/50 border border-[#DDD3C4] p-5">
        <p className="text-base text-[#2C2925] leading-relaxed font-[450] italic">
          &ldquo;{data.coreFeeling}&rdquo;
        </p>
      </div>

      {/* Chinese explanation */}
      <div className="space-y-1">
        <span className="text-[11px] text-[#9C9488] uppercase tracking-wider">中文理解</span>
        <p className="text-sm text-[#6B6258] leading-relaxed">{data.chineseExplanation}</p>
      </div>

      {/* Emotional meaning */}
      <div className="space-y-1">
        <span className="text-[11px] text-[#9C9488] uppercase tracking-wider">Emotional Layers 情绪层次</span>
        <p className="text-sm text-[#6B6258] leading-relaxed">{data.emotionalMeaning}</p>
      </div>

      {/* Native intuition */}
      <div className="border-l-2 border-[#C4B8A8] pl-4 py-2 bg-[#F7F3EA]/30">
        <span className="text-[11px] text-[#A0856B] uppercase tracking-wider font-medium">Native intuition</span>
        <p className="text-sm text-[#6B6258] leading-relaxed mt-0.5">
          {data.keyInsight}
        </p>
      </div>
    </div>
  );
}
