import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { isAdminAuthenticated } from "@/lib/adminAuth";

const ALLOWED_STATUSES = ["new", "contacted", "done"];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const status = typeof body.status === "string" ? body.status : "";
  if (!ALLOWED_STATUSES.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("quote_submissions")
      .update({ status })
      .eq("id", id);
    if (error) throw error;
  } catch (err) {
    console.error("Failed to update submission:", err);
    return NextResponse.json({ error: "Шинэчлэхэд алдаа гарлаа." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("quote_submissions")
      .delete()
      .eq("id", id);
    if (error) throw error;
  } catch (err) {
    console.error("Failed to delete submission:", err);
    return NextResponse.json({ error: "Устгахад алдаа гарлаа." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
