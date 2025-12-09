"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Upload } from "lucide-react";

type Props = {
  careerId: string;
  applyEmail?: string | null;
};

export function ApplyForm({ careerId, applyEmail }: Props) {
  const supabase = createClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
    setResumeUrl(null);
  };

  const handleUpload = async (file?: File) => {
    if (!file) return;
    setUploading(true);
    setError(null);
    const filePath = `career-resumes/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("career-resumes")
      .upload(filePath, file, { upsert: false });
    if (uploadError) {
      setError("Failed to upload resume. Please try again.");
    } else {
      const { data } = supabase.storage.from("career-resumes").getPublicUrl(filePath);
      setResumeUrl(data.publicUrl);
    }
    setUploading(false);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          career_id: careerId,
          name,
          email,
          phone,
          resume_url: resumeUrl,
          cover_letter: coverLetter,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Failed to submit application.");
      } else {
        setMessage("Application submitted. We'll be in touch!");
        reset();
      }
    } catch (err) {
      setError("Unexpected error. Please try again.");
    }
    setSubmitting(false);
  };

  const disabled = submitting || uploading || !name || !email;

  return (
    <div className="border border-gray-200 bg-white p-6 space-y-5 sticky top-20">
      <div>
        <h3 className="text-xl font-semibold text-[#161513]">Apply for this role</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Submit your details and upload a resume. Cover letters are optional.
        </p>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Phone (optional)</label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 123 4567"
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Cover letter (optional)</label>
          <Textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={4}
            placeholder="Brief note about why you're a fit..."
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>
        <div className="space-y-2 flex flex-col gap-2">
          <label className="text-sm text-gray-600">Resume (PDF/Doc)</label>
          <label className="inline-flex items-center gap-2 text-[#161513] cursor-pointer text-sm">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => handleUpload(e.target.files?.[0])}
            />
            <span className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 hover:border-gray-400 transition-colors">
              {uploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" /> Upload resume
                </>
              )}
            </span>
          </label>
          {resumeUrl && (
            <p className="text-xs text-gray-600 break-all">
              Uploaded: {resumeUrl}
            </p>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {message && <p className="text-sm text-green-600">{message}</p>}

      <Button
        onClick={handleSubmit}
        disabled={disabled}
        className="w-full bg-[#161513] text-white hover:bg-black"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
        Submit application
      </Button>

      {applyEmail && (
        <p className="text-xs text-gray-500">
          Prefer email? Send your application to{" "}
          <a className="underline" href={`mailto:${applyEmail}`}>
            {applyEmail}
          </a>
          .
        </p>
      )}
    </div>
  );
}

