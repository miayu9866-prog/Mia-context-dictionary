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
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] p-7 space-y-5">
      <div className="space-y-1 mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-[#9C9488] font-mono tracking-wider">02</span>
          <div className="h-px flex-1 bg-[#DDD3C4]/50" />
        </div>
        <h2 className="font-serif text-sm text-[#6B6258] font-medium">THE TERRITORY</h2>
        <p className="text-[11px] text-[#9C9488]">Context &amp; Usage</p>
      </div>
      <div className="space-y-4">
        {scenes.map((scene) => (
          <div key={scene.label} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-[#444]">
              <span>{scene.emoji}</span>
              <span className="text-[#6B6258]">{scene.label}</span>
              <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 ${
                scene.style === "oral"
                  ? "bg-[#F7F3EA] text-[#A0856B]"
                  : "bg-[#F7F3EA] text-[#6B6258]"
              }`}>
                {scene.style === "oral" ? "Oral" : "Academic"}
              </span>
            </span>
            <span className="inline-flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xs leading-none ${i < scene.rating ? "text-[#A0856B]" : "text-[#DDD3C4]"}`}
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
