import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

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

export const revalidate = 60;

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
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-[1440px] mx-auto border-x border-gray-200">
        {/* Header */}
        <header className="border-b border-gray-200 px-6 lg:px-12 pt-16 pb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono mb-4">
            Insights & Articles
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#161513] mb-4">
            Blog & News
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Stories about automation, AI systems, and the results we deliver for clients.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length === 0 ? (
            <div className="col-span-full p-16 text-center text-gray-500 border-t border-gray-200">
              <p className="text-lg mb-2">No articles published yet.</p>
              <p className="text-sm">Check back soon for our latest insights.</p>
            </div>
          ) : (
            blogs.map((blog, idx) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className={`group border-t border-r border-gray-200 p-6 lg:p-8 flex flex-col gap-4 hover:bg-gray-50 transition-all hover:shadow-sm ${
                  idx === 0 ? "md:border-l" : ""
                }`}
              >
                {/* Cover Image */}
                {blog.cover_image_url && (
                  <div className="aspect-[16/9] overflow-hidden border border-gray-200 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.cover_image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            ))
          )}
        </div>
      </div>
    </main>
  );
}

