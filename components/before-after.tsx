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
    const [dots, setDots] = useState<any[]>([]);

    useEffect(() => {
        const newDots = Array.from({ length: DOT_COUNT }).map((_, i) => ({
            id: i,
            yStart: Math.random() * 600 - 300, // Spread vertically
            // Use negative delay to simulate that the animation has already been running
            delay: -Math.random() * 1110, // Increased spread
            duration: 15 + Math.random() * 10, // Random duration between 15-25s (slower)
            label: BEFORE_LABELS[i % BEFORE_LABELS.length],
        }));
        setDots(newDots);
    }, []);

    return (
        <div className="w-full max-w-[1400px] mx-auto ">
            {/* Background Labels */}
            <div className="flex w-full border">
                <div className="text-2xl text-gray-900 border-r p-3 w-[50%] text-center">
                    BEFORE
                </div>
                <div className="text-2xl text-gray-900 p-3 w-[50%] text-center">
                    AFTER
                </div>
            </div>
            <div
                className="w-full h-[500px] bg-[#FDFBF7] relative overflow-hidden flex items-center justify-center border border-t-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, #E5E7EB 1px, transparent 1px)',
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
                            className="absolute left-0 top-1/2 flex items-center gap-3 bg-white border p-2"
                        >
                            <div className="w-4 h-4 rounded-full bg-orange-400/80 shadow-sm backdrop-blur-sm" />
                            <span className="text-sm text-orange-900/60 font-medium whitespace-nowrap bg-white/50 px-2 py-1 rounded-md">
                                {dot.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - Order (Structured Boxes) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full flex flex-col justify-center gap-0 bg-[#FDFBF7]">
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

                            <div className={`border-b border-l border-r flex items-center gap-4 min-w-[320px] max-w-[350px] ${index === 0 ? "border-t" : ""}`}>
                                <div className="h-14 w-14 bg-white border-r flex items-center justify-center text-orange-600 font-bold">
                                    {index + 1}
                                </div>
                                <span className="text-gray-800 text-base">
                                    {label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
