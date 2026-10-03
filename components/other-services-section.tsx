"use client";

import React from "react";
import { Globe, Smartphone, Link2, Briefcase, Code, CheckCircle2 } from "lucide-react";
import { HeroButton } from "@/components/hero-button";

const SERVICES = [
    {
        title: "AI workflow builds",
        description: "Connect the tools around a process, with clear rules, review points, and useful fallbacks.",
        icon: Globe,
        features: ["Workflow mapping", "System integrations", "Testing and handoff"],
    },
    {
        title: "Websites and web apps",
        description: "Build a considered digital front end for a service, product, or internal process.",
        icon: Smartphone,
        features: ["Product websites", "Web applications", "Responsive interfaces"],
    },
    {
        title: "Internal tools and integrations",
        description: "Give teams a clearer way to manage the data and steps that do not fit an off-the-shelf tool.",
        icon: Link2,
        features: ["Admin tools", "APIs and webhooks", "Data workflows"],
    },
    {
        title: "Product design and growth",
        description: "Shape the experience and message around what a product does and who it serves.",
        icon: Briefcase,
        features: ["UI and UX", "Illustration", "SEO and copy"],
    },
];

export function OtherServicesSection() {
    return (
        <section className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">

                {/* Header Section */}
                <div className="py-10 px-6 lg:p-20 border-b border-gray-300 dark:border-stone-700">
                    <h2 className="text-3xl lg:text-5xl font-medium text-[#161513] dark:text-white mb-6 tracking-tight">
                        Build the System Around the Work.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        Workflows are the focus here. Apstic also designs and builds the product surfaces and internal tools around them.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 dark:bg-stone-700 gap-[1px]">
                    {SERVICES.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#fffefb] dark:bg-[#1f1515] p-8 lg:p-12 flex flex-col justify-between min-h-[320px]"
                            >
                                <div className="flex flex-col">
                                    {/* Icon with background circle */}
                                    <div className="relative mb-6">
                                        <div className="relative w-14 h-14 rounded-full bg-[#FF4A00]/10 flex items-center justify-center">
                                            <IconComponent className="w-7 h-7 text-[#FF4A00]" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-medium text-[#161513] dark:text-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features list */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <CheckCircle2 className="w-4 h-4 text-[#FF4A00] flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}

                    {/* CTA Card - Integrated into grid, spans 2 columns */}
                    <div className="bg-[#FF4A00] p-8 lg:p-12 flex flex-col justify-center min-h-[320px] md:col-span-2 lg:col-span-2">
                        <div className="h-full flex flex-col justify-center">
                            <div>
                                <Code className="w-12 h-12 text-white/20 mb-6" />
                                <h3 className="text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight">
                                    Have a process in mind?
                                </h3>
                                <p className="text-white/90 text-lg leading-relaxed mb-8">
                                    Bring us the steps, systems, and handoffs. We will help map a useful first version.
                                </p>
                            </div>

                            <HeroButton variant="white-dark" className="w-full max-w-xs">
                                TALK TO APSTIC
                            </HeroButton>
                        </div>
                    </div>
                </div>

                {/* Bottom Visual Element */}
                <div className="h-16 w-full border-t border-gray-300 dark:border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#e5e3df_10px,#e5e3df_11px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#44403c_10px,#44403c_11px)] opacity-40"></div>

            </div>
        </section>
    );
}
