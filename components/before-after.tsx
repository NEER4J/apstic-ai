"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BEFORE_LABELS = [
    "Manual Data Entry",
    "Human Errors",
    "Slow Processing",
    "Data Silos",
    "Inefficient Workflows",
    "Paperwork Overload",
    "Missed Deadlines",
    "High Operational Costs",
    "Repetitive Tasks",
    "Constant Bottlenecks",
    "Leads Falling Through the Cracks",
    "No Follow-Ups",
    "Unorganized Onboarding",
    "Disconnected Tools",
    "No Real-Time Visibility",
    "Delayed Responses",
    "Manually Chasing Payments",
    "Messy CRM Data",
    "Time-Consuming Admin Work",
    "Lack of Automation",
];


const AFTER_LABELS = [
    "Every workflow automated",
    "Instant lead responses with AI",
    "Smooth onboarding & ops",
    "Real-time dashboards",
    "Zero repetitive tasks",
    "40–60 hours saved monthly",
];

// Individual rotation for each line (in degrees)
const LINE_ROTATIONS = [
    -20,  // Line 0 (top)
    -20,  // Line 1
    -20,  // Line 2
    20, // Line 3
    20, // Line 4
    20, // Line 5 (bottom)
];

// Individual vertical angle for each line (Y-coordinate at midpoint)
const LINE_ANGLES = [
    -10,  // Line 0 (top) - higher = sharper upward angle
    -10,   // Line 1
    -10,  // Line 2
    62,  // Line 3
    62,  // Line 4
    62,  // Line 5 (bottom) - higher = sharper downward angle
];

// Individual width for each line (in pixels)
const LINE_WIDTHS = [
    200, // Line 0
    200, // Line 1
    200, // Line 2
    200, // Line 3
    200, // Line 4
    200, // Line 5
];

// Individual vertical position offset for each line (in pixels)
const LINE_POSITIONS = [
    35,  // Line 0 - positive values move down, negative move up
    35,  // Line 1
    35,  // Line 2
    -35,  // Line 3
    -35,  // Line 4
    -35,  // Line 5
];



const DOT_COUNT = 12; // Reduced for less frequency

