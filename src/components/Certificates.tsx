"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Silver Medalist - Business Plan",
    issuer: "Edutalk Fair National Competition",
    date: "2026",
    image: "/certificates/cert-8.png", 
    description: "Silver medalist in the National Business Plan Competition organized by Edutalk Fair.",
  },
  {
    id: 9,
    title: "Data Entry & Research Intern",
    issuer: "Ivosights",
    date: "2026",
    image: "/certificates/cert-9.png",
    description: "Completed an internship program as a Data Entry & Research Intern, focusing on data management and strategic research.",
  },
  {
    id: 2,
    title: "Website Development Fundamental",
    issuer: "MySkill",
    date: "2025",
    image: "/certificates/cert-7.png",
    description: "Comprehensive certification covering modern web development basics and industry best practices.",
  },
  {
    id: 3,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "2026",
    image: "/certificates/cert-1.png",
    description: "Basic competency certification in Python programming from Dicoding Academy.",
  },
  {
    id: 4,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2026",
    image: "/certificates/cert-5.png",
    description: "Fundamental understanding of Artificial Intelligence and its real-world applications.",
  },
  {
    id: 5,
    title: "Prompt Engineering for Developer",
    issuer: "Dicoding Indonesia",
    date: "2026",
    image: "/certificates/cert-4.png",
    description: "Expertise in crafting effective prompts for software development optimization using AI.",
  },
  {
    id: 6,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    date: "2026",
    image: "/certificates/cert-6.png",
    description: "Basic certification in financial literacy, financial planning, and asset management.",
  },
  {
    id: 7,
    title: "LKMM-TM (Tingkat Menengah)",
    issuer: "Universitas Telkom",
    date: "2026",
    image: "/certificates/cert-2.png",
    description: "Graduated from Intermediate Student Management Skills Training (organizational & strategic management).",
  },
  {
    id: 8,
    title: "LKMM-TD (Tingkat Dasar)",
    issuer: "Universitas Telkom",
    date: "2026",
    image: "/certificates/cert-3.png",
    description: "Graduated from Basic Student Management Skills Training (team management & early leadership).",
  }
];

export default function Certificates() {
  return (
    <SectionWrapper id="penghargaan" className="py-20 sm:py-28 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-maroon uppercase tracking-widest"
          >
            Achievements
          </motion.span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
            Certificates & Awards
          </h2>
          <div className="w-16 h-1 bg-maroon/20 rounded-full mx-auto mt-5" />
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-maroon/10 transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-maroon/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Date Badge */}
                <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-maroon shadow-sm">
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-1 group-hover:text-maroon transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mt-auto line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
