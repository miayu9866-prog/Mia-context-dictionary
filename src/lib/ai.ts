import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./prompt";
 import { getCachedData, setCachedData } from "./cache";
import type { ExpressionData } from "@/types";
import { z } from "zod";

const RealSceneItemSchema = z.object({
  style: z.enum(["casual", "business", "written"]),
  situation: z.string(),
  nativeExpression: z.string(),
  meaning: z.string(),
  nativeFeeling: z.string(),
});

const ExpressionSchema = z.object({
  expression: z.string(),
  pronunciation: z.object({
    us: z.object({ ipa: z.string(), audio: z.string().optional() }),
  }),
  coreMeaning: z.object({
    english: z.string(),
    chinese: z.string(),
  }),
  tags: z.array(z.object({ emoji: z.string(), label: z.string() })),
  commonness: z.number().int().min(1).max(5),
  relatedExpressions: z.array(z.string()),
  nativeFeeling: z.object({
    intro: z.string(),
    details: z.array(z.string()),
    keyInsight: z.string(),
  }),
  contextMap: z.object({
    scenes: z.array(
      z.object({
        label: z.string(),
        emoji: z.string(),
        rating: z.number().int().min(1).max(5),
        style: z.enum(["oral", "academic"]),
      })
    ),
  }),
  realScene: z.object({
    scenes: z.array(RealSceneItemSchema),
  }),
  similarExpressions: z.array(
    z.object({
      expression: z.string(),
      vsExpression: z.string(),
      meaningDifference: z.string(),
      emotionalDifference: z.string(),
      usageDifference: z.string(),
      frequencyDifference: z.string(),
      whenToUse: z.string(),
    })
  ),
  wordOrigin: z.object({
    text: z.string(),
    chinese: z.string(),
    available: z.boolean(),
  }),
  learningTip: z.string(),
});

function getClient(): OpenAI {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey || apiKey === "your_openai_api_key_here") {
    throw new Error("DEEPSEEK_API_KEY 未配置");
  }
  return new OpenAI({
    apiKey,
    baseURL: "https://api.deepseek.com",
  });
}

export async function fetchExpressionData(
  expression: string
): Promise<ExpressionData> {
  const client = getClient();
  const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";

  // Check cache first
  const cached = getCachedData<ExpressionData>(expression);
  if (cached) return cached;

  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `请解析这个英语表达：${expression}` },
    ],
    temperature: 0.3,
    max_tokens: 2000,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("AI 返回了空响应");
  }

  const parsed = JSON.parse(content);
  const validated = ExpressionSchema.parse(parsed);

  // Save to cache
  setCachedData(expression, validated);

  return validated;
}
