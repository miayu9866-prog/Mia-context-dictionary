interface Scene {
  label: string;
  emoji: string;
  rating: number;
  style: "oral" | "academic";
}

interface ContextMapProps {
  scenes: Scene[];
}

export default function ContextMap({ scenes }: ContextMapProps) {
  return (
    <div className="bg-[#F7F7F5] rounded-2xl p-8 space-y-5 border border-[#E8E8E5] shadow-sm">
      <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Where you hear it 使用场景</h2>
      <div className="space-y-4">
        {scenes.map((scene) => (
          <div key={scene.label} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-[#444]">
              <span>{scene.emoji}</span>
              <span>{scene.label}</span>
              <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                scene.style === "oral"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-blue-50 text-blue-600"
              }`}>
                {scene.style === "oral" ? "Oral 口语" : "Academic 学术"}
              </span>
            </span>
            <span className="inline-flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xs leading-none ${i < scene.rating ? "text-emerald-500" : "text-[#DDD]"}`}
                >
                  ★
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}