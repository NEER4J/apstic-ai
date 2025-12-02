"use client";
import Image from "next/image";
import { HeroButton } from "@/components/hero-button";

const CARDS = [
    {
        title: "Agencies & Freelancers",
        description: "Automate lead tracking, proposals, and client reports.",
        img: "/agency.svg",
    },
    {
        title: "Real Estate Teams",
        description: "Capture leads → WhatsApp alerts → CRM sync → AI follow-up.",
        img: "/real-estate.svg",
    },
    {
        title: "Coaches & Consultants",
        description: "Auto-schedule calls, send reminders, and AI-generate call notes.",
        img: "/local.svg",
    },
    {
        title: "Local Businesses",
        description: "AI chat systems for leads + automated Google review requests.",
        img: "/local.svg",
    },
    {
        title: "E-commerce Stores",
        description: "Auto order updates, AI-driven support, and smart inventory sync.",
        img: "/e-commerce.svg",
    },
];

export function WhoWeBuildFor() {
    return (
        <section className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">

                {/* Header Section */}
                <div className="py-10 px-6 lg:p-20 border-b border-gray-300 dark:border-stone-700">
                    <h2 className="text-3xl lg:text-5xl font-medium text-[#161513] dark:text-white mb-6 tracking-tight">
                        Who We Build For.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        Whether you're managing clients, properties, or customers we build automations that simplify your entire workflow.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 dark:bg-stone-700 gap-[1px]">
                    {CARDS.map((card, index) => (
                        <div key={index} className="bg-[#fffefb] dark:bg-[#1f1515] p-8 lg:p-12 flex flex-col justify-between min-h-[300px] hover:bg-gray-50 dark:hover:bg-[#251a1a] transition-colors group relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium text-[#161513] dark:text-white mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    {card.description}
                                </p>
                            </div>

                            {/* Icon/Illustration Area */}
                            <div className="mt-auto relative w-24 h-24">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-contain text-[#FF4A00] opacity-80 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-[#1f1515] relative min-h-[300px] flex flex-col justify-center items-center p-8 lg:p-12 overflow-hidden group">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/forest-min.jpg"
                                alt="Background"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col items-start w-full h-full justify-between">
                            <h3 className="text-3xl lg:text-4xl font-medium text-white mb-8 leading-tight">
                                Book A Call To See How We Can Help You
                            </h3>

                            <HeroButton variant="light" className="w-full max-w-xs">
                                Book Your Free Call
                            </HeroButton>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
