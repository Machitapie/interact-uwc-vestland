import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const sans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Interact Club of UWC Vestland — Ideas into impact",
  description:
    "The first UWC Interact Club. A student-led branch of Rotary International at UWC Red Cross Nordic, turning ideas into meaningful, lasting initiatives in Vestland and beyond.",
  metadataBase: new URL("https://interact-uwc-vestland.vercel.app"),
  openGraph: {
    title: "Interact Club of UWC Vestland",
    description: "Student-led. Project-based. Connected to Rotary International and the world.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <Reveal />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
