import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!fullName || !phone) {
    return NextResponse.json(
      { error: "Овог нэр болон утасны дугаар шаардлагатай." },
      { status: 400 }
    );
  }

  const record = {
    full_name: fullName,
    phone,
    company_name:
      typeof body.companyName === "string" && body.companyName.trim()
        ? body.companyName.trim()
        : null,
    email:
      typeof body.email === "string" && body.email.trim()
        ? body.email.trim()
        : null,
    message:
      typeof body.message === "string" && body.message.trim()
        ? body.message.trim()
        : null,
    product_name:
      typeof body.productName === "string" && body.productName.trim()
        ? body.productName.trim()
        : null,
  };

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("quote_submissions").insert(record);
    if (error) throw error;
  } catch (err) {
    console.error("Failed to store submission:", err);
    return NextResponse.json(
      { error: "Хүсэлтийг хадгалахад алдаа гарлаа. Дараа дахин оролдоно уу." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("quote_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ submissions: data ?? [] });
  } catch (err) {
    console.error("Failed to load submissions:", err);
    return NextResponse.json(
      { error: "Мэдээлэл ачаалахад алдаа гарлаа." },
      { status: 500 }
    );
  }
}
