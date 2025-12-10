import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
    title: "Contact Us | Apstic - AI Business Automation Services",
    description: "Have a question or want to work together? Get in touch with Apstic. We'd love to hear from you and discuss how AI automation can transform your business.",
    keywords: ["contact", "get in touch", "AI automation", "business automation", "Apstic contact"],
    openGraph: {
        title: "Contact Us | Apstic - AI Business Automation Services",
        description: "Have a question or want to work together? Get in touch with Apstic. We'd love to hear from you and discuss how AI automation can transform your business.",
        url: `${siteUrl}/contact`,
        type: "website",
        images: [
            {
                url: ogImage,
                alt: "Contact Apstic - AI Business Automation Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Apstic - AI Business Automation Services",
        description: "Have a question or want to work together? Get in touch with Apstic. We'd love to hear from you and discuss how AI automation can transform your business.",
        images: [ogImage],
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col ">
                {/* Hero Section */}
                <section className="w-full border-b border-gray-300 dark:border-stone-700">
                    <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
                        <div className="px-6 lg:px-12 pt-16 pb-12 ">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono mb-4">
            Contact Us
          </p>
                            <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#161513] mb-4">
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

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
