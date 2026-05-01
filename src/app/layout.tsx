import type { Metadata } from "next";
import { Open_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const sans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "Interact Club of UWC Vestland",
  description:
    "The first UWC Interact Club. A student-led branch of Rotary International at UWC Red Cross Nordic — chartered through Førde Rotary Club.",
  metadataBase: new URL("https://interact-uwc-vestland.vercel.app"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Interact Club of UWC Vestland",
    description: "Project-based. Student-led. Chartered with Førde Rotary Club.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-[var(--font-sans)] min-h-screen flex flex-col bg-paper text-ink">
        <Header />
        <Reveal />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
