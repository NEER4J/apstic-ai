import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, DM_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://apstic.com");

const description = "Apstic designs and builds AI-enabled workflows that connect the tools your team already uses—with clear human review and a focus on dependable operations.";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "AI Workflows Built Around Your Business | Apstic",
    template: "%s | Apstic",
  },
  description,
  keywords: [
    "AI workflow automation",
    "business process automation",
    "AI integrations",
    "CRM automation",
    "document processing",
    "Apstic",
  ],
  openGraph: {
    type: "website",
    siteName: "Apstic",
    title: "AI Workflows Built Around Your Business | Apstic",
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Apstic — AI workflows built around your business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflows Built Around Your Business | Apstic",
    description,
    images: ["/og-image.jpg"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${geistSans.className} ${dmMono.variable} ${instrumentSans.variable} min-h-screen bg-[#f8f6f1] antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (document.querySelector('script[src*="jibberlab"][data-agent-id="6354b7ad-fe28-41a5-8b1b-e82dd56b08cb"]')) {
                  return;
                }
                var script = document.createElement('script');
                script.src = 'https://cdn.jibberlab.com/widget.js';
                script.setAttribute('data-agent-id', '6354b7ad-fe28-41a5-8b1b-e82dd56b08cb');
                script.setAttribute('data-api-key', 'wk_Wp9TbS73DGfotIKCDvYQS5KfWtmauOvSEEtqRQn4Q4I');
                script.setAttribute('data-api-url', 'https://jibberlab.com');
                script.setAttribute('data-primary-color', '#FF4A00');
                script.setAttribute('data-position', 'bottom-right');
                script.async = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
