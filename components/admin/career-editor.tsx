"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { slugify } from "@/lib/utils";
import { Loader2, Save, Trash2 } from "lucide-react";

type CareerRow = {
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
  updated_at: string;
};

type FormState = Omit<CareerRow, "id" | "created_at" | "updated_at"> & { id?: string };

const emptyForm: FormState = {
  title: "",
  slug: "",
  location: "",
  type: "",
  status: "draft",
  description_html: "",
  requirements: "",
  responsibilities: "",
  salary_range: "",
  apply_email: "",
};

export function CareerEditor({ careerId }: { careerId?: string }) {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [loading, setLoading] = useState(!!careerId);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!careerId) return;
    const load = async () => {
      setLoading(true);
      const { data } = await supabase.from("careers").select("*").eq("id", careerId).single();
      if (data) {
        setForm({ ...(data as CareerRow) });
      }
      setLoading(false);
    };
    load();
  }, [careerId, supabase]);

  const handleSave = async (publish = false) => {
    setSaving(true);
    const payload = {
      ...form,
      slug: form.slug ? slugify(form.slug) : slugify(form.title),
      status: publish ? "published" : form.status,
      description_html: form.description_html || null,
      requirements: form.requirements || null,
      responsibilities: form.responsibilities || null,
      salary_range: form.salary_range || null,
      apply_email: form.apply_email || null,
      location: form.location || null,
      type: form.type || null,
    };

    const { data, error } = await supabase
      .from("careers")
      .upsert(payload as any)
      .select()
      .single();

    if (!error && data) {
      setForm({ ...(data as CareerRow) });
      if (!careerId) {
        router.replace(`/protected/careers/${(data as CareerRow).id}`);
      }
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!form.id) return;
    setSaving(true);
    await supabase.from("careers").delete().eq("id", form.id);
    setSaving(false);
    router.push("/protected/careers");
  };

  return (
    <div className="flex flex-col gap-8 text-[#161513]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            {careerId ? "Edit role" : "New role"}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mt-2">
            {form.title || "Untitled role"}
          </h1>
          <p className="text-gray-600 text-sm mt-2">Draft and publish open roles.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleSave(false)}
            disabled={saving || loading}
            className="bg-white text-black hover:bg-gray-100"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
            Save draft
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleSave(true)}
            disabled={saving || loading}
          >
            Publish
          </Button>
          {form.id && (
            <Button variant="outline" onClick={handleDelete} disabled={saving}>
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </Button>
          )}
        </div>
      </div>

      <div className="border border-gray-200 bg-white p-5 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Title</label>
            <Input
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Role title"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Slug</label>
            <Input
              value={form.slug}
              onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
              placeholder="auto-generated from title"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Location</label>
            <Input
              value={form.location || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
              placeholder="Remote / City, Country"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Type</label>
            <Input
              value={form.type || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
              placeholder="Full-time / Contract"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Apply email</label>
            <Input
              value={form.apply_email || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, apply_email: e.target.value }))}
              placeholder="jobs@example.com"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Salary range</label>
            <Input
              value={form.salary_range || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, salary_range: e.target.value }))}
              placeholder="$80k-$120k"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Role Description (HTML)</label>
          <Textarea
            value={form.description_html || ""}
            onChange={(e) => setForm((prev) => ({ ...prev, description_html: e.target.value }))}
            rows={6}
            placeholder="Describe the role..."
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Responsibilities (one per line)</label>
          <Textarea
            value={form.responsibilities || ""}
            onChange={(e) => setForm((prev) => ({ ...prev, responsibilities: e.target.value }))}
            rows={4}
            placeholder="- Build features\n- Collaborate with team"
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Requirements (one per line)</label>
          <Textarea
            value={form.requirements || ""}
            onChange={(e) => setForm((prev) => ({ ...prev, requirements: e.target.value }))}
            rows={4}
            placeholder="- 3+ years experience\n- Strong TypeScript"
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
      </div>
    </div>
  );
}

