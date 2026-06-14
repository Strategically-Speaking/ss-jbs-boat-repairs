import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/layout/SkipLink";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JB's Boatworks — Alabama's Trusted Boat Repair Shop",
    template: "%s | JB's Boatworks",
  },
  description:
    "Fast, honest boat repair across Alabama. Motor repair, electrical, fiberglass, and more. Founded by a boat lover who knows the water.",
  openGraph: {
    siteName: "JB's Boatworks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jbs-boatworks.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JB's Boatworks — Alabama's Trusted Boat Repair Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://jbs-boatworks.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
