"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";


const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = ["work", "skills", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "rgba(10,10,10,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(204,0,0,0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-10 py-4 md:py-5 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter text-red-600 cursor-pointer select-none"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          IT.
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className="relative font-semibold text-sm tracking-wide transition-colors duration-300"
                style={{ color: isActive ? "#ef4444" : "#a3a3a3" }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        <Link href="/resume">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors duration-300 shadow-lg shadow-red-900/30 cursor-pointer"
          >
            Resume
          </motion.span>
        </Link>
      </div>
    </motion.nav>
  );
}
