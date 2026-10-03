import Link from "next/link";

const footerLinks = [
  { label: "What we build", href: "/#services" },
  { label: "Our approach", href: "/#approach" },
  { label: "Insights", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-[#fffefb] text-[#161513]">
      <div className="mx-auto max-w-[1440px] border-x border-gray-300">
        <div className="grid gap-8 border-b border-gray-300 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-md">
            <Link href="/" className="inline-flex" aria-label="Apstic home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/full-logo.svg" alt="Apstic" className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              AI-enabled workflows and digital products built around the way your team works.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-mono sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="underline underline-offset-4 text-gray-600 transition-colors hover:text-[#FF4A00]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-6 border-b border-gray-300 p-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
            <a href="tel:+917470915225" className="underline underline-offset-4 transition-colors hover:text-[#FF4A00]">+91 7470915225</a>
            <a href="mailto:hello@apstic.com" className="underline underline-offset-4 transition-colors hover:text-[#FF4A00]">hello@apstic.com</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-mono text-gray-600">
            <a href="https://www.linkedin.com/company/apstic" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-[#FF4A00]">LinkedIn</a>
            <a href="https://www.instagram.com/apstic_ai/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-[#FF4A00]">Instagram</a>
            <Link href="/privacy-policy" className="underline underline-offset-4 transition-colors hover:text-[#FF4A00]">Privacy</Link>
            <Link href="/terms-and-conditions" className="underline underline-offset-4 transition-colors hover:text-[#FF4A00]">Terms</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 px-8 py-6 text-xs font-mono text-gray-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Apstic. All rights reserved.</p>
          <p>Built around the work that matters.</p>
        </div>
      </div>
    </footer>
  );
}
