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

const COLOR_TYPES = ["orange", "blue", "yellow", "black", "white"];

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

function Cube({ type, currentColor }: { type: string; currentColor: string }) {
  if (type === "dotted") {
    return (
      <div className="w-12 h-12 relative opacity-100">
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L38 10V30L20 40L2 30V10L20 0Z" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gray-400 dark:text-gray-600" />
          <path d="M20 0V20L38 10M20 20L2 10M20 20V40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-gray-400 dark:text-gray-600" />
        </svg>
      </div>
    );
  }

  const color = currentColor === "orange" ? "#FF4A00" : currentColor === "blue" ? "#3B82F6" : currentColor === "yellow" ? "#F59E0B" : currentColor === "black" ? "#161513" : "#FFFFFF";
  const isDark = currentColor === "black";

  return (
    <motion.div
      className="w-12 h-12 relative"
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M20 0L38 10V30L20 40L2 30V10L20 0Z"
          fill={color}
          className={isDark ? "dark:fill-white" : ""}
          animate={{ fill: color }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <path d="M20 0V20L38 10M20 20L2 10M20 20V40" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    </motion.div>
  );
}


export function Hero() {
  // Initialize cube colors from GRID_CONFIG
  const [cubeColors, setCubeColors] = useState<string[]>(
    GRID_CONFIG.map(item => item.type)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Find all indices of colored (non-dotted, non-text) cubes
      const coloredIndices: number[] = [];
      GRID_CONFIG.forEach((item, index) => {
        if (item.type !== "dotted" && !item.type.startsWith("text")) {
          coloredIndices.push(index);
        }
      });

      // Pick a random colored cube from the grid
      if (coloredIndices.length > 0) {
        const randomIndex = coloredIndices[Math.floor(Math.random() * coloredIndices.length)];

        // Get a random color different from the current one
        const currentColor = cubeColors[randomIndex];
        const availableColors = COLOR_TYPES.filter(c => c !== currentColor);
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];

        // Update only that cube's color
        setCubeColors(prev => {
          const newColors = [...prev];
          newColors[randomIndex] = randomColor;
          return newColors;
        });
      }
    }, 800 + Math.random() * 700); // Random interval between 800-1500ms

    return () => clearInterval(interval);
  }, [cubeColors]);

  return (
    <section className="w-full border-b border-gray-300 dark:border-stone-700">
      <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700 flex flex-col lg:flex-row min-h-[600px]">

        {/* Left Content */}
        <div className="flex-1 py-10 px-6 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-stone-700">
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
        <div className="flex-1 flex items-center justify-center p-8 lg:p-10 relative overflow-hidden">
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
                  <Cube type={item.type} currentColor={cubeColors[i]} />
                </div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
