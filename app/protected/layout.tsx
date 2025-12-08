import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-[#161513]">
      <nav className="w-full border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-sm">
          <div className="flex items-center gap-6 font-semibold">
            <Link href="/" className="tracking-tight text-[#161513] text-2xl">
              Admin
            </Link>
            <div className="flex items-center gap-4 text-gray-600">
             
              <Link href="/protected/blogs" className="hover:text-[#161513] transition-colors">
                Blogs
              </Link>
              <Link href="/protected/contacts" className="hover:text-[#161513] transition-colors">
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </main>
  );
}
