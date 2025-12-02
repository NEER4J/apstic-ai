"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit form");
            }

            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col bg-[#fffefb] dark:bg-[#1f1515]">
                {/* Hero Section */}
                <section className="w-full border-b border-gray-300 dark:border-stone-700">
                    <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
                        <div className="py-16 px-6 lg:py-20 lg:px-12 ">
                            <h1 className="text-4xl lg:text-[64px] leading-[1.1] font-medium text-[#161513] dark:text-white mb-6 font-sans tracking-tight">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="w-full">
                    <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Contact Information */}
                            <div className="p-6 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-stone-700 flex flex-col">
                                <h2 className="text-2xl lg:text-3xl font-medium text-[#161513] dark:text-white mb-8 font-sans">
                                    Contact Information
                                </h2>

                                <div className="space-y-8">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF4A00]/10 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-[#FF4A00]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                                Email
                                            </h3>
                                            <a
                                                href="mailto:hello@apstic.com"
                                                className="text-lg text-[#161513] dark:text-white hover:text-[#FF4A00] dark:hover:text-[#FF4A00] transition-colors"
                                            >
                                                hello@apstic.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF4A00]/10 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-[#FF4A00]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                                Phone
                                            </h3>
                                            <a
                                                href="tel:+917470915225"
                                                className="text-lg text-[#161513] dark:text-white hover:text-[#FF4A00] dark:hover:text-[#FF4A00] transition-colors"
                                            >
                                                +91 7470915225
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-300 dark:border-stone-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="p-6 lg:p-20 flex flex-col justify-center">
                                <h2 className="text-2xl lg:text-3xl font-medium text-[#161513] dark:text-white mb-8 font-sans">
                                    Send us a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your project or inquiry..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full min-h-[100px]"
                                        />
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus.type && (
                                        <div
                                            className={`p-4 rounded-md border ${submitStatus.type === "success"
                                                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                                                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
                                                }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                {submitStatus.type === "success" && (
                                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                                )}
                                                <p className="text-sm">{submitStatus.message}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#FF4A00] hover:bg-[#FF4A00]/90 text-white font-medium py-6 text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
