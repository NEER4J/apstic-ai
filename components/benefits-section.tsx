"use client";

import React from "react";
import { Zap } from "lucide-react";
import { HeroButton } from "@/components/hero-button";

const BENEFITS = [
    {
        title: "A clear job",
        description: "Each workflow starts with a specific trigger, outcome, and set of allowed actions.",
    },
    {
        title: "Approved sources",
        description: "AI uses information the business has chosen, with system permissions scoped to the task.",
    },
    {
        title: "Visible handoffs",
        description: "Teams can see what happened, what is waiting, and who owns the next step.",
    },
    {
        title: "Human review",
        description: "Messages, decisions, and sensitive updates can pause for a person to check them.",
    },
    {
        title: "Useful fallbacks",
        description: "If information is missing or a case falls outside the rules, route it to the team.",
    },
];

export function BenefitsSection() {
    return (
        <section className="w-full border-b border-stone-700 bg-[#161513]">
            <div className="max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-16 px-6 lg:px-20 border-b border-stone-700">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
                        What a Dependable Workflow Needs.
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 bg-stone-700 gap-[1px] border-b border-stone-700">
                    {BENEFITS.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#161513] p-8 lg:p-12 flex flex-col justify-center min-h-auto group hover:bg-[#1f1a1a] transition-colors"
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
                    <div className="bg-[#FF4A00] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <h3 className="text-3xl lg:text-4xl font-medium text-white mb-8 leading-tight">
                                Bring Us the Process That Keeps Getting Stuck.
                            </h3>

                            <HeroButton variant="white-dark" className="w-full max-w-s">
                                TALK THROUGH A WORKFLOW
                            </HeroButton>
                        </div>
                    </div>
                </div>

                {/* Bottom Striped Area */}
                <div className="h-24 w-full border-t border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#44403c_10px,#44403c_11px)] opacity-70"></div>
            </div>
        </section>
    );
}
