"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "h-12 rounded-none border-gray-300 bg-[#fffefb] px-4 text-sm focus-visible:ring-[#FF4A00]";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "We couldn't send your message. Please try again.");

      setSubmitStatus({ type: "success", message: "Thanks for reaching out. Your note is with us; we’ll reply by email." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: error instanceof Error ? error.message : "We couldn't send your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</Label>
        <Input id="name" name="name" autoComplete="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className={fieldClass} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className={fieldClass} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number <span className="font-normal text-gray-500">(optional)</span></Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Include country code if useful" value={formData.phone} onChange={handleChange} className={fieldClass} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">What process would you like to improve?</Label>
        <Textarea id="message" name="message" placeholder="What happens today? Which tools are involved? Where does the work slow down?" value={formData.message} onChange={handleChange} required className="min-h-[120px] resize-y rounded-none border-gray-300 bg-[#fffefb] px-4 py-3 text-sm leading-6 focus-visible:ring-[#FF4A00]" />
      </div>

      {submitStatus.type && (
        <div role={submitStatus.type === "error" ? "alert" : "status"} aria-live="polite" className={`flex items-start gap-3 border p-4 text-sm leading-6 ${submitStatus.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-800"}`}>
          {submitStatus.type === "success" && <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />}
          <p>{submitStatus.message}</p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-none bg-[#FF4A00] py-6 text-base font-medium text-white transition-colors hover:bg-[#FF4A00]/90">
        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</> : <><Send className="mr-2 h-4 w-4" />Send workflow details</>}
      </Button>
      <p className="text-xs text-gray-500">Your details are used to respond to this enquiry.</p>
    </form>
  );
}
