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

                                    {/* Socials */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF4A00]/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#FF4A00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                                Follow Us
                                            </h3>
                                            <div className="flex gap-4">
                                                <a
                                                    href="https://www.linkedin.com/company/apstic"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg text-[#161513] dark:text-white hover:text-[#FF4A00] dark:hover:text-[#FF4A00] transition-colors"
                                                >
                                                    LinkedIn
                                                </a>
                                                <span className="text-gray-300">|</span>
                                                <a
                                                    href="https://www.instagram.com/apstic_ai/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg text-[#161513] dark:text-white hover:text-[#FF4A00] dark:hover:text-[#FF4A00] transition-colors"
                                                >
                                                    Instagram
                                                </a>
                                            </div>
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
