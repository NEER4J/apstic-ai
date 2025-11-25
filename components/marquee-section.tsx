import React from "react";
import { cn } from "@/lib/utils";

const ROW_1 = [
  "Intelligence In Every Step",
  "Built On Smart Systems.",
  "Automation That Learns.",
  "AI Handles The Routine.",
  "Data That Thinks.",
  "Efficiency Redefined.",
  "Logic That Scales.",
];

const ROW_2 = [
  "Work Less. Achieve More.",
  "Machine Precision. Human Intent.",
  "Smart Systems, Simple Results.",
  "Learning From Every Interaction.",
  "Focus Gained.",
  "Always On. Always Synced.",
];

const ROW_3 = [
  "Speed Without Chaos.",
  "Designed To Save Hours.",
  "Systems That Just Work.",
  "Crafted For The Future.",
  "Intelligence In Every Step",
  "Built On Smart Systems.",
];

export function MarqueeSection() {
  return (
    <div className="w-full border-b border-gray-300 dark:border-stone-700 border-gray-300 dark:border-stone-700">
    <section className="relative w-full overflow-hidden py-4 lg:py-4 flex flex-col gap-2 select-none pointer-events-none max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
      <div className="absolute inset-0 z-1 h-full w-full bg-[radial-gradient(#d4d4d8_1.5px,transparent_1.5px)] [background-size:20px_20px] dark:bg-[radial-gradient(#404040_1.5px,transparent_1.5px)]"></div>
        <MarqueeRow items={ROW_1} duration="70s" />
        <MarqueeRow items={ROW_2} duration="80s" reverse />
        <MarqueeRow items={ROW_3} duration="60s" />
      </section>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, duration = "40s" }: { items: string[], reverse?: boolean, duration?: string }) {
  return (
    <div className="flex overflow-hidden w-full">
      <div 
        className={cn(
          "flex gap-4 shrink-0 min-w-full items-center py-2 pr-4",
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
       <div 
        className={cn(
          "flex gap-4 shrink-0 min-w-full items-center py-2 pr-4",
          reverse ? "animate-marqueeReverse" : "animate-marquee"
        )}
        style={{ animationDuration: duration }}
        aria-hidden="true"
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
    <div className="whitespace-nowrap px-4 py-2 border border-gray-200 dark:border-stone-800 bg-white dark:bg-[#161513] text-[#161513] dark:text-white font-mono text-sm bg-[#FFFBF5]">
      {text}
    </div>
  );
}

