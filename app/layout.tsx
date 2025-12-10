import type { Metadata } from "next";
import "./globals.css";
import LenisScroller from "@/components/LenisScroller";
// import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google"; // 👈 ADD THIS
import ScrollEffects from "@/components/ScrollEffects";

import BackToTopButton from "@/components/BackToTopButton";

// 👇 Configure the Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raj Sharma • Portfolio",
  description: "Animated portfolio built with Next.js, Framer Motion, and Lenis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-black text-white scroll-smooth`} // 👈 APPLY HERE
      >
        <LenisScroller>
          {/* <Navbar /> */}
          <ScrollEffects />
          <div>{children}</div>
          <BackToTopButton />
        </LenisScroller>
      </body>
    </html>
  );
}
