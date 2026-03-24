"use client";
import { motion } from "framer-motion";

const staggerDelay = [0, 0.12, 0.24, 0.36, 0.48];

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(204,0,0,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10">
        {/* Text Side */}
        <div className="space-y-8">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: staggerDelay[0], ease: "easeOut" }}
            className="space-y-3"
          >
            <span
              className="font-bold uppercase tracking-[0.35em] text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
            >
              System.Identity: SASUKE
            </span>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Hi, I&apos;m{" "}
              <span
                style={{
                  color: "#cc0000",
                  textShadow: "0 0 60px rgba(204,0,0,0.3)",
                }}
              >
                Sasuke
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold" style={{ color: "#c9c5d0" }}>
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: staggerDelay[1], ease: "easeOut" }}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: "#737373" }}
          >
            Building scalable applications with modern technology stacks. Focused on the
            intersection of technical excellence and architectural power.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: staggerDelay[2], ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl text-white font-bold uppercase tracking-widest text-sm text-center transition-all"
              style={{
                background: "linear-gradient(135deg, #cc0000 0%, #930000 100%)",
                boxShadow: "0 8px 32px rgba(204,0,0,0.35)",
              }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-center border transition-all duration-300"
              style={{
                borderColor: "rgba(94,63,58,0.5)",
                color: "#e4e1e9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(204,0,0,0.4)";
                e.currentTarget.style.background = "rgba(204,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(94,63,58,0.5)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: staggerDelay[3], ease: "easeOut" }}
            className="flex gap-8 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "15+", label: "Projects" },
              { value: "100%", label: "Dedication" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-black text-red-600">{value}</p>
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#737373" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="hidden md:block relative h-[520px] lg:h-[600px]"
        >
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden animate-float"
            style={{
              background: "#1b1b20",
              border: "1px solid rgba(204,0,0,0.15)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(204,0,0,0.03)",
            }}
          >
            {/* Dot grid background */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #cc0000 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Hero image */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2_l3U0sj1zeIROIpu8URe1D0Q9qJRU2gyuaoEXzaEgBxGuj5IBjjY0MRYVWno4zbDiUOxFH-eTNKRJdEzWtTQQ_BHjK2K6vezAjgHzxJ0D8nwuIDXS7NvOnrGFHkoV2nhhdB6jGLwnbuHN5l0JPktmO2DAjrETxwLt0RLJcvLsoHF8n3oCRIxvv7lo4IZZ52xwj4N-yjt5ow65FfQEU8tVs6UsdjdfFSDduSosUi8amqm_dbUD9u5ZpGO1AFxIRtIh0h5DuYGOYCI"
              alt="Geometric abstract art"
              className="w-full h-full object-cover"
              style={{ mixBlendMode: "overlay", filter: "grayscale(60%)", transform: "scale(1.05)" }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #131318 0%, transparent 40%, transparent 60%, #131318 100%)",
              }}
            />
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-80 h-80"
              style={{
                marginTop: "-160px",
                marginLeft: "-160px",
                border: "1px solid rgba(204,0,0,0.2)",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-56 h-56"
              style={{
                marginTop: "-112px",
                marginLeft: "-112px",
                border: "1px solid rgba(204,0,0,0.35)",
                transform: "rotate(45deg)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
