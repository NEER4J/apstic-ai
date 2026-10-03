import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-[#f8f6f1]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12">
        <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#c84613]">404 · Page not found</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl">This page took a different route.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#625f58]">The address may have changed or the page may no longer be here. Head back to Apstic or tell us what you were looking for.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4a00] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#d83d00]"><ArrowLeft className="h-4 w-4" />Back to home</Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9c5bc] bg-white px-6 py-4 text-sm font-semibold transition hover:border-[#191816]">Contact Apstic <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dedbd3] pt-6 text-sm text-[#77736a]">
          <Link href="/#services" className="hover:text-[#c84613]">What we build</Link>
          <Link href="/blogs" className="hover:text-[#c84613]">Insights</Link>
          <Link href="/careers" className="hover:text-[#c84613]">Careers</Link>
        </div>
      </div>
    </main>
  );
}
