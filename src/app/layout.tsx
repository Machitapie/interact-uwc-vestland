import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const sans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Interact Club of UWC Vestland",
  description:
    "The first UWC Interact Club. A student-led branch of Rotary International at UWC Red Cross Nordic — chartered through Førde Rotary Club.",
  metadataBase: new URL("https://interact-uwc-vestland.vercel.app"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Interact Club of UWC Vestland",
    description: "Student-led, project-based, chartered with Førde Rotary Club.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <Header />
        <Reveal />
        <main className="flex-1 pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
