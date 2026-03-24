"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="work"
      className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-32 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-14 md:mb-20"
      >
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
        >
          01 // Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Selected Project
        </h2>
      </motion.div>

      {/* Single Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <motion.div
          whileHover={{ y: -8, boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 40px rgba(204,0,0,0.1)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden"
          style={{
            background: "#1b1b20",
            borderLeft: "3px solid #cc0000",
            outline: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: "radial-gradient(circle, rgba(204,0,0,0.12) 0%, transparent 70%)" }}
          />

          {/* Image */}
          <div className="h-56 md:h-72 mb-8 rounded-xl overflow-hidden relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtClmC3gPvHUZ-GlkvgB8pKVSTMy8oPRtxajVNfj_-sxgzVO3LPEYFHzqPTw7V8_tdQ6k4iVplOALAHhnd2KcN9xja0IS-iGmgPDTow-ybdL_I8OhoJjJuHWEr5xiAtCFfYtBdbDO_NvYSvWByPFLH-aBMtmXEYTc5e5m69gPcFw5bHKLOPrgYy5lJwbbQRghzbtcqcit6dfgMfMKCW-sg0s1WmK-9WYV3JFfCJ0RWUC4jmb1sKaEjKVrjHu6di7MEO_RMfy1l04iX"
              alt="Subscription Tracker Dashboard"
              className="w-full h-full object-cover transition-all duration-1000"
              style={{ filter: "grayscale(80%)", transform: "scale(1.05)" }}
              onMouseEnter={(e) => {
                const img = e.currentTarget;
                img.style.filter = "grayscale(0%)";
                img.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget;
                img.style.filter = "grayscale(80%)";
                img.style.transform = "scale(1.05)";
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #1b1b20 0%, transparent 50%)" }}
            />
            {/* Live badge */}
            <div
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(204,0,0,0.2)", border: "1px solid rgba(204,0,0,0.4)", color: "#fca5a5" }}
            >
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Live
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 transition-colors duration-300 group-hover:text-red-400">
            Subscription Tracker
          </h3>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#737373" }}>
            A modern real-time subscription monitoring tool with rich dashboards, zero-latency
            metrics, and intuitive tracking for all your recurring payments.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["D3.js", "TypeScript", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "#0e0e13",
                  border: "1px solid rgba(204,0,0,0.25)",
                  color: "#fca5a5",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="https://www.subtracker.sbs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm"
            style={{ color: "#ef4444" }}
          >
            Explore Project
            <span
              className="material-symbols-outlined flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group-hover:bg-red-600 group-hover:text-white"
              style={{ background: "rgba(204,0,0,0.15)", fontSize: "18px" }}
            >
              arrow_forward
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
