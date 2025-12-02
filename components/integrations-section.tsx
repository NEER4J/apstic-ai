"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const INTEGRATIONS = [
    // Row 1
    { name: "QuickBooks", logo: "QB", type: "logo" },
    { name: "Xero", logo: "Xero", type: "logo" },
    { name: "Zoho Office", logo: "Zoho", type: "logo" },
    { name: "OpenAI", logo: "OpenAI", type: "logo" },
    { name: "Zapier", logo: "Zapier", type: "logo" },
    // Row 2
    { name: "Forest Image", type: "image-wide", src: "/forest-min.jpg" }, // Placeholder for the wide image
    { name: "Google Cloud", logo: "GCP", type: "logo" },
    { name: "Power BI", logo: "PowerBI", type: "logo" },
    { name: "Insomnia", logo: "Insomnia", type: "logo" },
    // Row 3
    { name: "Gemma 2", logo: "Gemma", type: "logo" },
    { name: "Moodle", logo: "Moodle", type: "logo" },
    { name: "Excel", logo: "Excel", type: "logo" },
    { name: "Swagger", logo: "Swagger", type: "logo" },
    { name: "Water Image", type: "image", src: "/see-min.jpg" }, // Placeholder for the single image
];

export function IntegrationsSection() {
    return (
        <section className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">

                {/* Header Section */}
                <div className="py-10 px-6 lg:p-20 border-b border-gray-300 dark:border-stone-700">
                    <h2 className="text-3xl lg:text-5xl font-medium text-[#161513] dark:text-white mb-6 tracking-tight">
                        Connected to Everything<br />
                        You Already Use
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        We integrate AI and automation across your existing tools — CRMs, e-commerce,
                        accounting, communication, and more.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 bg-gray-300 dark:bg-stone-700 gap-[1px]">
                    {INTEGRATIONS.map((item, i) => {
                        if (item.type === "image-wide") {
                            return (
                                <div key={i} className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#fffefb] dark:bg-[#1f1515] relative min-h-[150px] overflow-hidden group">
                                    <Image
                                        src={item.src || ""}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            )
                        }

                        if (item.type === "image") {
                            return (
                                <div key={i} className="col-span-1 bg-[#fffefb] dark:bg-[#1f1515] relative  overflow-hidden group">
                                    <Image
                                        src={item.src || ""}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            )
                        }

                        return (
                            <div key={i} className="bg-[#fffefb] dark:bg-[#1f1515] p-6 md:p-8 flex flex-col justify-between  hover:bg-gray-50 dark:hover:bg-[#251a1a] transition-colors group border-r border-gray-300 dark:border-stone-700">
                                {/* Logo Placeholder */}
                                <div className="flex items-start justify-start mb-4">
                                    {/* We would use real SVGs here. Using text/icon placeholder for now */}
                                    <div className="font-bold text-xl text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400">
                                        {item.logo && item.logo[0]}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="text-lg text-[#161513] dark:text-white">
                                        {item.name}
                                    </span>
                                    {/* <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Integration
                                    </span> */}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
