import { NextRequest, NextResponse } from "next/server";
import { fetchExpressionData } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const expression = body.expression?.trim();
    if (!expression) {
      return NextResponse.json({ success: false, error: "请输入要查询的表达" }, { status: 400 });
    }
    const data = await fetchExpressionData(expression);
    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "查询失败，请稍后重试";
    console.error("API query error:", error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}