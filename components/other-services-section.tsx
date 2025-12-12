"use client";

import React from "react";
import { Globe, Smartphone, Link2, Briefcase } from "lucide-react";
import { HeroButton } from "@/components/hero-button";

const SERVICES = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies and best practices.",
        icon: Globe,
    },
    {
        title: "App Development",
        description: "Native and cross-platform mobile applications for iOS and Android devices.",
        icon: Smartphone,
    },
    {
        title: "Blockchain Development",
        description: "Smart contracts, DApps, and blockchain solutions tailored to your business needs.",
        icon: Link2,
    },
    {
        title: "Consulting",
        description: "Strategic technology consulting to help you make informed decisions and scale your business.",
        icon: Briefcase,
    },
];

export function OtherServicesSection() {
    return (
        <section className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">

                {/* Header Section */}
                <div className="py-10 px-6 lg:p-20 border-b border-gray-300 dark:border-stone-700">
                    <h2 className="text-3xl lg:text-5xl font-medium text-[#161513] dark:text-white mb-6 tracking-tight">
                        Beyond Automation. More Services.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        We offer comprehensive technology services to help your business grow and succeed in the digital world.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-300 dark:bg-stone-700 gap-[1px]">
                    {SERVICES.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#fffefb] dark:bg-[#1f1515] p-8 lg:p-12 flex flex-col justify-between min-h-[280px] group hover:bg-[#faf9f6] dark:hover:bg-[#2a1f1f] transition-colors"
                            >
                                <div className="flex flex-col">
                                    <IconComponent className="w-10 h-10 text-[#FF4A00] mb-6" />
                                    <h3 className="text-2xl lg:text-3xl font-medium text-[#161513] dark:text-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="py-10 px-6 lg:p-20 border-t border-gray-300 dark:border-stone-700 flex flex-col items-center">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl">
                        Ready to discuss your project? Let's talk about how we can help.
                    </p>
                    <HeroButton variant="full-orange" className="w-full max-w-md">
                        GET STARTED TODAY
                    </HeroButton>
                </div>

            </div>
        </section>
    );
}

