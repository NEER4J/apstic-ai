"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, Phone, CircleDot } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";

const navItems = [
  { name: "Blogs", href: "/blogs" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white dark:bg-[#201515] border-b border-gray-300 dark:border-stone-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-300 dark:border-stone-700">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/full-logo.svg"
                alt="Apstic"
                width={128}
                height={37}
                className="h-8 w-auto dark:invert"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-5">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-base transition-colors font-mono"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden md:flex items-center">
              <BookCallButton />
            </div>

          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF4A00]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-[#201515] border-l border-gray-200 dark:border-stone-700 shadow-xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 dark:border-stone-700">
            <span className="text-2xl font-medium text-gray-900 dark:text-gray-100 pl-2">Apstic</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col h-[calc(100%-4rem)]">
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                <CircleDot className="h-4 w-4" /> <span className="underline">{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="px-5 pb-8 space-y-4 border-t border-gray-100 dark:border-stone-700 pt-4">
              <div className="space-y-3">
                <a
                  href="mailto:hello@apstic.com"
                  className="flex items-center gap-3 text-base text-gray-800 dark:text-gray-200 hover:text-[#FF4A00] dark:hover:text-[#FF4A00] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  hello@apstic.com
                </a>
                <a
                  href="tel:+917470915225"
                  className="flex items-center gap-3 text-base text-gray-800 dark:text-gray-200 hover:text-[#FF4A00] dark:hover:text-[#FF4A00] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +91 7470915225
                </a>
              </div>
              <BookCallButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
