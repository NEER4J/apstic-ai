"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";

const navItems = [
  { name: "Case Study", href: "/case-study" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Insights", href: "/insights" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
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
            <nav className="hidden  gap-4 items-center">
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
            <div className="flex items-center">
              <BookCallButton />
            </div>

          </div>

          {/* Mobile menu button */}
          <div className="hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF4A00]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#201515] border-t border-gray-100 dark:border-stone-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-6 px-5">
            <BookCallButton className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
