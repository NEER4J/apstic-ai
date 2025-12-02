"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HeroButton } from "@/components/hero-button";

const TAGS_ROW_1 = [
    "Intelligence In Every Step",
    "Built On Smart Systems.",
    "Automation That Learns.",
    "AI Handles The Routine.",
    "Work Less. Achieve More.",
    "Machine Precision. Human Intent.",
    "Smart Systems, Simple Results.",
    "Logic That Scales.",
    "Focus Gained.",
    "Always On. Always Synced.",
    "Speed Without Chaos.",
    "Designed To Save Hours.",
    "Systems That Just Work.",
    "Crafted For The Future.",
    "Data That Thinks.",
    "Efficiency Redefined.",
];

const TAGS_ROW_2 = [
    "Work Less. Achieve More.",
    "Machine Precision. Human Intent.",
    "Smart Systems, Simple Results.",
    "Logic That Scales.",
    "Focus Gained.",
    "Always On. Always Synced.",
    "Speed Without Chaos.",
    "Designed To Save Hours.",
    "Always On. Always Synced.",
    "Speed Without Chaos.",
    "Designed To Save Hours.",
    "Systems That Just Work.",
    "Crafted For The Future.",
    "Data That Thinks.",
    "Efficiency Redefined.",
];

const TAGS_ROW_3 = [
    "Focus Gained.",
    "Always On. Always Synced.",
    "Speed Without Chaos.",
    "Designed To Save Hours.",
    "Systems That Just Work.",
    "Crafted For The Future.",
    "Data That Thinks.",
    "Efficiency Redefined.",
    "Intelligence In Every Step",
    "Built On Smart Systems.",
    "Automation That Learns.",
    "AI Handles The Routine.",
    "Work Less. Achieve More.",
    "Machine Precision. Human Intent.",
    "Smart Systems, Simple Results.",
    "Logic That Scales.",
    "Focus Gained.",
];

const TAGS_ROW_4 = [
    "Systems That Just Work.",
    "Crafted For The Future.",
    "Data That Thinks.",
    "Efficiency Redefined.",
    "Intelligence In Every Step",
    "Built On Smart Systems.",
    "Automation That Learns.",
    "AI Handles The Routine.",
    "Work Less. Achieve More.",
    "Machine Precision. Human Intent.",
    "Smart Systems, Simple Results.",
    "Logic That Scales.",
    "Focus Gained.",
    "Always On. Always Synced.",
    "Speed Without Chaos.",
    "Designed To Save Hours.",
    "Systems That Just Work.",
    "Crafted For The Future.",
    "Data That Thinks.",
    "Efficiency Redefined.",
];

export function CustomSystemsSection() {
    return (
        <section className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#fffefb]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700 flex flex-col lg:flex-row">

                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#fffefb]">
                    <h2 className="text-4xl lg:text-6xl font-medium text-[#161513] mb-8 tracking-tight leading-tight">
                        Custom Systems.<br />
                        Tailored Pricing
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-md leading-relaxed">
                        Every business operates differently — and so should your automation. We build solutions custom to your goals, scale, and stack.
                    </p>

                    <HeroButton variant="full-orange" className="w-full max-w-md">
                        LET'S BUILD YOUR AUTOMATION PLAN.
                    </HeroButton>

                </div>

                {/* Right Column: Marquee Visualization */}
                <div className="w-full lg:w-1/2 relative overflow-hidden bg-[#fffefb] dark:bg-[#fffefb] min-h-[400px] flex flex-col justify-center">
                    {/* Dot Pattern Background */}
                    <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#C3C0B4_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 flex flex-col gap-6">
                        <MarqueeRow items={TAGS_ROW_1} duration="240s" />
                        <MarqueeRow items={TAGS_ROW_2} duration="250s" reverse />
                        <MarqueeRow items={TAGS_ROW_3} duration="245s" />
                        <MarqueeRow items={TAGS_ROW_4} duration="255s" reverse />
                        <MarqueeRow items={TAGS_ROW_1} duration="240s" />
                        <MarqueeRow items={TAGS_ROW_2} duration="250s" reverse />
                        <MarqueeRow items={TAGS_ROW_3} duration="245s" />
                    </div>

                    {/* Gradient Overlays for smooth fade */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fffefb] to-transparent z-20"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fffefb] to-transparent z-20"></div>
                </div>

            </div>
        </section>
    );
}

function MarqueeRow({ items, reverse = false, duration = "40s" }: { items: string[], reverse?: boolean, duration?: string }) {
    return (
        <div className="flex overflow-hidden w-full">
            <div
                className={cn(
                    "flex gap-4 shrink-0 min-w-full items-center",
                    reverse ? "animate-marqueeReverse" : "animate-marquee"
                )}
                style={{ animationDuration: duration }}
            >
                {items.map((item, i) => (
                    <Tag key={i} text={item} />
                ))}
                {items.map((item, i) => (
                    <Tag key={`dup-${i}`} text={item} />
                ))}
                {items.map((item, i) => (
                    <Tag key={`dup2-${i}`} text={item} />
                ))}
            </div>
        </div>
    );
}

function Tag({ text }: { text: string }) {
    return (
        <div className="whitespace-nowrap px-6 py-3 border border-gray-200 bg-white text-[#161513] font-mono text-sm shadow-sm">
            {text}
        </div>
    );
}
