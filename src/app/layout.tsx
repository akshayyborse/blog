import type { Metadata } from "next";
import { Orbitron, Syne, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Futuristic Blog - Next-Gen Blogging Platform",
  description: "A cutting-edge blog platform with futuristic design, built with Next.js 14 and Tailwind CSS. Share your thoughts with the world.",
  keywords: ["blog", "futuristic", "nextjs", "tailwind", "markdown"],
  authors: [{ name: "Futuristic Blog Team" }],
  openGraph: {
    title: "Futuristic Blog - Next-Gen Blogging Platform",
    description: "A cutting-edge blog platform with futuristic design",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Futuristic Blog - Next-Gen Blogging Platform",
    description: "A cutting-edge blog platform with futuristic design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${syne.variable} ${rajdhani.variable} antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
