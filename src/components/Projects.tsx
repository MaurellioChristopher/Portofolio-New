"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { supabase } from "@/lib/supabase";
import type { Project } from "@/types";

const dummyProjects: Project[] = [
  {
    id: "1",
    title: "CariKerja",
    description:
      "Job portal platform integrated with a multiservice architecture. Designed for high scalability to connect top talents with various companies.",
    tech_stack: ["JavaScript", "PostgreSQL", "Docker", "Microservices"],
    image_url: "/projects/cari-kerja.png",
    live_url: null,
    github_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "MTO-Hub",
    description:
      "Centralized digital platform for MTO FRI Telkom University's organizational management, including member management, events, and internal information systems.",
    tech_stack: ["TSX", "Supabase", "Javascript", "HTML CSS"],
    image_url: "/projects/mto-hub-1.png",
    live_url: "https://mtohub2026.vercel.app/dashboard",
    github_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "California Housing AI",
    description:
      "Interactive AI application for analyzing and predicting house prices. This project was developed using Python and Jupyter Notebook (IPYNB), and deployed via Streamlit.",
    tech_stack: ["IPYNB", "Python", "Streamlit", "GitHub"],
    image_url: "/projects/california-housing.png",
    live_url: "https://kelompok5tubesdatmincaliforniahousingprice-fhtcahqywbwrzwx3xmz.streamlit.app/",
    github_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "AI-Driven Climate Mitigation: Strategic Pathway to Net Zero (SDG 13)",
    description:
      "This project adopts a rigorous analytical framework to identify the 'Decoupling Point'—the point where economic growth is no longer directly proportional to environmental degradation. Essential for global policy formulation under SDG 13 (Climate Action).",
    tech_stack: ["Python", "Data Analysis", "AI", "SDG 13"],
    image_url: "/projects/climate-mitigation.png",
    live_url: null,
    github_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Agrigems Trace",
    description:
      "Integrated agriculture supply chain traceability system. Connects farmers, factories, and agents to provide full transparency from farm to distribution utilizing interactive geospatial (GIS) maps.",
    tech_stack: ["TSX", "JavaScript", "Supabase", "GIS"],
    image_url: "/projects/agrigems-trace.png",
    live_url: "https://agrigems.vercel.app/",
    github_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: "6",
    title: "SkillExchange",
    description:
      "Skill exchange application for university students. Designed with interactive features like real-time chat, profile matching to find the right study partner, and a point system as a reward.",
    tech_stack: ["Laravel", "phpMyAdmin", "PHP"],
    image_url: "/projects/skill-exchange.png",
    live_url: null,
    github_url: null,
    created_at: new Date().toISOString(),
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(dummyProjects);

  useEffect(() => {
    async function fetchProjects() {
      if (!supabase) return;
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setProjects(data);
      }
    }
    fetchProjects();
  }, []);

  return (
    <SectionWrapper
      id="portofolio"
      className="py-20 sm:py-28 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-maroon uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
            Selected Works
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            A selection of projects I have worked on, blending creativity with modern technology.
          </p>
          <div className="w-16 h-1 bg-maroon/20 rounded-full mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
