import React from "react";

const STATS = [
    {
        percentage: "01",
        label: "Give the workflow a clear job",
        description: "Define what starts it, what information it can use, and what a useful result looks like.",
    },
    {
        percentage: "02",
        label: "Make review part of the flow",
        description: "Let a person approve important messages, updates, or decisions before they move forward.",
    },
    {
        percentage: "03",
        label: "Check how it works in practice",
        description: "Test normal and edge cases, then use real operating feedback to decide what to improve.",
    },
];

export function ImpactSection() {
    return (
        <section className="w-full border-b border-stone-700 bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-10 px-6 lg:p-20 border-b border-stone-700">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
                        Give AI a job.<br />
                        Give your team control.
                    </h2>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-medium">
                        HOW WE APPROACH A WORKFLOW
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-700 border-b border-stone-700">
                    {STATS.map((stat, index) => (
                        <div key={index} className="p-8 lg:p-12 flex flex-col justify-center ">
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-6xl lg:text-7xl font-medium text-white tracking-tighter">
                                    {stat.percentage}
                                </span>
                                <span className="text-sm font-medium text-gray-400 mt-2">
                                    {stat.label}
                                </span>
                            </div>
                            <p className="text-gray-300 text-lg">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Striped Area (Visual element from image) */}
                <div className="h-24 w-full border-t border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#929599_10px,#929599_11px)] opacity-20"></div>
            </div>
        </section>
    );
}
