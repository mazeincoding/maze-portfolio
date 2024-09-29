import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maze - Full-Stack Web Developer | Portfolio",
  description:
    "I'm a 15-year-old full-stack web developer with 3 years of experience. Explore my projects and skills in web development, problem-solving, and turning ideas into reality.",
  keywords:
    "full-stack developer, web development, portfolio, young programmer, React, Next.js, TypeScript",
  authors: [{ name: "Maze" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mazecoding.com",
    siteName: "Maze - Full-Stack Web Developer",
    images: [
      {
        url: "https://mazecoding.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maze - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mazewinther1",
    creator: "@mazewinther1",
    title: "Maze - Full-Stack Web Developer | Portfolio",
    description:
      "15-year-old full-stack web developer with 3 years of experience. Explore my projects and skills.",
    images: ["https://mazecoding.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mazecoding.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            {children}
            <Analytics />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
