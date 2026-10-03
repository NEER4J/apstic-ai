import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Workflow } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const description = "Tell Apstic about the work slowing your team down. We build AI-enabled workflows, integrations, and internal systems around your existing tools.";

export const metadata: Metadata = {
  title: "Talk through a workflow",
  description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Talk through a workflow | Apstic",
    description,
    url: `${siteUrl}/contact`,
    type: "website",
    images: [{ url: `${siteUrl}/og-image.jpg`, alt: "Talk through an AI workflow with Apstic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk through a workflow | Apstic",
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#f8f6f1]">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <p className="mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#c84613]"><span className="h-2 w-2 rounded-full bg-[#ff4a00]" />Start a conversation</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">Tell us where work gets stuck.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#625f58]">Share the process, the tools involved, and what you wish happened next. A rough description is enough to begin.</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a href="mailto:hello@apstic.com" className="flex items-center gap-4 rounded-2xl border border-[#e1ded7] bg-white p-5 transition hover:border-[#ff4a00]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e9] text-[#c84613]"><Mail className="h-5 w-5" /></span>
              <span><span className="block text-xs uppercase tracking-wider text-[#89847a]">Email</span><span className="mt-1 block text-sm font-semibold">hello@apstic.com</span></span>
            </a>
            <a href="tel:+917470915225" className="flex items-center gap-4 rounded-2xl border border-[#e1ded7] bg-white p-5 transition hover:border-[#ff4a00]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e9] text-[#c84613]"><Phone className="h-5 w-5" /></span>
              <span><span className="block text-xs uppercase tracking-wider text-[#89847a]">Call</span><span className="mt-1 block text-sm font-semibold">+91 7470915225</span></span>
            </a>
          </div>

          <div className="mt-8 flex gap-4 rounded-2xl bg-[#1c1b19] p-5 text-white sm:p-6">
            <Workflow className="mt-1 h-5 w-5 shrink-0 text-[#ff8d62]" />
            <div>
              <h2 className="font-semibold">Not sure what to automate?</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">Start with the repetitive step that creates the most follow-up or rework. We can help map the rest.</p>
              <Link href="/#approach" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9a73] hover:text-white">See our approach <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-[#e1ded7] bg-white p-5 shadow-[0_18px_60px_rgba(50,42,30,0.06)] sm:p-8 lg:p-10">
          <div className="mb-8 border-b border-[#eeeae3] pb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#c84613]">Workflow inquiry</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">A few details to get us started</h2>
            <p className="mt-2 text-sm leading-6 text-[#77736a]">We’ll use this to understand the process before we reply.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
