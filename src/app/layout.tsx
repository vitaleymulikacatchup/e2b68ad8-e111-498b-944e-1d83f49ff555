import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NovaFlow SaaS Platform — seamless Automation & Collaboration",
  description: "NovaFlow helps teams automate workflows, collaborate in real time, and scale operations with a clean, conversion-focused single-page SaaS landing.",
  keywords: ["saas", "landing page", "automation", "team collaboration", "single-page", "pricing", "free trial", "buy saas", "workflow automation"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NovaFlow SaaS Platform — seamless Automation & Collaboration",
    description: "NovaFlow helps teams automate workflows, collaborate in real time, and scale operations with a clean, conversion-focused single-page SaaS landing.",
    type: "website",
    url: "/",
    siteName: "NovaFlow",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "NovaFlow SaaS Platform",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaFlow SaaS Platform — seamless Automation & Collaboration",
    description: "NovaFlow helps teams automate workflows, collaborate in real time, and scale operations with a clean, conversion-focused single-page SaaS landing.",
    images: ["/images/logo.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}