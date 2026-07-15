 import fs from "fs";
 import path from "path";

 const CACHE_DIR = path.join(process.cwd(), "data", "cache");

 function ensureCacheDir(): void {
   if (!fs.existsSync(CACHE_DIR)) {
     fs.mkdirSync(CACHE_DIR, { recursive: true });
   }
 }

 function getCacheKey(expression: string): string {
   // Normalize: lowercase, trim, replace spaces with dash
   const key = expression.toLowerCase().trim().replace(/\s+/g, "-");
   return path.join(CACHE_DIR, `${encodeURIComponent(key)}.json`);
 }

 export function getCachedData<T>(expression: string): T | null {
   try {
     const filePath = getCacheKey(expression);
     if (fs.existsSync(filePath)) {
       const raw = fs.readFileSync(filePath, "utf-8");
       return JSON.parse(raw) as T;
     }
   } catch {
     // Silently ignore cache read errors
   }
   return null;
 }

 export function setCachedData<T>(expression: string, data: T): void {
   try {
     ensureCacheDir();
     const filePath = getCacheKey(expression);
     fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
   } catch {
     // Silently ignore cache write errors
   }
 }
