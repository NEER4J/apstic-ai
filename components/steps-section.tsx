"use client";

import React from "react";
import { Box, PencilRuler, Workflow, Headset } from "lucide-react";

const STEPS = [
    {
        number: "01.",
        title: "Book Your Free Audit",
        description: "We analyse your current processes, tools, and bottlenecks.",
        icon: Box,
    },
    {
        number: "02.",
        title: "Get Your Custom Automation Plan",
        description: (
            <ul className="list-none space-y-1">
                <li>1. what to automate</li>
                <li>2. tools to connect</li>
                <li>3. expected ROI & efficiency gains</li>
            </ul>
        ),
        icon: PencilRuler,
    },
    {
        number: "03.",
        title: "We Build & Integrate Everything",
        description: "We implement your automations, set up systems, dashboards & workflows.",
        icon: Workflow,
    },
    {
        number: "04.",
        title: "Ongoing Optimization & Support",
        description: "We monitor, refine and expand your automations as your business grows.",
        icon: Headset,
    },
];

export function StepsSection() {
    return (
        <section className="w-full border-b border-stone-700 bg-[#161513]">
            <div className="max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-16 px-6 lg:px-20 border-b border-stone-700">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
                        Automate In 4 Simple Steps
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-stone-700 border-b border-stone-700">
                    {STEPS.map((step, index) => (
                        <div key={index} className="p-8 lg:p-10 flex flex-col min-h-[320px] relative group hover:bg-[#1f1a1a] transition-colors">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-4xl font-medium text-white tracking-tight">
                                    {step.number}
                                </span>
                                <step.icon className="w-8 h-8 text-[#FF4A00]" />
                            </div>

                            <h3 className="text-xl font-medium text-white mb-4 leading-snug min-h-[3.5rem]">
                                {step.title}
                            </h3>

                            <div className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Striped Area */}
                <div className="h-24 w-full border-t border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#2a2a2a_10px,#2a2a2a_11px)] opacity-30"></div>
            </div>
        </section>
    );
}
