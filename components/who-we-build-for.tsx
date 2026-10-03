"use client";
import Image from "next/image";
import { HeroButton } from "@/components/hero-button";

const CARDS = [
    {
        title: "Agencies & Freelancers",
        description: "Connect enquiries, proposal drafts, and client updates while keeping client-facing messages reviewable.",
        img: "/agency.svg",
    },
    {
        title: "Real Estate Teams",
        description: "Capture enquiry context, route it to the right person, and prepare a follow-up for review.",
        img: "/real-estate.svg",
    },
    {
        title: "Coaches & Consultants",
        description: "Link bookings, intake, and internal notes with access scoped to the people who need them.",
        img: "/coaches.svg",
    },
    {
        title: "Local Businesses",
        description: "Route everyday questions to approved information or a team member when context is missing.",
        img: "/local.svg",
    },
    {
        title: "E-commerce Stores",
        description: "Bring order and support status together, with unusual cases routed to a person.",
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
                        Workflows Across Different Teams.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        The first useful workflow depends on where information gets stuck, who needs it next, and what needs a human decision.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 dark:bg-stone-700 gap-[1px]">
                    {CARDS.map((card, index) => (
                        <div key={index} className="bg-[#fffefb] dark:bg-[#1f1515] flex flex-col justify-between md:min-h-[374px] min-h-[300px] relative overflow-hidden">
                            <div className="relative z-10 p-8 lg:p-12">
                                <h3 className="text-3xl md:text-4xl text-[#161513] dark:text-white mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Icon/Illustration Area */}
                            <div className="mt-auto relative w-full h-full">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-contain text-[#FF4A00] opacity-80"
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
                                Bring Us One Process to Improve
                            </h3>

                            <HeroButton variant="light" className="w-full max-w-xs">
                                Book a Free Call
                            </HeroButton>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
