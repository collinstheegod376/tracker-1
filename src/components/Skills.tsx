"use client";
import { motion } from "framer-motion";

const skills = [
  {
    icon: "terminal",
    title: "Frontend",
    items: ["React / Next.js", "Tailwind CSS", "TypeScript", "Three.js / WebGL", "Framer Motion"],
  },
  {
    icon: "database",
    title: "Backend",
    items: ["Node.js / Express", "PostgreSQL / Prisma", "MongoDB", "GraphQL / Apollo", "Redis Caching"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative"
      style={{ background: "#0e0e13" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(228,225,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(228,225,233,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            02 // Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl">
          {skills.map(({ icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 30px rgba(204,0,0,0.08)" }}
              className="group p-8 md:p-10 rounded-2xl relative overflow-hidden"
              style={{
                background: "#1b1b20",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {/* Hover border accent */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(204,0,0,0.25)" }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-8 transition-colors duration-300 group-hover:bg-red-700"
                style={{ background: "rgba(204,0,0,0.1)" }}
              >
                <span
                  className="material-symbols-outlined transition-colors duration-300"
                  style={{ fontSize: "28px", color: "#ef4444" }}
                >
                  {icon}
                </span>
              </div>

              <h4 className="font-black text-xl uppercase tracking-tight mb-6">{title}</h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                    style={{ fontFamily: "var(--font-mono)", color: "#737373" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#cc0000" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
