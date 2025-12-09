import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { ArrowLeft, Calendar, User, Tag, ChevronDown } from "lucide-react";
type BlogRecord = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content_html: string | null;
  content_json: unknown | null;
  cover_image_url: string | null;
  author_name: string | null;
  tags: string[] | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  meta_image_url: string | null;
  faq_json: { question: string; answer: string }[] | null;
  published_at: string | null;
  created_at: string;
};

export const revalidate = 60;

async function getBlog(slug: string): Promise<BlogRecord | null> {
  const supabase = await createClient();

  // First, try published content
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (data) return data as BlogRecord;

  // If not published, allow authenticated users to view drafts (useful for preview)
  const { data: draft, error: draftError } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (draft) return draft as BlogRecord;

  if (error || draftError) {
    console.error("Blog fetch error", error || draftError);
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Article not found | Apstic",
    };
  }

  const keywords = blog.meta_keywords
    ? blog.meta_keywords.split(",").map((k) => k.trim()).filter(Boolean)
    : blog.tags && blog.tags.length ? blog.tags : undefined;

  const image = blog.meta_image_url || blog.cover_image_url;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com"}/blog/${blog.slug}`;

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt || undefined,
    keywords,
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt || "",
      url,
      type: "article",
      images: image ? [{ url: image, alt: blog.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt || "",
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const publishedDate = blog.published_at || blog.created_at;
  const tags = blog.tags && blog.tags.length
    ? blog.tags
    : blog.meta_keywords
        ? blog.meta_keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : [];
  const faq = blog.faq_json || [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    datePublished: blog.published_at || blog.created_at,
    dateModified: blog.published_at || blog.created_at,
    description: blog.meta_description || blog.excerpt,
    image: blog.meta_image_url || blog.cover_image_url,
    author: blog.author_name
      ? {
          "@type": "Person",
          name: blog.author_name,
        }
      : {
          "@type": "Organization",
          name: "Apstic",
        },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com"}/blog/${blog.slug}`,
    },
    ...(faq.length
      ? {
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : {}),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb and Back Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF4A00] transition-colors font-mono"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all insights
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 lg:py-16 border-x border-gray-200">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-[0.15em] border border-gray-300 text-gray-700 bg-gray-50"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-[#161513] leading-[1.1] mb-6">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 max-w-3xl">
              {blog.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(publishedDate)}</span>
            </div>
            {blog.author_name && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author_name}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {blog.cover_image_url && (
        <section className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto border-x border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="w-full h-[200px] lg:h-[360px] object-cover"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 lg:py-16 border-x border-gray-200 !pt-3">
        <article
          className="prose prose-lg max-w-none leading-relaxed
            [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[#161513] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-[#161513] [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-gray-700 [&_p]:mb-6 [&_p]:leading-relaxed
            [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:my-6 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
            [&_li]:text-gray-700 [&_li]:leading-relaxed
            [&_blockquote]:border-l-4 [&_blockquote]:border-[#FF4A00] [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-gray-600
            [&_a]:text-[#FF4A00] [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-[#cc3a00]
            [&_strong]:font-semibold [&_strong]:text-[#161513]
            [&_img]:rounded-lg [&_img]:my-8
            [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-[#161513]
            [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:my-6
          "
          dangerouslySetInnerHTML={{ __html: blog.content_html || "" }}
        />

        {/* FAQ Section */}
        {faq.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono mb-2">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#161513]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item, idx) => (
                <details
                  key={idx}
                  className="group border border-gray-200 bg-[fffefb]"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 lg:px-8 py-5 list-none">
                    <span className="text-lg font-semibold text-[#161513]">
                      {item.question}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 lg:px-8 pb-5 pt-0 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="bg-[#FF4A00] p-8 lg:p-12 text-left">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Ready to automate your workflow?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl">
              Let's discuss how AI automation can transform your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#FF4A00] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
       
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200 ">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF4A00] transition-colors font-mono"
          >
            <ArrowLeft className="h-4 w-4" />
            View all insights
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

