"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
    {
        company: "TechNova",
        quote: "Apstic's AI agents handled 80% of our support tickets in the first week. It's like having an extra team working 24/7.",
        author: "ELENA RODRIGUEZ, CTO, TECHNOVA",
        stats: [
            { value: "80%", label: "Tickets Automated" },
            { value: "24/7", label: "Support Coverage" },
        ],
    },
    {
        company: "GreenLeaf",
        quote: "We automated our entire dispatch workflow. What used to take 4 hours of manual entry now happens instantly.",
        author: "MARCUS CHEN, OPS DIRECTOR, GREENLEAF",
        stats: [
            { value: "4hrs", label: "Saved Daily" },
            { value: "100%", label: "Data Accuracy" },
        ],
    },
    {
        company: "Elevate",
        quote: "The lead qualification bots are a game changer. Our sales team only talks to qualified prospects now.",
        author: "SARAH JOHNSON, VP SALES, ELEVATE",
        stats: [
            { value: "3x", label: "Conversion Rate" },
            { value: "50%", label: "Less Churn" },
        ],
    },
    {
        company: "FinStream",
        quote: "Complex financial reporting that took days is now generated in minutes with zero errors.",
        author: "DAVID PARK, CFO, FINSTREAM",
        stats: [
            { value: "99%", label: "Faster Reporting" },
            { value: "0", label: "Manual Errors" },
        ],
    },
];

const PATTERNS = [
    "radial-gradient(circle at 50% 50%, #FF4A00 0%, transparent 50%), radial-gradient(circle at 0% 0%, #161513 0%, transparent 50%), #fff",
    "linear-gradient(45deg, #FF4A00 25%, transparent 25%, transparent 75%, #FF4A00 75%, #FF4A00), linear-gradient(45deg, #FF4A00 25%, transparent 25%, transparent 75%, #FF4A00 75%, #FF4A00)",
    "repeating-linear-gradient(45deg, #161513 0, #161513 10px, transparent 10px, transparent 20px)",
    "conic-gradient(from 0deg, #FF4A00, #161513, #FF4A00)",
];

export function TestimonialsSection() {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <section className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">

                {/* Header Section */}
                <div className="py-16 px-6 lg:px-20">
                    <h2 className="text-3xl lg:text-5xl font-medium text-[#161513] dark:text-white mb-6 tracking-tight">
                        What Our Clients Say.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        Whether you're managing clients, properties, or customers we build automations that simplify your entire workflow.
                    </p>
                </div>

                {/* Testimonial Carousel Area */}
                <div className="border-t border-gray-300 dark:border-stone-700">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="w-full"
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto md:min-h-[400px]">

                                    {/* Left Column: Content */}
                                    <div className="flex flex-col border-r border-gray-300 dark:border-stone-700 h-full">
                                        {/* Quote Area */}
                                        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center bg-[#f5f4f0] dark:bg-[#251a1a]">
                                            <div className="flex items-center gap-2 mb-8">
                                                <div className="w-6 h-6 bg-[#161513] dark:bg-white mask mask-hexagon flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-white dark:bg-[#161513]" />
                                                </div>
                                                <span className="text-xl font-bold text-[#161513] dark:text-white">
                                                    {testimonial.company}
                                                </span>
                                            </div>


                                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.61 9.64V19.25H0V9.14C0 4.26 3.84 0.26 8.65 0V2.22C5.06 2.48 2.22 5.48 2.22 9.14C2.22 9.42 2.44 9.64 2.72 9.64H9.61Z" fill="currentColor" className="text-black dark:text-white" />
                                                <path d="M24.6 9.64V19.25H14.99V9.14C14.99 4.26 18.83 0.26 23.65 0V2.22C20.05 2.48 17.21 5.48 17.21 9.14C17.21 9.42 17.43 9.64 17.71 9.64H24.6Z" fill="currentColor" className="text-black dark:text-white" />
                                            </svg>

                                            <blockquote className="mt-6 text-2xl lg:text-4xl font-thin text-[#161513] dark:text-white leading-tight mb-8">
                                                {testimonial.quote}
                                            </blockquote>

                                            <div className="flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-[#FF4A00]"></span>
                                                <cite className="text-sm font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider not-italic">
                                                    {testimonial.author}
                                                </cite>
                                            </div>
                                        </div>

                                        {/* Stats Area */}
                                        <div className="grid grid-cols-2 border-t border-gray-300 dark:border-stone-700 ">
                                            {testimonial.stats.map((stat, i) => (
                                                <div key={i} className={cn(
                                                    "p-8 flex flex-col justify-center bg-[#fffefb] dark:bg-[#1f1515]",
                                                    i === 0 ? "border-r border-gray-300 dark:border-stone-700" : ""
                                                )}>
                                                    <span className="text-4xl lg:text-5xl font-medium text-[#FF4A00] mb-2 tracking-tight">
                                                        {stat.value}
                                                    </span>
                                                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                                        {stat.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column: Pattern */}
                                    <div className="relative h-[400px] lg:h-auto bg-gray-200 dark:bg-stone-800 overflow-hidden hidden md:block">
                                        <div
                                            className="absolute inset-0 w-full h-full opacity-80"
                                            style={{
                                                background: PATTERNS[index % PATTERNS.length],
                                                backgroundSize: index % 2 === 0 ? '100% 100%' : '20px 20px'
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-end border-t border-gray-300 dark:border-stone-700">
                    <div className="flex">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-16 h-16 flex items-center justify-center bg-[#FF4A00] hover:bg-[#ff5e1a] text-white transition-colors border-r border-white/20"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-16 h-16 flex items-center justify-center bg-[#FF4A00] hover:bg-[#ff5e1a] text-white transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
