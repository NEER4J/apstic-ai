import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore roles at Apstic. Work with a small team building practical AI workflows, integrations, and software for real business operations.",
  keywords: ["careers", "jobs", "AI workflows", "software engineering", "Apstic careers"],
  openGraph: {
    title: "Careers | Apstic",
    description: "Explore roles at Apstic. Work with a small team building practical AI workflows, integrations, and software for real business operations.",
    url: `${siteUrl}/careers`,
    type: "website",
    images: [
      {
        url: ogImage,
        alt: "Careers at Apstic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Apstic",
    description: "Explore roles at Apstic. Work with a small team building practical AI workflows, integrations, and software for real business operations.",
    images: [ogImage],
  },
};

type CareerListItem = {
  id: string;
  title: string;
  slug: string;
  location: string | null;
  type: string | null;
  description_html: string | null;
  created_at: string;
};

export const revalidate = 60;

async function fetchCareers(): Promise<CareerListItem[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("careers")
    .select("id,title,slug,location,type,description_html,status,created_at")
    .eq("status", "published")
    .order("created_at", { ascending: false });
  return data || [];
}

export default async function CareersPage() {
  const careers = await fetchCareers();

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Hero */}
        <header className="border-b border-[#dedbd3] py-14 sm:py-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#c84613]">
            Careers
          </p>
          <h1 className="mb-4 text-5xl font-semibold tracking-[-0.05em] text-[#191816] sm:text-6xl">
            Build useful systems with us
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[#625f58]">
            We build practical AI workflows, integrations, and internal tools for real business operations. If a role below fits how you work, we would like to hear from you.
          </p>
        </header>

        {/* Grid */}
        <div className="min-h-[400px] py-8">
        <div className="grid grid-cols-1 gap-3">
          {careers.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-[#dedbd3] bg-white p-12 text-center text-[#77736a] sm:p-16">
              <p className="text-lg mb-2">No open roles at the moment.</p>
              <p className="text-sm">You can still introduce yourself at <a className="text-[#c84613] underline underline-offset-4" href="mailto:hello@apstic.com">hello@apstic.com</a>.</p>
            </div>
          ) : (
            careers.map((role) => (
              <Link
                key={role.id}
                href={`/careers/${role.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-[#e1ded7] bg-white p-6 transition hover:border-[#ff4a00]/40 hover:shadow-[0_18px_45px_rgba(50,42,30,0.07)] lg:p-8"
              >
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="uppercase tracking-wide font-mono text-[#FF4A00]">
                    Open role
                  </span>
                  <div className="flex flex-wrap gap-1 md:gap-3 text-gray-500">
                    {role.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {role.location}
                      </span>
                    )}
                    {role.type && (
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" /> {role.type}
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-[#161513] leading-tight group-hover:text-[#FF4A00] transition-colors">
                  {role.title}
                </h2>

                <div className="flex justify-between border-t border-gray-200 items-center pt-4">

                <div className="m-0  flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{new Date(role.created_at).toLocaleDateString()}</span>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-mono text-[#FF4A00] group-hover:gap-3 transition-all bg-[#FF4A00] text-white px-4 py-2">
                  View details →
                </div>
                </div>
              </Link>
              ))
            )}
          </div>
        </div>

        {/* CTA Banner */}
        {careers.length > 0 && (
          <div className="border-t border-gray-200 bg-[#FF4A00] p-12 lg:p-16 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Want to build practical AI workflows?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Introduce yourself and share the kind of systems you would like to help build.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-[#bd3900] transition hover:bg-[#fff4ed]"
            >
              Say hello
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
