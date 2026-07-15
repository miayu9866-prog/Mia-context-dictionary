 interface SemanticItem {
   expression: string;
   emotion: string;
   formality: string;
   frequency: string;
   position: { x: number; y: number };
 }

 interface SemanticMapProps {
   emotionLevel: string;
   formality: string;
   frequency: string;
   relatedExpressions: SemanticItem[];
 }

 const emotionColor: Record<string, string> = {
   negative: "text-rose-500",
   neutral: "text-amber-500",
   positive: "text-emerald-500",
 };

 const formalityIcon: Record<string, string> = {
   formal: "🎩",
   neutral: "👔",
   informal: "👕",
 };

 function Dot({ item }: { item: SemanticItem }) {
   const x = item.position.x;
   const y = 100 - item.position.y;
   return (
     <div
       className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:z-10"
       style={{ left: `${x}%`, top: `${y}%` }}
     >
       <div className="relative group cursor-pointer">
         <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${
           item.emotion === "negative" ? "bg-rose-400" :
           item.emotion === "positive" ? "bg-emerald-400" : "bg-amber-400"
         }`} />
         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
           <div className="bg-white rounded-lg px-3 py-2 text-xs shadow-md border border-[#E8E8E5]">
             <p className="font-medium text-[#222]">{item.expression}</p>
             <p className="text-[#888] mt-0.5">{item.emotion} · {item.formality}</p>
             <p className="text-[#999] text-[10px] mt-0.5">{item.frequency}</p>
           </div>
         </div>
       </div>
       <span className="block text-[10px] text-[#555] mt-1 text-center font-medium">{item.expression}</span>
     </div>
   );
 }

 export default function SemanticMap({ emotionLevel, formality, frequency, relatedExpressions }: SemanticMapProps) {
   return (
     <div className="bg-[#F7F7F5] rounded-2xl p-8 space-y-5 border border-[#E8E8E5] shadow-sm">
       <h2 className="text-xs font-medium text-[#999] uppercase tracking-widest">Semantic Map 语义坐标</h2>

       {/* Info tags */}
       <div className="flex flex-wrap gap-3 text-xs text-[#666]">
         <span className="flex items-center gap-1">
           <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/60">Emotion</span>
           <span className={emotionColor[emotionLevel] || "text-[#555]"}>{emotionLevel}</span>
         </span>
         <span className="flex items-center gap-1">
           <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/60">Formality</span>
           <span>{formalityIcon[formality] || "•"} {formality}</span>
         </span>
         <span className="flex items-center gap-1">
           <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/60">Frequency</span>
           <span>{frequency}</span>
         </span>
       </div>

       {/* Coordinate chart */}
       <div className="relative w-full aspect-[4/3] bg-white rounded-xl border border-[#E8E8E5] p-4">
         {/* Y-axis label */}
         <div className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-[#999] tracking-wider whitespace-nowrap origin-center">
           <span className="text-rose-300">Negative</span>
           <span className="mx-2">→</span>
           <span className="text-emerald-300">Neutral</span>
         </div>

         {/* X-axis label */}
         <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 text-[10px] text-[#999] tracking-wider">
           <span className="text-amber-300">Rare</span>
           <span className="mx-2">→</span>
           <span className="text-emerald-300">Common</span>
         </div>

         {/* Grid lines */}
         <div className="absolute inset-0 m-4">
           <div className="w-full h-full relative border-l border-b border-[#E8E8E5]">
             {/* Background grid */}
             <div className="absolute inset-0">
               <div className="w-full h-full" style={{
                 backgroundImage: 'linear-gradient(to right, #F0F0EE 1px, transparent 1px), linear-gradient(to bottom, #F0F0EE 1px, transparent 1px)',
                 backgroundSize: '25% 25%'
               }} />
             </div>

             {/* Dots */}
             {relatedExpressions.map((item) => (
               <Dot key={item.expression} item={item} />
             ))}
           </div>
         </div>
       </div>

       {/* Legend */}
       <div className="flex flex-wrap gap-3 text-[10px] text-[#888]">
         <span>🟠 emotion</span>
         <span>🟣 formality</span>
         <span>🟢 frequency</span>
       </div>
     </div>
   );
 }
