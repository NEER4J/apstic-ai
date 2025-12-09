import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { career_id, name, email, phone, resume_url, cover_letter } = body;

    if (!career_id || !name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("career_applications")
      .insert([
        {
          career_id,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || null,
          resume_url: resume_url?.trim() || null,
          cover_letter: cover_letter?.trim() || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Apply error", error);
      return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }

    return NextResponse.json({ message: "Application received", data }, { status: 201 });
  } catch (err) {
    console.error("Apply unexpected error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

