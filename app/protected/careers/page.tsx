"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

type CareerRow = {
  id: string;
  title: string;
  slug: string;
  location: string | null;
  type: string | null;
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
};

export default function AdminCareersListPage() {
  const supabase = useMemo(() => createClient(), []);
  const [rows, setRows] = useState<CareerRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("careers")
        .select("id,title,slug,location,type,status,created_at,updated_at")
        .order("created_at", { ascending: false });
      setRows((data as CareerRow[]) || []);
      setLoading(false);
    };
    load();
  }, [supabase]);

  const filtered = rows.filter((row) => {
    const term = search.toLowerCase();
    return (
      row.title.toLowerCase().includes(term) ||
      row.slug.toLowerCase().includes(term) ||
      (row.location || "").toLowerCase().includes(term) ||
      (row.type || "").toLowerCase().includes(term)
    );
  });

  return (
    <div className="flex flex-col gap-8 text-[#161513]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Admin</p>
          <h1 className="text-4xl font-semibold tracking-tight mt-2">Careers</h1>
          <p className="text-gray-600 text-sm mt-2">Manage open roles.</p>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search title, location, type"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-gray-300 text-[#161513] w-64"
          />
          <Button asChild className="bg-[#161513] text-white hover:bg-black">
            <Link href="/protected/careers/new">New role</Link>
          </Button>
        </div>
      </div>

      <div className="border border-gray-200 bg-white">
        <div className="grid grid-cols-6 px-4 py-3 text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200">
          <span className="col-span-2">Title</span>
          <span>Location</span>
          <span>Type</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>
        {loading ? (
          <div className="p-4 text-sm text-gray-600">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-sm text-gray-600">No roles yet.</div>
        ) : (
          filtered.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-6 px-4 py-3 border-b border-gray-200 text-sm items-center"
            >
              <div className="col-span-2">
                <div className="font-medium text-[#161513]">{row.title}</div>
                <div className="text-gray-500 text-xs">{row.slug}</div>
              </div>
              <div className="text-gray-700">{row.location || "—"}</div>
              <div className="text-gray-700">{row.type || "—"}</div>
              <div className="text-gray-800 capitalize">{row.status}</div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/protected/careers/${row.id}`}>Edit</Link>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

