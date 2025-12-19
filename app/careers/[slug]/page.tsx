import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, Wallet } from "lucide-react";
import { ApplyForm } from "@/components/careers/apply-form";
import { Metadata } from "next";

type Career = {
  id: string;
  title: string;
  slug: string;
  location: string | null;
  type: string | null;
  status: "draft" | "published";
  description_html: string | null;
  requirements: string | null;
  responsibilities: string | null;
  salary_range: string | null;
  apply_email: string | null;
  created_at: string;
};

export const revalidate = 60;

async function getCareer(slug: string): Promise<Career | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("careers")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  return data as Career | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = await getCareer(slug);

  if (!career) {
    return {
      title: "Career not found | Apstic",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
  const ogImage = `${siteUrl}/og-image.jpg`;
  const url = `${siteUrl}/careers/${career.slug}`;

  const description = `Join Apstic as ${career.title}. ${career.location ? `Location: ${career.location}. ` : ""}${career.type ? `Type: ${career.type}. ` : ""}Apply now to be part of our AI automation team.`;

  return {
    title: `${career.title} - Careers | Apstic`,
    description,
    openGraph: {
      title: `${career.title} - Careers | Apstic`,
      description,
      url,
      type: "website",
      images: [{ url: ogImage, alt: `${career.title} at Apstic` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${career.title} - Careers | Apstic`,
      description,
      images: [ogImage],
    },
  };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const career = await getCareer(slug);
  if (!career) notFound();

  const requirements = career.requirements
    ? career.requirements.split("\n").filter(Boolean)
    : [];
  const responsibilities = career.responsibilities
    ? career.responsibilities.split("\n").filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF4A00] transition-colors font-mono"
          >
            ← Back to careers
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 lg:py-16 border-x border-gray-200">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono mb-4">
            Open role
          </p>
          <h1 className="text-3xl lg:text-5xl font-medium tracking-tight text-[#161513] leading-[1.1] mb-4">
            {career.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-mono">
            {career.location && (
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {career.location}
              </span>
            )}
            {career.type && (
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> {career.type}
              </span>
            )}
            {career.salary_range && (
              <span className="inline-flex items-center gap-2">
                <Wallet className="h-4 w-4" /> {career.salary_range}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content + Apply */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-10 border-x border-gray-200">
        <div className="space-y-8">
          {career.description_html && (
            <div
              className="prose prose-lg max-w-none leading-relaxed text-gray-700
              [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-[#161513] [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#161513] [&_h3]:mt-8 [&_h3]:mb-3
              [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
              [&_ol]:my-6 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
              [&_li]:text-gray-700 [&_blockquote]:border-l-4 [&_blockquote]:border-[#FF4A00] [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-gray-600
              [&_a]:text-[#FF4A00] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#cc3a00]
              "
              dangerouslySetInnerHTML={{ __html: career.description_html }}
            />
          )}

          {responsibilities.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#161513]">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {requirements.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#161513]">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full">
          <ApplyForm careerId={career.id} applyEmail={career.apply_email} />
        </div>
      </div>
    </main>
  );
}

