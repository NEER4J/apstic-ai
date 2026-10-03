import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "What we build", href: "/#services" },
  { label: "Our approach", href: "/#approach" },
  { label: "Insights", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#dedbd3] bg-[#f8f6f1] text-[#191816]">
      <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 border-b border-[#dedbd3] pb-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <Link href="/" aria-label="Apstic home" className="inline-flex">
              <Image src="/full-logo.svg" alt="Apstic" width={128} height={37} className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#6f6b62]">
              AI-enabled workflows, integrations, and internal systems built around the way your business works.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm sm:grid-cols-3">
            {links.map((item) => (
              <Link key={item.label} href={item.href} className="text-[#625f58] transition hover:text-[#c84613]">{item.label}</Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-6 pt-7 text-sm text-[#77736a] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:hello@apstic.com" className="transition hover:text-[#191816]">hello@apstic.com</a>
            <a href="tel:+917470915225" className="transition hover:text-[#191816]">+91 7470915225</a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="https://www.linkedin.com/company/apstic" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-[#191816]">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a>
            <a href="https://www.instagram.com/apstic_ai/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-[#191816]">Instagram <ArrowUpRight className="h-3.5 w-3.5" /></a>
            <Link href="/privacy-policy" className="transition hover:text-[#191816]">Privacy</Link>
            <Link href="/terms-and-conditions" className="transition hover:text-[#191816]">Terms</Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-[#dedbd3] pt-5 text-xs text-[#969187] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Apstic. All rights reserved.</p>
          <p>Built around the work that matters.</p>
        </div>
      </div>
    </footer>
  );
}
