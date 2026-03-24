"use client";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: "mail",
    label: "Email",
    value: "collinstheegod@gmail.com",
    href: "mailto:collinstheegod@gmail.com",
    truncate: true,
  },
  {
    icon: "alternate_email",
    label: "Twitter / X",
    value: "@SASUKEFWEB3",
    href: "https://twitter.com/SASUKEFWEB3",
    truncate: false,
  },
  {
    icon: "call",
    label: "Phone",
    value: "08136634819",
    href: "tel:08136634819",
    truncate: false,
  },
  {
    icon: "share",
    label: "LinkedIn",
    value: "SASUKEFWEB3",
    href: "#",
    truncate: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 max-w-7xl mx-auto py-20 md:py-28 mb-10 md:mb-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 md:mb-20"
      >
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
        >
          04 // Secure Channel
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Get In Touch</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {contacts.map(({ icon, label, value, href, truncate }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 24px rgba(204,0,0,0.1)" }}
            className="group p-8 md:p-10 rounded-2xl relative overflow-hidden block"
            style={{
              background: "#1b1b20",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {/* Hover gradient */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(204,0,0,0.06) 0%, transparent 60%)",
                border: "1px solid rgba(204,0,0,0.2)",
                borderRadius: "inherit",
                boxSizing: "border-box",
              }}
            />

            {/* Icon */}
            <motion.span
              whileHover={{ scale: 1.15 }}
              className="material-symbols-outlined mb-6 block transition-colors duration-300 group-hover:text-red-400"
              style={{ fontSize: "28px", color: "#ef4444" }}
            >
              {icon}
            </motion.span>

            <p
              className="font-bold uppercase tracking-widest mb-2 relative z-10"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#525252" }}
            >
              {label}
            </p>
            <p
              className={`font-bold text-sm md:text-base relative z-10 transition-colors duration-300 group-hover:text-white ${truncate ? "truncate" : ""}`}
              style={{ color: "#e4e1e9" }}
            >
              {value}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
