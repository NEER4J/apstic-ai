"use client";

import React from "react";
import { Zap, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFITS = [
    {
        title: "Smarter Workflows",
        description: "Automate lead tracking, proposals, and client reports.",
    },
    {
        title: "Faster Responses",
        description: "Capture leads → WhatsApp alerts → CRM sync → AI follow-up.",
    },
    {
        title: "Better Visibility",
        description: "Auto-schedule calls, send reminders, and AI-generate call notes.",
    },
    {
        title: "Time Freedom",
        description: "AI chat systems for leads + automated Google review requests.",
    },
    {
        title: "Custom Intelligence",
        description: "Auto order updates, AI-driven support, and smart inventory sync.",
    },
];

export function BenefitsSection() {
    return (
        <section className="w-full border-b border-stone-700 bg-[#161513]">
            <div className="max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-16 px-6 lg:px-20 border-b border-stone-700">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
                        What You'll Gain With Apstic.
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 bg-stone-700 gap-[1px] border-b border-stone-700">
                    {BENEFITS.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#161513] p-8 lg:p-12 flex flex-col justify-center min-h-[300px] group hover:bg-[#1f1a1a] transition-colors"
                        >
                            <Zap className="w-8 h-8 text-[#FF4A00] mb-6 fill-current" />

                            <h3 className="text-2xl font-medium text-white mb-4">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-[#FF4A00] p-8 lg:p-12 flex flex-col justify-center min-h-[300px] relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <h3 className="text-3xl lg:text-4xl font-medium text-white mb-8 leading-tight">
                                Ready To See Your Workflow Automated?
                            </h3>

                            <button className="flex items-stretch overflow-hidden font-medium transition-transform active:scale-95 w-full max-w-xs bg-white group-hover:bg-gray-100">
                                <span className="flex-1 flex items-center justify-center px-6 py-4 text-sm font-bold tracking-wider uppercase text-[#161513]">
                                    BOOK YOUR FREE CALL
                                </span>
                                <div className="flex aspect-square items-center justify-center w-14 bg-[#161513] text-white transition-colors">
                                    <Play className="h-4 w-4 fill-current" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Striped Area */}
                <div className="h-24 w-full border-t border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#2a2a2a_10px,#2a2a2a_11px)] opacity-30"></div>
            </div>
        </section>
    );
}
