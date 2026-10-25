import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase";
import { slugify } from "@/lib/utils";

function authorized(request: Request): boolean {
  const password = process.env.ADMIN_PASSWORD;
  return !!password && request.headers.get("x-admin-password") === password;
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const slug = slugify(String(body.title ?? ""));
  const { data, error } = await getAdminSupabase()
    .from("projects")
    .insert({ ...body, slug })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true, data });
}

export async function PUT(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const updates = { ...body };
  delete updates.id;
  delete updates.slug;
  delete updates.created_at;
  const { data, error } = await getAdminSupabase()
    .from("projects")
    .update(updates)
    .eq("id", body.id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true, data });
}

export async function DELETE(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await request.json();
  const { error } = await getAdminSupabase().from("projects").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
