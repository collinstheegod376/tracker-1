"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full md:w-[600px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(204,0,0,0.5), transparent)",
        }}
      />

      <div className="flex flex-col items-center gap-4 md:gap-6 w-full px-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl md:text-2xl font-black tracking-tighter cursor-default select-none"
          style={{ color: "#cc0000" }}
        >
          IT.
        </motion.div>
        <p
          className="uppercase tracking-[0.2em] text-center"
          style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#525252" }}
        >
          © 2026 IT. All rights reserved.
        </p>
        <div className="flex gap-6 md:gap-8 mt-1">
          {["Privacy Policy", "Terms of Service"].map((link) => (
            <a
              key={link}
              href="#"
              className="uppercase tracking-widest transition-colors duration-300 hover:text-red-500"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#525252" }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
