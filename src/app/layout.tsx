import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    "Full-Stack Developer building scalable applications at the intersection of technical excellence and architectural power.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Sasuke"],
  openGraph: {
    title: "Sasuke | Full-Stack Developer",
    description: "Full-Stack Developer building scalable applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ fontFamily: "var(--font-inter)" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-full`}
        style={{ background: "#131318", color: "#e4e1e9" }}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
