import type { Metadata } from "next";
import ResumePage from "@/components/ResumePage";

export const metadata: Metadata = {
  title: "Resume — Sasuke | Full-Stack Developer",
  description:
    "Résumé of Sasuke — Full-Stack Developer with 4+ years of experience in React, Next.js, Node.js, PostgreSQL and more.",
};

export default function Resume() {
  return <ResumePage />;
}
