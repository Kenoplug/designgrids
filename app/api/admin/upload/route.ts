import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";

function authorized(request: Request): boolean {
  const password = process.env.ADMIN_PASSWORD;
  return !!password && request.headers.get("x-admin-password") === password;
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext || "png"}`;

  const { error } = await getAdminSupabase().storage.from("images").upload(filename, buffer, {
    contentType: file.type || "application/octet-stream",
    upsert: false,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const { data } = getAdminSupabase().storage.from("images").getPublicUrl(filename);
  return NextResponse.json({ ok: true, url: data.publicUrl });
}
