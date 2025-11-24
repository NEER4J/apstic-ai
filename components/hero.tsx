"use client";

import { HeroButton } from "@/components/hero-button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CUBE_COLORS = {
  orange: "#FF4A00",
  blue: "#3B82F6",
  yellow: "#F59E0B",
  black: "#161513",
  white: "#FFFFFF",
  dotted: "dotted",
};

const GRID_CONFIG = [
  // Row 1
  { type: "orange" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "blue" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" },
  // Row 2
  { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" },
  // Row 3
  { type: "dotted" }, { type: "dotted" }, { type: "yellow" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "black" },
  // Row 4 (Special row with text)
  { type: "dotted" }, { type: "text_start" }, { type: "text_mid" }, { type: "text_mid" }, { type: "text_mid" }, { type: "text_mid" }, { type: "text_end" }, { type: "dotted" },
  // Row 5
  { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" },
  // Row 6
  { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "orange" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" },
  // Row 7
  { type: "blue" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "dotted" }, { type: "black" }, { type: "dotted" },
];

function Cube({ type }: { type: string }) {
  if (type === "dotted") {
    return (
      <div className="w-12 h-12 relative opacity-100">
         <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L38 10V30L20 40L2 30V10L20 0Z" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gray-400 dark:text-gray-600"/>
            <path d="M20 0V20L38 10M20 20L2 10M20 20V40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gray-400 dark:text-gray-600"/>
         </svg>
      </div>
    );
  }

  const color = type === "orange" ? "#FF4A00" : type === "blue" ? "#3B82F6" : type === "yellow" ? "#F59E0B" : type === "black" ? "#161513" : "#FFFFFF";
  const isDark = type === "black";

  return (
      <div className="w-12 h-12 relative">
         <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L38 10V30L20 40L2 30V10L20 0Z" fill={color} className={isDark ? "dark:fill-white" : ""}/>
            <path d="M20 0V20L38 10M20 20L2 10M20 20V40" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
         </svg>
      </div>
  );
}


export function Hero() {
  return (
    <section className="w-full bg-white dark:bg-[#201515] border-b border-gray-300 dark:border-stone-700">
      <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700 flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Content */}
        <div className="flex-1 p-8 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-stone-700">
          <h1 className="text-5xl lg:text-[64px] leading-[1.1] font-medium text-[#161513] dark:text-white mb-8 font-sans tracking-tight">
            Automate Your<br />
            Business with AI
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 lg:mb-12 max-w-xl leading-relaxed">
            We design and build custom AI-powered automation systems that
            connect your tools, handle your repetitive work, and help your
            business run smoother, faster, and smarter.
          </p>

          <div className="mb-12">
            <HeroButton>
              Get Your Free Audit
            </HeroButton>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium max-w-md">
            -- No Templates. No Copy-Paste Workflows. 100% Custom-Built For
            How Your Business Actually Operates.
          </p>
        </div>

        {/* Right Content - Grid Animation */}
        <div className="flex-1 bg-[#FDFBF7] dark:bg-[#1a1111] flex items-center justify-center p-8 lg:p-10 relative overflow-hidden">
             <div className="grid grid-cols-8 gap-2 lg:gap-5 relative z-10">
                {GRID_CONFIG.map((item, i) => {
                    if (item.type.startsWith("text")) {
                        if (item.type === "text_start") {
                            return (
                                <div key={i} className="col-span-6 relative flex items-center">
                                    <div className="absolute inset-0 border border-[#FF4A00]/30 flex items-center justify-center px-0 text-center">
                                        <span className="font-mono text-sm text-[#161513] dark:text-white font-normal tracking-tight">
                                            Every System Connected. Every Process Automated.
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                         if (item.type === "text_mid" || item.type === "text_end") return null;
                    }
                    return (
                        <div key={i} className="flex items-center justify-center">
                            <Cube type={item.type} />
                        </div>
                    )
                })}
             </div>
        </div>

      </div>
    </section>
  );
}
