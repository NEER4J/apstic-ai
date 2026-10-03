import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] w-full border-b border-gray-300 bg-[#fffefb] text-[#161513]">
      <div className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-between border-x border-gray-300">
        <div className="px-6 py-16 lg:px-20 lg:py-24">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-gray-500">APSTIC / 404</p>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">This page is out of the flow.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">The address may have changed or the page may no longer be here. Head back to Apstic or tell us what you were looking for.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="inline-flex items-center justify-center gap-3 border-2 border-[#FF4A00] bg-[#FF4A00] px-6 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#FF4A00]/90"><ArrowLeft className="h-4 w-4" />Back to home</Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-gray-300 bg-white px-6 py-4 text-sm font-medium uppercase tracking-wider transition-colors hover:border-[#161513]">Contact Apstic <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-1 border-t border-gray-300 font-mono text-sm sm:grid-cols-3">
          <Link href="/#services" className="border-b border-gray-300 px-6 py-5 underline underline-offset-4 transition-colors hover:text-[#FF4A00] sm:border-b-0 sm:border-r">What we build</Link>
          <Link href="/blogs" className="border-b border-gray-300 px-6 py-5 underline underline-offset-4 transition-colors hover:text-[#FF4A00] sm:border-b-0 sm:border-r">Insights</Link>
          <Link href="/careers" className="px-6 py-5 underline underline-offset-4 transition-colors hover:text-[#FF4A00]">Careers</Link>
        </div>
      </div>
    </main>
  );
}
