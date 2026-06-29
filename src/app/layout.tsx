import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrandArmor — Real-Time Amazon Brand Protection Command Center",
  description:
    "BrandArmor is a B2B SaaS cybersecurity command center for Amazon Sellers. Monitor your listings in real-time, detect counterfeit hijackers, and file instant DMCA takedown reports — all powered by AWS DynamoDB.",
  keywords: [
    "Amazon brand protection",
    "counterfeit detection",
    "DMCA takedown",
    "Amazon seller tools",
    "brand hijacking",
    "listing monitoring",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070a13] text-slate-100">
        {children}
      </body>
    </html>
  );
}

