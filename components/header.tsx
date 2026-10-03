"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "What we build", href: "/#services" },
  { name: "Our approach", href: "/#approach" },
  { name: "Insights", href: "/blogs" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const callUrl = "https://cal.com/neeraj-sharma/30min";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6e2da] bg-[#f8f6f1]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Apstic home" className="shrink-0">
          <Image src="/full-logo.svg" alt="Apstic" width={128} height={37} priority className="h-8 w-auto" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-[#625f58] transition hover:text-[#191816]">
              {item.name}
            </Link>
          ))}
          <a href={callUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#191816] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#393731]">
            Talk to Apstic <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dedbd3] bg-white text-[#191816] lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#e6e2da] bg-[#f8f6f1] px-5 pb-6 pt-3 sm:px-8 lg:hidden">
          <div className="mx-auto flex max-w-[1320px] flex-col">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="border-b border-[#e6e2da] py-4 text-base font-medium text-[#3f3c36]">
                {item.name}
              </Link>
            ))}
            <a href={callUrl} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4a00] px-5 py-4 text-sm font-semibold text-white">
              Talk to Apstic <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#77736a]">
              <a href="mailto:hello@apstic.com">hello@apstic.com</a>
              <a href="tel:+917470915225">+91 7470915225</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
