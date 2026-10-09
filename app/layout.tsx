import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/closing";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "OrangeDev — Software that makes work simpler",
    template: "%s · OrangeDev",
  },
  description:
    "From everyday business tools to complete operational systems, OrangeDev builds practical software that helps people stay organized, make better decisions, and get more done.",
  icons: { icon: "/logo/orange-arc.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-brand="off">
      <body className={`${inter.variable} font-sans`}>
        <SmoothScroll>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
