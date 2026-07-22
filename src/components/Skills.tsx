"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { 
  SiCisco, SiSwift, SiPython, SiJupyter, SiMysql, SiHtml5, SiPhp, SiLaravel, SiJavascript,
  SiFigma, SiPostman, SiGoogle, SiObsstudio, SiDiagramsdotnet, SiSap, SiWordpress, SiDocker, SiApachejmeter, SiSupabase 
} from "react-icons/si";
import { FaJava, FaVideo, FaCss3Alt, FaProjectDiagram, FaMicrosoft, FaServer, FaPalette, FaFilm, FaChartBar, FaVial } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const hardSkills = [
  { name: "C#", icon: TbBrandCSharp },
  { name: "Java", icon: FaJava },
  { name: "Cisco Packet Tracer", icon: SiCisco },
  { name: "Swift (dasar)", icon: SiSwift },
  { name: "Python", icon: SiPython },
  { name: "Python Notebook (IPYNB)", icon: SiJupyter },
  { name: "MySQL", icon: SiMysql },
  { name: "Cinematography", icon: FaVideo },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Javascript", icon: SiJavascript },
];

const tools = [
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Visual Paradigm", icon: FaProjectDiagram },
  { name: "Microsoft Office", icon: FaMicrosoft },
  { name: "Google Workspace", icon: SiGoogle },
  { name: "Laragon", icon: FaServer },
  { name: "Visual Studio Code", icon: VscVscode },
  { name: "Canva", icon: FaPalette },
  { name: "Capcut", icon: FaFilm },
  { name: "MySQL Workbench", icon: SiMysql },
  { name: "OBS Studio", icon: SiObsstudio },
  { name: "Draw.io", icon: SiDiagramsdotnet },
  { name: "SAP Logon", icon: SiSap },
  { name: "Power BI", icon: FaChartBar },
  { name: "WordPress", icon: SiWordpress },
  { name: "Docker", icon: SiDocker },
  { name: "Katalon", icon: FaVial },
  { name: "JMeter", icon: SiApachejmeter },
  { name: "Supabase", icon: SiSupabase },
];

const softSkills = [
  "Problem solving",
  "Komunikasi efektif",
  "Teamwork",
  "Time management",
  "Critical thinking",
  "Adaptif terhadap teknologi baru",
  "Kepemimpinan proyek kecil",
  "Public speaking"
];

export default function Skills() {
  return (
    <SectionWrapper id="keterampilan" className="py-20 sm:py-28 px-4 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-maroon uppercase tracking-widest"
          >
            Kemampuan
          </motion.span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
            Keterampilan & Tools
          </h2>
          <div className="w-16 h-1 bg-maroon/20 rounded-full mx-auto mt-5" />
        </div>

        <div className="space-y-16">
          {/* Hard Skills Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-maroon/10 text-maroon flex items-center justify-center text-sm">
                💻
              </span>
              Hard Skills / Teknis
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {hardSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-maroon/20 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-slate-400 group-hover:text-maroon transition-colors duration-300" />
                  <span className="text-sm font-medium text-slate-600 text-center group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-maroon/10 text-maroon flex items-center justify-center text-sm">
                🛠️
              </span>
              Tools & Software
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-maroon/20 transition-all duration-300 group"
                >
                  <tool.icon className="w-8 h-8 text-slate-400 group-hover:text-maroon transition-colors duration-300" />
                  <span className="text-sm font-medium text-slate-600 text-center group-hover:text-foreground transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-maroon/10 text-maroon flex items-center justify-center text-sm">
                🤝
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:text-maroon hover:border-maroon/30 hover:bg-maroon/5 transition-all shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
