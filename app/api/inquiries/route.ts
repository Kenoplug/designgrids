import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry payload" }, { status: 400 });
  }

  // Connect this to Supabase leads and Resend notifications in production.
  return NextResponse.json({ ok: true, inquiry: parsed.data });
}
