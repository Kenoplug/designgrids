import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || request.headers.get("x-admin-password") !== password) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
