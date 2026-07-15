 interface FamilyItem {
   expression: string;
   meaning: string;
   difference: string;
 }

 interface ExpressionFamilyProps {
   mainExpression: string;
   family: FamilyItem[];
 }

 export default function ExpressionFamily({ mainExpression, family }: ExpressionFamilyProps) {
   if (!family || family.length === 0) return null;

  return (
    <div className="bg-[#FDFCF9] border border-[#DDD3C4] p-7 space-y-6">
      <div className="space-y-1 mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-[#9C9488] font-mono tracking-wider">05</span>
          <div className="h-px flex-1 bg-[#DDD3C4]/50" />
        </div>
        <h2 className="font-serif text-sm text-[#6B6258] font-medium">THE CONNECTIONS</h2>
        <p className="text-[11px] text-[#9C9488]">Expression Family</p>
      </div>

       {/* Root expression */}
      <div className="text-center">
        <span className="inline-block bg-[#F7F3EA]/50 px-5 py-3 border border-[#DDD3C4]">
          <span className="text-sm font-medium text-[#2C2925]">{mainExpression}</span>
        </span>
       </div>

       {/* Connecting line */}
       <div className="flex justify-center">
         <div className="w-px h-6 bg-[#DDD]" />
       </div>

       {/* Horizontal connector */}
       <div className="relative">
         <div className="absolute top-0 left-[15%] right-[15%] h-px bg-[#DDD]" />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
           {family.map((item) => (
             <div key={item.expression} className="relative flex flex-col">
               {/* Vertical connector dot */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25px] w-2 h-2 rounded-full bg-[#DDD]" />

               <div className="bg-[#F7F3EA]/30 p-5 border border-[#DDD3C4] space-y-3 flex-1">
                 <p className="text-sm font-medium text-[#2C2925]">{item.expression}</p>
                 <div className="space-y-1.5">
                   <div>
                     <span className="text-[10px] text-[#9C9488] uppercase tracking-wider">Meaning</span>
                     <p className="text-xs text-[#6B6258] mt-0.5 leading-relaxed">{item.meaning}</p>
                   </div>
                   {item.difference && (
                     <div>
                       <span className="text-[10px] text-[#9C9488] uppercase tracking-wider">Difference</span>
                       <p className="text-xs text-[#9C9488] mt-0.5 leading-relaxed">{item.difference}</p>
                     </div>
                   )}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   );
 }
