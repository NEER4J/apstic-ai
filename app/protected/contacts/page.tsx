"use client";

import { createClient } from "@/lib/supabase/client";
import { formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";

type ContactRow = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at: string;
};

export default function ContactsAdminPage() {
  const [rows, setRows] = useState<ContactRow[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      setRows((data as ContactRow[]) || []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return rows.filter(
      (row) =>
        row.name.toLowerCase().includes(term) ||
        row.email.toLowerCase().includes(term) ||
        row.message.toLowerCase().includes(term),
    );
  }, [rows, search]);

  return (
    <div className="flex flex-col gap-6 text-[#161513]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono">
            Admin
          </p>
          <h1 className="text-3xl font-semibold mt-2">Contact submissions</h1>
        </div>
        <div className="w-full max-w-sm">
          <Input
            placeholder="Search name, email, or message"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
      </div>

      <div className="border border-gray-200 bg-white">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-semibold text-[#161513]">Inbox</h3>
          <span className="text-xs text-gray-500">Live submissions</span>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Phone</th>
                <th className="text-left p-3">Message</th>
                <th className="text-left p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                    <td className="p-4 text-center text-gray-600" colSpan={5}>
                    Loading...
                  </td>
                </tr>
              )}
              {!loading && filtered.map((row) => (
                  <tr key={row.id} className="border-t border-gray-200 align-top">
                  <td className="p-3 font-medium">{row.name}</td>
                    <td className="p-3 text-blue-600 underline">{row.email}</td>
                    <td className="p-3 text-gray-600">
                    {row.phone || "—"}
                  </td>
                    <td className="p-3 text-gray-700 max-w-md">
                    {row.message}
                  </td>
                    <td className="p-3 text-gray-600 whitespace-nowrap">
                    {formatDate(row.created_at)}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && !loading && (
                <tr>
                  <td className="p-4 text-center text-gray-600" colSpan={5}>
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

