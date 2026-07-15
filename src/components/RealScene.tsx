import type { RealSceneItem } from "@/types";

interface RealSceneProps {
  scenes: RealSceneItem[];
}

const styleConfig: Record<string, { label: string; emoji: string; bg: string; color: string }> = {
  casual:  { label: "Casual 日常",  emoji: "☕", bg: "bg-emerald-50",   color: "text-emerald-600" },
  business: { label: "Business 商务", emoji: "💼", bg: "bg-blue-50",     color: "text-blue-600" },
  written:  { label: "Written 书面", emoji: "📝", bg: "bg-purple-50",   color: "text-purple-600" },
};

export default function RealScene({ scenes }: RealSceneProps) {
  return (
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] p-7 space-y-6">
      <div className="space-y-1 mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-[#9C9488] font-mono tracking-wider">03</span>
          <div className="h-px flex-1 bg-[#DDD3C4]/50" />
        </div>
        <h2 className="font-serif text-sm text-[#6B6258] font-medium">THE TERRITORY</h2>
        <p className="text-[11px] text-[#9C9488]">Real Life Scenes</p>
      </div>

      <div className="space-y-5">
        {scenes.map((scene, i) => {
          const cfg = styleConfig[scene.style] || styleConfig.casual;
          return (
            <div key={i} className="space-y-3">
              {/* Scene header */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#6B6258]">{cfg.emoji} {cfg.label}</span>
              </div>

              {/* Situation */}
              <p className="text-sm text-[#444] leading-relaxed">{scene.situation}</p>

              {/* Subtitle card */}
              <div className="bg-[#F7F3EA]/30 p-5 space-y-3 border border-[#DDD3C4]">
                <p className="text-base text-[#2C2925] font-[450] leading-relaxed">
                  {scene.nativeExpression}
                </p>
                <div className="border-t border-[#DDD3C4]/50 pt-3 space-y-2">
                  <div>
                    <span className="text-[11px] text-[#9C9488] uppercase tracking-wider">Meaning</span>
                    <p className="text-sm text-[#6B6258] mt-0.5">{scene.meaning}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9C9488] uppercase tracking-wider">Native Feeling</span>
                    <p className="text-sm text-[#6B6258] mt-0.5">{scene.nativeFeeling}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
