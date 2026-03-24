import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sasuke | Full-Stack Developer",
  description:
    "Full-Stack Developer building scalable applications with 4+ years of experience in React, Next.js, and Node.js.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Sasuke"],
  openGraph: {
    title: "Sasuke | Full-Stack Developer",
    description: "Full-Stack Developer building scalable applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ fontFamily: "var(--font-inter)" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-full overflow-x-hidden`}
        style={{ background: "#131318", color: "#e4e1e9" }}
      >
        {children}
      </body>
    </html>
  );
}