export function BeforeAfter() {
    const [mounted, setMounted] = useState(false);
    const [dots, setDots] = useState<any[]>([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Only initialize dots after component is mounted on client
        if (!mounted) return;

        const newDots = Array.from({ length: DOT_COUNT }).map((_, i) => ({
            id: i,
            yStart: Math.random() * 600 - 300, // Spread vertically
            // Use negative delay to simulate that the animation has already been running
            delay: -Math.random() * 1110, // Increased spread
            duration: 15 + Math.random() * 10, // Random duration between 15-25s (slower)
            label: BEFORE_LABELS[i % BEFORE_LABELS.length],
        }));
        setDots(newDots);
    }, [mounted]);

    return (
        <section className="w-full border-b border-stone-700 bg-[#1f1515]">
            <div className="w-full max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-10 px-6 lg:p-20 border-b border-stone-700">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
                        From Chaos to Order.<br />
                        Powered by AI.
                    </h2>
                    <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
                        See how intelligent automation transforms scattered workflows into streamlined,
                        automated systems that just work.
                    </p>
                </div>

                {/* Background Labels */}
                <div className="flex w-full">
                    <div className="text-2xl text-stone-100 border-r border-stone-700 p-3 w-[50%] text-center">
                        BEFORE
                    </div>
                    <div className="text-2xl text-stone-100 p-3 w-[50%] text-center">
                        AFTER
                    </div>
                </div>

                {/* Desktop layout */}
                <div
                    className="hidden lg:flex w-full h-[500px] relative overflow-hidden items-center justify-center border-stone-700 border-t"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #c0a59a2f 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                >
                    {/* Center Logo */}
                    <div className="absolute z-20 flex items-center justify-center translate-x-1/5 w-44 h-44">
                        <div className="relative w-full h-full">
                            <Image
                                src="/logo.svg"
                                alt="Apstic Logo"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>

                    {/* Left Side - Chaos */}
                    <div className="absolute inset-0 pointer-events-none">
                        {dots.map((dot) => (
                            <motion.div
                                key={`dot-${dot.id}`}
                                initial={{
                                    x: -100,
                                    y: dot.yStart,
                                }}
                                animate={{
                                    x: ["-10vw", "45vw"], // Move towards center
                                    y: [dot.yStart, 0], // Converge to center
                                }}
                                transition={{
                                    duration: dot.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: dot.delay,
                                }}
                                className="absolute left-0 top-1/2 flex items-center gap-3 border border-stone-600 p-2 rounded bg-[#1f1515]"
                            >
                                <div className="w-4 h-4 rounded-full bg-orange-500 shadow-sm backdrop-blur-sm" />
                                <span className="text-sm text-white font-medium whitespace-nowrap px-2 py-1 rounded-md">
                                    {dot.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Order (Structured Boxes) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full flex flex-col justify-center gap-0 bg-[#1f1515]">
                        {AFTER_LABELS.map((label, index) => (
                            <div
                                key={`box-${index}`}
                                className="flex items-center gap-0"
                            >
                                {/* Sharp Angled Line converging to center point */}
                                <svg
                                    className="h-[50px] overflow-visible"
                                    viewBox="0 0 100 50"
                                    preserveAspectRatio="none"
                                    style={{
                                        transform: `translateY(${LINE_POSITIONS[index]}px) rotate(${LINE_ROTATIONS[index]}deg)`,
                                        transformOrigin: 'center',
                                        width: `${LINE_WIDTHS[index]}px`
                                    }}
                                >
                                    <path
                                        d={`M 0,25 L 50,${LINE_ANGLES[index]} L 100,25`} // Use individual angle for all lines
                                        stroke="#fdba74"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.6"
                                    />
                                </svg>

                                <div className={`border-b border-l border-r border-stone-700 flex items-center gap-4 min-w-[320px] max-w-[350px] bg-[#201515] ${index === 0 ? "border-t" : ""}`}>
                                    <div className="h-14 w-14 bg-[#201515] border-r border-stone-600 flex items-center justify-center text-orange-400 font-bold">
                                        {index + 1}
                                    </div>
                                    <span className="text-stone-200 text-base">
                                        {label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile layout */}
                <div
                    className="flex lg:hidden w-full h-[690px] relative overflow-hidden items-start justify-center border-stone-700 border-t"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #c0a59a2f 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                >
                    {/* Flowing tags - top to bottom */}
                    <div className="absolute inset-0 pointer-events-none">
                        {dots.map((dot) => (
                            <motion.div
                                key={`mobile-dot-${dot.id}`}
                                initial={{
                                    y: -200,
                                }}
                                animate={{
                                    y: ["-10vh", "110vh"], // Flow from top to bottom
                                }}
                                transition={{
                                    duration: dot.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: dot.delay,
                                }}
                                style={{
                                    left: `${20 + (dot.id % 60)}%`,
                                    top: 0,
                                }}
                                className="absolute flex items-center gap-2 border border-stone-600 px-2 py-1 rounded bg-[#1f1515]"
                            >
                                <div className="w-3 h-3 rounded-full bg-orange-500 shadow-sm backdrop-blur-sm" />
                                <span className="text-xs text-white font-medium whitespace-nowrap">
                                    {dot.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Icon in the middle */}
                    <div className="relative z-20 mt-[200px] flex flex-col items-center w-full">
                        <div className="w-[250px] h-[250px] mb-[-150px] z-10">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/logo.svg"
                                    alt="Apstic Logo"
                                    fill
                                    className="object-contain p-0"
                                />
                            </div>
                        </div>

                        {/* Points list - vertical */}
                        <div className="w-full flex flex-col z-20">
                            {AFTER_LABELS.map((label, index) => (
                                <div
                                    key={`mobile-box-${index}`}
                                    className="flex items-center gap-3 border border-b-0 border-stone-700 bg-[#201515] px-3 py-3"
                                >
                                    <div className="h-10 w-10 bg-[#201515] border border-stone-600 flex items-center justify-center text-orange-400 font-bold text-sm rounded">
                                        {index + 1}
                                    </div>
                                    <span className="text-stone-200 text-sm">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
