"use client";

import { motion } from "framer-motion";
import type { Blog } from "@/types";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  const date = new Date(blog.published_at).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className="group bg-card rounded-2xl p-6 sm:p-8 border border-card-border card-hover"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        {/* Date Badge */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-maroon/5 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-maroon leading-none">
              {new Date(blog.published_at).getDate()}
            </span>
            <span className="text-[10px] font-semibold text-maroon/60 uppercase">
              {new Date(blog.published_at).toLocaleDateString("id-ID", {
                month: "short",
              })}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 group-hover:text-maroon transition-colors duration-200">
            {blog.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-3">
            {blog.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-light">{date}</span>
            <span className="text-muted-light">·</span>
            <span className="text-xs font-medium text-maroon group-hover:underline cursor-pointer">
              Baca selengkapnya →
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
