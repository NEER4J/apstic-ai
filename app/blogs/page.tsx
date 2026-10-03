import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical notes from Apstic on AI-enabled workflows, integrations, and the systems that keep operations moving.",
  keywords: ["AI workflows", "workflow automation", "business integrations", "operations", "Apstic insights"],
  openGraph: {
    title: "Insights | Apstic",
    description: "Practical notes from Apstic on AI-enabled workflows, integrations, and the systems that keep operations moving.",
    url: `${siteUrl}/blogs`,
    type: "website",
    images: [
      {
        url: ogImage,
        alt: "Apstic insights on AI workflows and connected operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Apstic",
    description: "Practical notes from Apstic on AI-enabled workflows, integrations, and the systems that keep operations moving.",
    images: [ogImage],
  },
};

export const revalidate = 60;

type BlogListItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  author_name: string | null;
  tags: string[] | null;
  cover_image_url: string | null;
  published_at: string | null;
  created_at: string;
};

async function fetchBlogs(): Promise<BlogListItem[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("blogs")
    .select(
      "id,title,slug,excerpt,author_name,tags,cover_image_url,published_at,created_at,status",
    )
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false });

  return data || [];
}

export default async function BlogIndexPage() {
  const blogs = await fetchBlogs();

  return (
    <main className="min-h-screen bg-[#f8f6f1]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="border-b border-[#dedbd3] py-14 sm:py-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#c84613]">
            Notes from Apstic
          </p>
          <h1 className="mb-4 text-5xl font-semibold tracking-[-0.05em] text-[#191816] sm:text-6xl">
            Ideas for work that moves
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#625f58]">
            Practical thinking on AI-enabled workflows, integrations, and the everyday systems behind good operations.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length === 0 && (
            <div className="col-span-full border-b border-[#dedbd3] py-20 text-center text-[#77736a]">
              <p className="text-lg mb-2">Nothing published here yet.</p>
              <p className="text-sm">In the meantime, tell us about a workflow you would like to improve.</p>
            </div>
          )}
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col gap-4 border-b border-[#dedbd3] p-6 transition hover:bg-white/70 sm:p-8"
            >
              {/* Cover Image */}
              {blog.cover_image_url && (
                <div className="mb-2 aspect-[16/9] overflow-hidden rounded-xl border border-[#dedbd3] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.cover_image_url}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono uppercase tracking-wide border border-gray-200 text-gray-600"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h2 className="text-2xl font-semibold text-[#161513] leading-tight group-hover:text-[#FF4A00] transition-colors">
                {blog.title}
              </h2>

              {/* Excerpt */}
              {blog.excerpt && (
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              )}

              {/* Meta */}
              <div className="mt-auto pt-4 border-t border-gray-200 flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {blog.published_at
                      ? formatDate(blog.published_at)
                      : formatDate(blog.created_at)}
                  </span>
                </div>
                {blog.author_name && (
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{blog.author_name}</span>
                  </div>
                )}
              </div>

              {/* Read More */}
              <div className="inline-flex items-center gap-2 text-sm font-mono text-[#FF4A00] group-hover:gap-3 transition-all">
                Read article
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        {blogs.length > 0 && (
            <div className="my-12 rounded-3xl bg-[#1c1b19] p-8 text-center text-white sm:my-16 sm:p-12">
            <h2 className="mb-4 text-3xl font-semibold">
              Have a workflow in mind?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-white/65">
              Start with the process, the people involved, and the tools it touches.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#ff4a00] px-6 py-3 font-semibold text-white transition hover:bg-[#d83d00]"
            >
              Talk it through
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
