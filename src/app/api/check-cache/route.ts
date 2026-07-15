 import { NextRequest, NextResponse } from "next/server";
 import { getCachedData } from "@/lib/cache";

 export async function POST(request: NextRequest) {
   try {
     const body = await request.json();
     const expressions: string[] = body.expressions || [];
     if (!Array.isArray(expressions) || expressions.length === 0) {
       return NextResponse.json({ results: {} });
     }

     const results: Record<string, { meaning?: string }> = {};
     for (const exp of expressions) {
       const data = getCachedData<{ coreMeaning?: { english?: string } }>(exp);
       if (data?.coreMeaning?.english) {
         results[exp.toLowerCase()] = { meaning: data.coreMeaning.english };
       }
     }

     return NextResponse.json({ results });
   } catch {
     return NextResponse.json({ results: {} });
   }
 }
