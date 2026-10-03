import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please add your name, email, and a short description." }, { status: 400 });
    }

    if (name.length > 160 || email.length > 320 || phone.length > 80 || message.length > 5000) {
      return NextResponse.json({ error: "One of the fields is longer than allowed." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, phone, message }])
      .select()
      .single();

    if (error) {
      console.error("Supabase contact submission error:", error);
      return NextResponse.json({ error: "We couldn't submit your message right now. Please email hello@apstic.com." }, { status: 500 });
    }

    return NextResponse.json({ message: "Contact form submitted successfully", data }, { status: 201 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ error: "We couldn't submit your message right now. Please email hello@apstic.com." }, { status: 500 });
  }
}
