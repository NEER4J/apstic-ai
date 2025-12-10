import Link from "next/link";
import { ArrowLeft, Home, Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col ">
        {/* Hero (mirrors Contact page spacing and borders) */}
        <section className="w-full border-b border-gray-300 dark:border-stone-700">
          <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
            <div className="py-16 px-6 lg:py-20 lg:px-12 ">
             
              <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#161513] mb-4">
                404 - Looks like you're lost.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                The page you’re looking for doesn’t exist. Let’s get you back to the right flow—whether that’s exploring what we build or starting a conversation with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Body (mirrors Contact grid and borders) */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">
              {/* Left: Guidance + CTAs */}
              <div className="p-6 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-stone-700 flex flex-col gap-10">
                <div className="space-y-6">
                  <p className="text-xl text-[#161513] dark:text-white leading-relaxed">
                    We couldn’t find that page, but here’s where most people go next.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-[#FF4A00] hover:bg-[#FF4A00]/90 text-white px-5 py-3"
                    >
                      <Link href="/">
                        <Home className="w-4 h-4" />
                        Back to home
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-300 dark:border-stone-700 bg-white/80 dark:bg-white/5 px-5 py-3"
                    >
                      <Link href="/contact">
                        <Mail className="w-4 h-4" />
                        Talk to us
                      </Link>
                    </Button>
                 
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-gray-300 dark:border-stone-700 bg-white/80 dark:bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400 mb-2 font-mono">
                      Quick links
                    </p>
                    <div className="space-y-2 text-gray-800 dark:text-gray-100">
                      <Link href="/careers" className="block hover:text-[#FF4A00] transition-colors">
                        Careers & openings
                      </Link>
                      <Link href="/blogs" className="block hover:text-[#FF4A00] transition-colors">
                        Latest automation ideas
                      </Link>
                      <Link href="/privacy-policy" className="block hover:text-[#FF4A00] transition-colors">
                        Privacy & terms
                      </Link>
                    </div>
                  </div>

                  <div className="border border-gray-300 dark:border-stone-700 bg-white/80 dark:bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400 mb-2 font-mono">
                      Need a hand?
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
                      We build custom AI workflows, integrations, and automations that fit how your team works.
                    </p>
                    <Link
                      href="https://cal.com/neeraj-sharma/30min"
                      className="inline-flex items-center gap-2 text-[#FF4A00] hover:text-[#c63a00] font-medium"
                    >
                      Start a project
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Navigator card (keeps brand accent, matches border treatment) */}
              <div className="flex flex-col justify-start">
                <div className="relative p-6 lg:p-20 overflow-hidden">
                  <div className="relative flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-[#FF4A00]" />
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Apstic Navigator</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">Live</span>
                  </div>

                  <div className="relative space-y-5">
                    <div className="border border-gray-200 dark:border-stone-700 bg-[#fffaf5] dark:bg-white/5 p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        What were you hoping to find?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Automation audit", "Integration help", "Book a demo", "Support"].map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border border-gray-200 dark:border-stone-700 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-white/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-stone-700 bg-white dark:bg-white/5 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Popular destinations</p>
                        <span className="text-[11px] uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">
                          Updated
                        </span>
                      </div>
                      <div className="space-y-3 text-gray-700 dark:text-gray-200">
                        <Link href="/blogs" className="flex items-center justify-between hover:text-[#FF4A00] transition-colors">
                          <span>Resources & blog</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                        <Link href="/https://cal.com/neeraj-sharma/30min" className="flex items-center justify-between hover:text-[#FF4A00] transition-colors">
                          <span>Speak with a specialist</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                        <Link href="/careers" className="flex items-center justify-between hover:text-[#FF4A00] transition-colors">
                          <span>Careers</span>
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

