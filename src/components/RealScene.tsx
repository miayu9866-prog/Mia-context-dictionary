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
    <div className="bg-[#F7F7F5] rounded-2xl p-8 space-y-6 border border-[#E8E8E5] shadow-sm">
      <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Real-life Scene 真实场景</h2>

      <div className="space-y-5">
        {scenes.map((scene, i) => {
          const cfg = styleConfig[scene.style] || styleConfig.casual;
          return (
            <div key={i} className="space-y-3">
              {/* Scene header */}
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-medium ${cfg.color}`}>{cfg.emoji} {cfg.label}</span>
              </div>

              {/* Situation */}
              <p className="text-sm text-[#444] leading-relaxed">{scene.situation}</p>

              {/* Subtitle card */}
              <div className="bg-white rounded-xl p-5 space-y-3 border border-[#E8E8E5]">
                <p className="text-base text-[#222] font-[450] leading-relaxed">
                  {scene.nativeExpression}
                </p>
                <div className="border-t border-[#E8E8E5] pt-3 space-y-2">
                  <div>
                    <span className="text-[11px] text-[#999] uppercase tracking-wider">Meaning 含义</span>
                    <p className="text-sm text-[#555] mt-0.5">{scene.meaning}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#999] uppercase tracking-wider">Native feeling 母语感觉</span>
                    <p className="text-sm text-[#555] mt-0.5">{scene.nativeFeeling}</p>
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