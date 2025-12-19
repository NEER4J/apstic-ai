import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: "Careers - Join Apstic | AI Automation Experts",
  description: "Help us build automation systems for businesses worldwide. Explore open roles and join the Apstic team working on cutting-edge AI automation solutions.",
  keywords: ["careers", "jobs", "AI automation jobs", "software engineering", "Apstic careers", "remote jobs"],
  openGraph: {
    title: "Careers - Join Apstic | AI Automation Experts",
    description: "Help us build automation systems for businesses worldwide. Explore open roles and join the Apstic team working on cutting-edge AI automation solutions.",
    url: `${siteUrl}/careers`,
    type: "website",
    images: [
      {
        url: ogImage,
        alt: "Careers at Apstic - AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Apstic | AI Automation Experts",
    description: "Help us build automation systems for businesses worldwide. Explore open roles and join the Apstic team working on cutting-edge AI automation solutions.",
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
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-[1440px] mx-auto border-x border-gray-200">
        {/* Hero */}
        <header className="border-b border-gray-200 px-6 lg:px-12 pt-16 pb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono mb-4">
            Careers
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#161513] mb-4">
            Join the Apstic team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Help us build automation systems for businesses worldwide. Explore open roles and apply.
          </p>
        </header>

        {/* Grid */}
        <div className="pb-5 min-h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-5 ">
          {careers.length === 0 ? (
            <div className="col-span-full p-16 text-center text-gray-500 border-t border-gray-200">
              <p className="text-lg mb-2">No open roles right now.</p>
              <p className="text-sm">Check back soon for new opportunities.</p>
            </div>
          ) : (
            careers.map((role, idx) => (
              <Link
                key={role.id}
                href={`/careers/${role.slug}`}
                className={`bg-[#fffefb] group border border-gray-200 p-6 lg:p-8 flex flex-col gap-4 hover:bg-gray-50 transition-all hover:shadow-sm ${
                  idx === 0 ? "md:border-l" : ""
                }`}
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
              Ready to work on automation that ships?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join us in building AI systems that power businesses around the globe.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#FF4A00] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Say hello
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

