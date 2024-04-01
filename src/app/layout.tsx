import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "TimeZones",
  description: "Stay synchronized across the globe with multiple time zones.",
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gray-50",
          fontSans.variable
        )}
      >
        {children}

        {/* <script defer data-domain="time.ahmadrosid.com" src="https://plausible.kasihkode.com/js/script.js"></script> */}
      </body>
    </html>
  );
}
