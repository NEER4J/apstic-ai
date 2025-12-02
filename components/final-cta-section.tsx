"use client";

import React from "react";
import Image from "next/image";
import { HeroButton } from "@/components/hero-button";

export function FinalCTASection() {
    return (
        <section className="w-full border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">

                {/* Hero CTA Area */}
                <div className="relative flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/forest-min.jpg"
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 lg:px-20 py-12 w-full text-left">
                        <h2 className="text-4xl lg:text-6xl font-medium text-white mb-6 tracking-tight text-left w-full">
                            Stop Doing It Manually.
                        </h2>
                        <p className="text-lg lg:text-xl text-white/90 mb-12 mx-auto text-left w-full">
                            Let AI and automation handle the repetitive work — so you can focus on growth.
                        </p>

                        <HeroButton className="">
                            BOOK YOUR FREE AUTOMATION AUDIT
                        </HeroButton>
                    </div>
                </div>

                {/* Bottom Striped Area */}
                <div className="h-20 w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#C3C0B4_10px,#C3C0B4_11px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#2a2a2a_10px,#2a2a2a_11px)] opacity-30" />
            </div>
        </section>
    );
}
