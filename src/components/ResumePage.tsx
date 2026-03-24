"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Independent",
    period: "2022 — Present",
    bullets: [
      "Designed and shipped production-grade web applications for clients across fintech, e-commerce, and SaaS verticals.",
      "Built the Subscription Tracker (subtracker.sbs) — a real-time monitoring dashboard with Next.js, TypeScript, and PostgreSQL.",
      "Architected Node.js REST APIs and GraphQL services handling high-concurrency workloads.",
      "Integrated Supabase authentication and real-time features with Row-Level Security policies.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Contract Projects",
    period: "2021 — 2022",
    bullets: [
      "Delivered pixel-perfect, responsive UIs using React and Tailwind CSS from Figma designs.",
      "Implemented complex animations with Framer Motion and Three.js / WebGL for interactive 3D experiences.",
      "Optimised Core Web Vitals scores (LCP, CLS, FID) to achieve Lighthouse scores of 95+.",
    ],
  },
];

const projects = [
  {
    name: "Subscription Tracker",
    url: "https://www.subtracker.sbs",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "Supabase"],
    description:
      "A real-time subscription monitoring dashboard with analytics charts, multi-currency support, and automated renewal alerts. Live at subtracker.sbs.",
  },
  {
    name: "Web3 DEX Platform",
    url: "#",
    stack: ["Solidity", "Ethers.js", "React", "Node.js"],
    description:
      "Decentralised exchange supporting token swaps, liquidity pools, and real-time yield tracking across EVM-compatible chains.",
  },
  {
    name: "E-Commerce Backend",
    url: "#",
    stack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    description:
      "Scalable microservices architecture handling thousands of concurrent transactions, with Redis caching and automated CI/CD pipelines.",
  },
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
  Backend: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
  DevOps: ["Docker", "AWS", "Vercel", "Nginx", "CI/CD", "Linux"],
  Web3: ["Solidity", "Ethers.js", "Hardhat", "IPFS", "Smart Contracts"],
};

const education = [
  {
    degree: "Self-Taught Full-Stack Engineering",
    institution: "Online Curriculum (freeCodeCamp, The Odin Project, Udemy, MDN)",
    period: "2020 — Present",
    detail: "Continuous learning covering data structures, system design, and modern web technologies.",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen" style={{ background: "#131318", color: "#e4e1e9" }}>
      {/* ── TOP BAR ── */}
      <nav
        className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{
          background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(204,0,0,0.12)",
        }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-red-400"
          style={{ color: "#a3a3a3", fontFamily: "var(--font-mono)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_back</span>
          Back to Portfolio
        </Link>
        <span className="text-2xl font-black tracking-tighter text-red-600 select-none">IT.</span>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors"
          style={{
            background: "rgba(204,0,0,0.15)",
            border: "1px solid rgba(204,0,0,0.3)",
            color: "#fca5a5",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>download</span>
          Print / PDF
        </motion.button>
      </nav>

      {/* ── PAGE BODY ── */}
      <main className="pt-24 pb-24 px-6 md:px-10 max-w-5xl mx-auto overflow-x-hidden">

        {/* ── HEADER ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
          >
            Curriculum Vitae
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Sasuke
            <span className="text-red-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6" style={{ color: "#c9c5d0" }}>
            Full-Stack Developer
          </p>
          {/* Contact strip */}
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
            {[
              { icon: "mail", label: "collinstheegod@gmail.com", href: "mailto:collinstheegod@gmail.com" },
              { icon: "call", label: "08136634819", href: "tel:08136634819" },
              { icon: "alternate_email", label: "@SASUKEFWWEB3", href: "https://twitter.com/SASUKEFWWEB3" },
              { icon: "language", label: "subtracker.sbs", href: "https://www.subtracker.sbs" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm transition-colors hover:text-red-400"
                style={{ color: "#737373", fontFamily: "var(--font-mono)" }}
              >
                <span className="material-symbols-outlined text-red-600" style={{ fontSize: "16px" }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── DIVIDER ── */}
        <div className="h-px mb-16" style={{ background: "linear-gradient(90deg, #cc0000 0%, transparent 100%)" }} />

        {/* ── EXPERIENCE ── */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.3em] mb-10 flex items-center gap-4"
            style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
          >
            Work Experience
            <span className="flex-1 h-px" style={{ background: "rgba(204,0,0,0.2)" }} />
          </motion.h2>

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div 
                key={job.role} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-mono)", color: "#525252" }}>
                    {job.period}
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "#737373" }}>{job.company}</p>
                </div>
                <div>
                  <h3 className="text-lg font-black mb-4 text-red-400">{job.role}</h3>
                  <ul className="space-y-3">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#c9c5d0" }}>
                        <span className="w-1 h-1 mt-2 rounded-full flex-shrink-0 bg-red-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.3em] mb-10 flex items-center gap-4"
            style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
          >
            Projects
            <span className="flex-1 h-px" style={{ background: "rgba(204,0,0,0.2)" }} />
          </motion.h2>

          <div className="space-y-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="p-6 md:p-8 rounded-2xl relative overflow-hidden group"
                style={{ background: "#1b1b20", border: "1px solid rgba(255,255,255,0.04)", borderLeft: "3px solid #cc0000" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-black group-hover:text-red-400 transition-colors">{p.name}</h3>
                  {p.url !== "#" && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors hover:text-red-300"
                      style={{ color: "#ef4444", fontFamily: "var(--font-mono)" }}
                    >
                      Live <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>open_in_new</span>
                    </a>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#737373" }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: "#0e0e13",
                        border: "1px solid rgba(204,0,0,0.25)",
                        color: "#fca5a5",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS GRID ── */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.3em] mb-10 flex items-center gap-4"
            style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
          >
            Technical Skills
            <span className="flex-1 h-px" style={{ background: "rgba(204,0,0,0.2)" }} />
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className="p-6 rounded-2xl"
                style={{ background: "#1b1b20", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#ef4444", fontFamily: "var(--font-mono)" }}>
                  {category}
                </p>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm" style={{ color: "#c9c5d0", fontFamily: "var(--font-mono)" }}>
                      <span className="w-1 h-1 rounded-full bg-red-600 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.3em] mb-10 flex items-center gap-4"
            style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
          >
            Education
            <span className="flex-1 h-px" style={{ background: "rgba(204,0,0,0.2)" }} />
          </motion.h2>

          {education.map((ed, i) => (
            <motion.div 
              key={ed.degree} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "#525252" }}>
                  {ed.period}
                </p>
              </div>
              <div>
                <h3 className="text-base font-black mb-1 text-red-400">{ed.degree}</h3>
                <p className="text-sm mb-2" style={{ color: "#737373" }}>{ed.institution}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#c9c5d0" }}>{ed.detail}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ── STATS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 p-8 rounded-2xl text-center"
          style={{ background: "#1b1b20", border: "1px solid rgba(204,0,0,0.15)" }}
        >
          {[
            { value: "4+", label: "Years of Experience" },
            { value: "3", label: "Shipped Projects" },
            { value: "100%", label: "Dedication" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-black text-red-600 mb-1">{value}</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#525252", fontFamily: "var(--font-mono)" }}>{label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── PRINT STYLES ── */}
        <style>{`
          @media print {
            nav { display: none !important; }
            body { background: #fff !important; color: #000 !important; }
            .text-red-600, .text-red-400 { color: #cc0000 !important; }
          }
        `}</style>
      </main>
    </div>
  );
}
