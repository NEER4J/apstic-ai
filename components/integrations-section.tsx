"use client";

import React from "react";
import Image from "next/image";
import {
    Zap,
    Github,
    Slack,
    Figma,
    Trello,
    Linkedin,
    Twitter,
    Youtube,
    Chrome,
    Codepen,
    Gitlab,
    Twitch,
    Bot,
    Database,
    Cloud,
    Mail,
    MessageSquare,
    ShoppingBag,
    Layout
} from "lucide-react";

const INTEGRATIONS = [
    // Row 1
    { name: "QuickBooks", icon: Zap, color: "text-orange-500" },
    { name: "Xero", icon: Zap, color: "text-orange-500" },
    { name: "Zoho Office", icon: Zap, color: "text-orange-500" },
    { name: "OpenAI", icon: Bot, color: "text-green-500" },
    { name: "Zapier", icon: Zap, color: "text-orange-600" },

    // Row 2
    { name: "Forest Image", type: "image-wide", src: "/forest-min.jpg" },
    { name: "Google Cloud", icon: Cloud, color: "text-blue-500" },
    { name: "Power BI", icon: Zap, color: "text-yellow-500" },
    { name: "Insomnia", icon: Zap, color: "text-purple-500" },

    // Row 3
    { name: "Slack", icon: Slack, color: "text-emerald-500" },
    { name: "GitHub", icon: Github, color: "text-black dark:text-white" },
    { name: "Discord", icon: MessageSquare, color: "text-indigo-500" }, // Fallback for Discord
    { name: "Jira", icon: Zap, color: "text-blue-600" },
    { name: "Water Image", type: "image", src: "/see-min.jpg" },

    // Row 4 (New Popular Tools)
    { name: "Notion", icon: Zap, color: "text-black dark:text-white" },
    { name: "Linear", icon: Zap, color: "text-indigo-400" },
    { name: "HubSpot", icon: Zap, color: "text-orange-500" },
    { name: "Salesforce", icon: Cloud, color: "text-blue-400" },
    { name: "Shopify", icon: ShoppingBag, color: "text-green-600" },
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-300 dark:bg-stone-700 gap-[1px]">
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
                                <div key={i} className="col-span-1 bg-[#fffefb] dark:bg-[#1f1515] relative min-h-[150px] overflow-hidden group">
                                    <Image
                                        src={item.src || ""}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            )
                        }

                        // Icon Item
                        const IconComponent = item.icon || Zap;

                        return (
                            <div key={i} className="bg-[#fffefb] dark:bg-[#1f1515] p-6 md:p-8 flex flex-col justify-between group">
                                {/* Icon */}
                                <div className="flex items-start justify-start mb-4">
                                    <div className={``}>
                                        <IconComponent
                                            className={`w-6 h-6 ${item.color || "text-orange-500"}`}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="text-lg font-medium text-[#161513] dark:text-white">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
