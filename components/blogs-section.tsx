"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { formatDate } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type BlogCard = {
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

export function BlogsSection() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("blogs")
        .select(
          "id,title,slug,excerpt,author_name,tags,cover_image_url,published_at,created_at,status",
        )
        .eq("status", "published")
        .order("published_at", { ascending: false, nullsFirst: false })
        .limit(12);

      setBlogs(data || []);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="w-full border-b border-gray-300 bg-[#fffefb] dark:bg-[#1f1515]">
        <div className="max-w-[1440px] mx-auto border-x border-gray-300">
          <div className="p-20 text-center text-gray-500">Loading blogs...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full border-b border-gray-300 bg-[#fffefb] dark:bg-[#1f1515]">
      <div className="max-w-[1440px] mx-auto border-x border-gray-300">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 px-6 lg:px-12 pt-14 pb-10 border-b border-gray-300">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-mono">
              Insights & News
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#161513] dark:text-white mt-4">
              Latest from the Apstic team
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              Learn how we build automation systems, ship AI workflows, and
              scale results for our clients.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-base font-mono underline underline-offset-4 text-gray-700 dark:text-gray-200 hover:text-[#FF4A00] transition-colors"
          >
            View all insights →
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="p-10 text-center text-gray-500 dark:text-gray-300 border-t border-gray-300">
            No blog posts yet. Check back soon.
          </div>
        ) : (
          <>
            <div className="border-t border-gray-300">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={blogs.length > 4}
                className="w-full"
              >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="group border-r border-gray-300 dark:border-stone-700 p-6 flex flex-col gap-4 hover:bg-[#fdf8f3] dark:hover:bg-[#241919] transition-colors h-full"
                    >
                      {/* Cover Image */}
                      {blog.cover_image_url && (
                        <div className="aspect-[16/9] overflow-hidden border border-gray-200 dark:border-stone-700">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={blog.cover_image_url}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                        <span className="text-[#FF4A00]">●</span>
                        <span>
                          {blog.published_at
                            ? formatDate(blog.published_at)
                            : formatDate(blog.created_at)}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 flex-1">
                        <h3 className="text-xl font-medium text-[#161513] dark:text-white leading-tight line-clamp-2">
                          {blog.title}
                        </h3>
                        {blog.excerpt && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 min-h-[70px]">
                            {blog.excerpt}
                          </p>
                        )}
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                            {blog.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 border border-gray-300 dark:border-stone-700 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Read More */}
                      <div className="text-sm font-mono text-[#FF4A00] mt-auto">
                        Read article →
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end border-t border-gray-300 dark:border-stone-700">
              <div className="flex">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-16 h-16 flex items-center justify-center bg-[#FF4A00] hover:bg-[#ff5e1a] text-white transition-colors border-r border-white/20"
                  aria-label="Previous blogs"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-16 h-16 flex items-center justify-center bg-[#FF4A00] hover:bg-[#ff5e1a] text-white transition-colors"
                  aria-label="Next blogs"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

