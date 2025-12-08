"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  author_name: string | null;
  tags: string[] | null;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
};

export default function AdminBlogsListPage() {
  const supabase = useMemo(() => createClient(), []);
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("blogs")
        .select("id,title,slug,author_name,tags,status,published_at,created_at")
        .order("created_at", { ascending: false });
      setBlogs((data as BlogRow[]) || []);
      setLoading(false);
    };
    load();
  }, [supabase]);

  const filtered = blogs.filter((b) => {
    const term = search.toLowerCase();
    return (
      b.title.toLowerCase().includes(term) ||
      b.slug.toLowerCase().includes(term) ||
      (b.author_name || "").toLowerCase().includes(term) ||
      (b.tags || []).some((t) => t.toLowerCase().includes(term))
    );
  });

  return (
    <div className="flex flex-col gap-8 text-[#161513]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Admin</p>
          <h1 className="text-4xl font-semibold tracking-tight mt-2">Blog list</h1>
          <p className="text-gray-600 text-sm mt-2">
            Manage drafts and published articles.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search title, slug, author, tag"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-gray-300 text-[#161513] w-64"
          />
          <Button asChild className="bg-[#161513] text-white hover:bg-black">
            <Link href="/protected/blogs/new">New blog</Link>
          </Button>
        </div>
      </div>

      <div className="border border-gray-200 bg-white">
        <div className="grid grid-cols-6 px-4 py-3 text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200">
          <span className="col-span-2">Title</span>
          <span>Status</span>
          <span>Author</span>
          <span>Updated</span>
          <span className="text-right">Actions</span>
        </div>
        {loading ? (
          <div className="p-4 text-sm text-gray-600">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-sm text-gray-600">No posts yet.</div>
        ) : (
          filtered.map((b) => (
            <div
              key={b.id}
              className="grid grid-cols-6 px-4 py-3 border-b border-gray-200 text-sm items-center"
            >
              <div className="col-span-2">
                <div className="font-medium text-[#161513]">{b.title}</div>
                <div className="text-gray-500 text-xs">{b.slug}</div>
                {b.tags && b.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1 text-[11px] text-gray-600">
                    {b.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 border border-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-gray-800 capitalize">{b.status}</div>
              <div className="text-gray-700">{b.author_name || "—"}</div>
              <div className="text-gray-600">
                {new Date(b.published_at || b.created_at).toLocaleDateString()}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/protected/blogs/${b.id}`}>Edit</Link>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

