"use client";

import React from "react";
import { Box, PencilRuler, Workflow, Headset } from "lucide-react";

const STEPS = [
    {
        number: "01.",
        title: "Map the work",
        description: "We trace the trigger, the tools involved, the handoffs, and where work gets stuck.",
        icon: Box,
    },
    {
        number: "02.",
        title: "Choose a useful first step",
        description: (
            <ul className="list-none space-y-1">
                <li>1. the workflow to scope</li>
                <li>2. the systems and access it needs</li>
                <li>3. how the team will review success</li>
            </ul>
        ),
        icon: PencilRuler,
    },
    {
        number: "03.",
        title: "Build and test",
        description: "We connect the tools, check normal and edge cases, and make exceptions easy to review.",
        icon: Workflow,
    },
    {
        number: "04.",
        title: "Launch and improve",
        description: "We review how the workflow behaves in real operations and refine it as your process changes.",
        icon: Headset,
    },
];

export function StepsSection() {
    return (
        <section id="approach" className="w-full border-b border-stone-700 bg-[#161513]">
            <div className="max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-16 px-6 lg:px-20 border-b border-stone-700">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
                        From First Map to Working Flow
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-stone-700 border-b border-stone-700">
                    {STEPS.map((step, index) => (
                        <div key={index} className="p-8 lg:p-10 flex flex-col md:min-h-[320px] min-h-auto relative group hover:bg-[#1f1a1a] transition-colors">
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
                <div className="h-24 w-full border-t border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#44403c_10px,#44403c_11px)] opacity-70"></div>
            </div>
        </section>
    );
}
