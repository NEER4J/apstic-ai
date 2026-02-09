"use client";

import React from "react";
import {
    MessageSquare,
    Mic,
    Layers,
    Shield,
    Globe,
    Zap,
    Cpu
} from "lucide-react";
import { HeroButton } from "@/components/hero-button";

const FEATURES = [
    {
        icon: MessageSquare,
        title: "Multi-Channel",
        description: "WhatsApp, Telegram, Slack, Discord, Signal, and more."
    },
    {
        icon: Shield,
        title: "Local-First Privacy",
        description: "Your data stays on your device. Complete control."
    },
    {
        icon: Layers,
        title: "Multi-Agent Routing",
        description: "Route tasks to specialized agents for maximum efficiency."
    },
    {
        icon: Globe,
        title: "Browser Control",
        description: "Automate web tasks with a dedicated, managed browser."
    },
    {
        icon: Zap,
        title: "Email & Calendar",
        description: "Draft emails, manage inboxes, and coordinate schedules automatically."
    },
    {
        icon: Cpu,
        title: "Scheduled Automations",
        description: "Run recurring workflows and cron jobs without manual intervention."
    }
];

export function OpenClawSection() {
    return (
        <section className="w-full border-b border-stone-700 bg-[#1f1515]">
            <div className="w-full max-w-[1440px] mx-auto border-x border-stone-700">

                {/* Header Section */}
                <div className="py-16 px-6 lg:px-20 border-b border-stone-700">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 bg-[#FF4A00]"></span>
                                <span className="text-sm font-medium text-[#FF4A00] uppercase tracking-wider">
                                    New Service Available
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
                                Own Your AI Infrastructure<br />
                                with OpenClaw.
                            </h2>
                        </div>
                        <div className="max-w-md">
                            <p className="text-lg text-stone-300 leading-relaxed">
                                We setup the ultimate personal AI assistant for you. Connects to all your apps, runs locally,
                                and automates your life across any OS or platform.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-b border-stone-700">

                    {/* Left Column: Pricing & CTA */}
                    <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-stone-700">
                        <div className="flex-1 p-8 lg:p-12 bg-[#161513] flex flex-col justify-center">
                            <div className="mb-2 text-stone-400 uppercase tracking-widest text-sm font-medium">Complete Setup Package</div>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-7xl font-medium text-white tracking-tighter">$99</span>
                                <span className="text-stone-500 font-medium">/ one-time</span>
                            </div>
                            <p className="text-stone-400 mb-8 max-w-md">
                                Includes full installation, configuration of all channels, local model setup, and a 1-hour walkthrough session.
                            </p>

                            <div className="w-full max-w-sm">
                                <HeroButton variant="full-orange" className="w-full">
                                    Get Started Now
                                </HeroButton>
                            </div>
                        </div>

                        {/* Integration Ticker / List */}
                        <div className="border-t border-stone-700 p-6 bg-[#1f1a1a]">
                            <div className="text-xs text-stone-500 uppercase tracking-wider mb-3 font-medium">Works with</div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-stone-300 font-medium">
                                {["WhatsApp", "Telegram", "Slack", "Discord", "Signal", "Teams", "iMessage", "Google Chat", "Matrix", "WebChat"].map((app, i) => (
                                    <span key={i} className="flex items-center gap-2">
                                        <Zap size={12} className="text-[#FF4A00]" />
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-stone-700 border-b border-stone-700 lg:border-b-0 lg:border-l lg:border-r-0">
                        {FEATURES.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 bg-[#1f1515] flex flex-col hover:bg-[#251e1e] transition-colors"
                            >
                                <feature.icon className="text-[#FF4A00] mb-4" size={24} />
                                <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Decorative Strip */}
                <div className="h-12 w-full border-t border-stone-700 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#292524_10px,#292524_11px)] opacity-30"></div>

            </div>
        </section>
    );
}
