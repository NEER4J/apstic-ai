"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input";

type Submission = {
  id: string;
  career_id: string;
  name: string;
  email: string;
  phone: string | null;
  resume_url: string | null;
  cover_letter: string | null;
  created_at: string;
  careers: {
    title: string;
  } | null;
};

export default function CareerSubmissionsPage() {
  const supabase = useMemo(() => createClient(), []);
  const [rows, setRows] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("career_applications")
        .select("*, careers ( title )")
        .order("created_at", { ascending: false });
      setRows((data as Submission[]) || []);
      setLoading(false);
    };
    load();
  }, [supabase]);

  const filtered = rows.filter((row) => {
    const term = search.toLowerCase();
    return (
      row.name.toLowerCase().includes(term) ||
      row.email.toLowerCase().includes(term) ||
      (row.careers?.title || "").toLowerCase().includes(term)
    );
  });

  return (
    <div className="flex flex-col gap-6 text-[#161513]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Admin</p>
          <h1 className="text-3xl font-semibold mt-2">Career submissions</h1>
          <p className="text-sm text-gray-600">Review inbound applications.</p>
        </div>
        <div className="w-full max-w-sm">
          <Input
            placeholder="Search by name, email, or role"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
      </div>

      <div className="border border-gray-200 bg-white">
        <div className="grid grid-cols-6 px-4 py-3 text-xs uppercase tracking-wide text-gray-500 border-b border-gray-200">
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Phone</span>
          <span>Submitted</span>
          <span className="text-right">Resume</span>
        </div>
        {loading ? (
          <div className="p-4 text-sm text-gray-600">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-sm text-gray-600">No submissions.</div>
        ) : (
          filtered.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-6 px-4 py-3 border-b border-gray-200 text-sm items-start gap-2"
            >
              <div className="font-semibold">{row.name}</div>
              <div className="text-blue-600 underline break-all">{row.email}</div>
              <div className="text-gray-700">{row.careers?.title || "—"}</div>
              <div className="text-gray-600">{row.phone || "—"}</div>
              <div className="text-gray-600">
                {new Date(row.created_at).toLocaleDateString()}
              </div>
              <div className="text-right">
                {row.resume_url ? (
                  <a
                    href={row.resume_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FF4A00] underline"
                  >
                    View
                  </a>
                ) : (
                  <span className="text-gray-400">No file</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

