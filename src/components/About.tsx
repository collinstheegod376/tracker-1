"use client";
import { motion } from "framer-motion";

const paragraphs = [
  'I am a software engineer driven by the philosophy of "The Stoic Monolith" — building systems that are robust, silent, and incredibly powerful. With a deep background in full-stack development, I specialize in crafting digital experiences that bridge the gap between complex backend logic and intuitive, high-impact user interfaces.',
  "My approach to engineering is calculated and disciplined. Whether I'm optimizing a PostgreSQL query or refining a frontend interface, my goal is always to achieve the highest level of performance with the most elegant implementation. I believe that true professional development comes from the continuous pursuit of technical perfection.",
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-32 relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(204,0,0,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block"
            style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
          >
            03 // The Architect
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
            Professional Summary
          </h2>
        </motion.div>

        <div className="space-y-8 text-left">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "#c9c5d0" }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
