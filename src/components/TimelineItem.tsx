"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineItemProps {
  item: Experience;
  index: number;
  isLeft: boolean;
}

function getTypeIcon(type: string) {
  switch (type) {
    case "education":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      );
    case "achievement":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}

function getTypeBadge(type: string) {
  switch (type) {
    case "education":
      return { label: "Pendidikan", color: "bg-blue-50 text-blue-700" };
    case "work":
      return { label: "Pengalaman", color: "bg-maroon/5 text-maroon" };
    case "achievement":
      return { label: "Prestasi", color: "bg-amber-50 text-amber-700" };
    default:
      return { label: type, color: "bg-slate-100 text-slate-600" };
  }
}

export default function TimelineItem({ item, index, isLeft }: TimelineItemProps) {
  const badge = getTypeBadge(item.type);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <div className="bg-card rounded-2xl p-6 border border-card-border card-hover">
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${badge.color}`}
          >
            {getTypeIcon(item.type)}
            {badge.label}
          </span>

          <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
          <p className="text-maroon font-medium text-sm mb-2">
            {item.organization}
          </p>
          <p className="text-muted text-sm leading-relaxed">
            {item.description}
          </p>
          <p className="text-muted-light text-xs mt-3 font-medium">
            {item.date_start} — {item.date_end}
          </p>
        </div>
      </div>

      {/* Center Dot (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-maroon border-4 border-background z-10 top-8" />

      {/* Left Dot (Mobile) */}
      <div className="md:hidden absolute left-5 w-3 h-3 rounded-full bg-maroon border-[3px] border-background z-10 top-8 -translate-x-1/2" />

      {/* Spacer for opposite side on desktop */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}
