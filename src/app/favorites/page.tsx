 "use client";

 import Link from "next/link";
 import { ArrowLeft, Heart, Trash2 } from "lucide-react";
 import { useFavorites } from "@/hooks/useFavorites";
 import { getCuratedExpression } from "../../../data/curated-expressions";

 export default function FavoritesPage() {
   const { favorites, toggle } = useFavorites();
   const expressions = Object.keys(favorites);

   return (
     <div className="min-h-screen bg-page-bg">
       {/* Navigation */}
       <nav className="px-6 pt-6 pb-2">
         <div className="max-w-4xl mx-auto flex items-center justify-between">
           <Link
             href="/"
             className="inline-flex items-center gap-1.5 text-xs text-[#999]
               hover:text-emerald-600 transition-colors"
           >
             <ArrowLeft className="w-3 h-3" />
             Back
           </Link>
           <div className="flex items-center gap-2">
             <Heart className="w-4 h-4 text-rose-400" />
             <h1 className="text-sm font-medium text-[#666]">Word Book 单词本</h1>
           </div>
           {expressions.length > 0 && (
             <span className="text-xs text-[#999]">{expressions.length} words</span>
           )}
         </div>
       </nav>

       {/* Content */}
       <main className="max-w-4xl mx-auto px-6 pt-8 pb-20">
         {expressions.length === 0 ? (
           <div className="pt-20 text-center">
             <Heart className="w-8 h-8 text-[#DDD] mx-auto mb-4" />
             <p className="text-sm text-[#999]">
               No saved words yet. Tap the bookmark icon on any word page to collect them here.
             </p>
             <Link
               href="/"
               className="inline-block mt-4 text-sm text-emerald-600 underline underline-offset-2 decoration-emerald-300
                 hover:decoration-emerald-600 transition-colors"
             >
               Search for words
             </Link>
           </div>
         ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {expressions.map((exp) => {
               const curated = getCuratedExpression(exp);
               return (
                 <div key={exp} className="group relative">
                   <Link
                     href={`/word/${encodeURIComponent(exp)}`}
                     className="block bg-[#F7F7F5] rounded-2xl p-6 space-y-3
                       hover:bg-[#EFEFED] transition-all duration-200 border border-transparent hover:border-[#E8E8E5]"
                   >
                     <h3 className="text-lg font-medium text-[#222] group-hover:opacity-70 transition-opacity">
                       {exp}
                     </h3>
                     {curated ? (
                       <>
                         <p className="text-sm text-[#666] leading-relaxed line-clamp-2">
                           {curated.coreMeaning.english}
                         </p>
                         {curated.tags[0] && (
                           <div className="flex items-center gap-2 pt-1">
                             <span>{curated.tags[0].emoji}</span>
                             <span className="text-xs text-[#888]">{curated.tags[0].label}</span>
                           </div>
                         )}
                       </>
                     ) : (
                       <div className="flex items-center gap-2 pt-1">
                         <Heart className="w-3.5 h-3.5 text-rose-300" />
                         <span className="text-xs text-[#888]">Saved word</span>
                       </div>
                     )}
                   </Link>
                   <button
                     onClick={() => toggle(exp)}
                     className="absolute top-3 right-3 p-1.5 rounded-lg text-[#CCC]
                       hover:text-rose-400 hover:bg-white/60 transition-all opacity-0 group-hover:opacity-100"
                     title="Remove from word book"
                   >
                     <Trash2 className="w-3.5 h-3.5" />
                   </button>
                 </div>
               );
             })}
           </div>
         )}
       </main>
     </div>
   );
 }
