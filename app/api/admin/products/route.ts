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
  const payload = {
    ...body,
    slug,
    rating: Number(body.rating ?? 0),
    reviews: Number(body.reviews ?? 0),
  };
  const { data, error } = await getAdminSupabase()
    .from("products")
    .insert(payload)
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
  updates.rating = Number(updates.rating ?? 0);
  updates.reviews = Number(updates.reviews ?? 0);
  const { data, error } = await getAdminSupabase()
    .from("products")
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
  const { error } = await getAdminSupabase().from("products").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
