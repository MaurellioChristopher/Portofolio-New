"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", category: "AI/ML" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Kepemimpinan Organisasi", category: "Soft Skill" },
  { name: "Next.js", category: "Web" },
  { name: "React", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "Supabase", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "Figma", category: "Design" },
];

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Web Development",
    desc: "Building modern web applications using Next.js, Laravel, and Supabase. Certified in Website Development Fundamentals by MySkill.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI & Machine Learning",
    desc: "Exploring Data Science and AI/ML with Python. Member of the EDM Laboratory focusing on data-centric research and advanced analytics.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Leadership",
    desc: "Chairman of MTO FRI, managing 34 members across 4 divisions. Experienced in strategic leadership, public speaking, and organizational management.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Member of Apple Dev SG, specializing in UI/UX design with Figma. Designing intuitive interfaces and user-centered interactive prototypes.",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="tentang"
      className="py-20 sm:py-28 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-maroon uppercase tracking-widest"
          >
            About Me
          </motion.span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
            Get to Know Me Closer
          </h2>
          <div className="w-16 h-1 bg-maroon/20 rounded-full mx-auto mt-5" />
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[400px]">
              {/* Nice Background Glows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-maroon to-red-400 rounded-3xl blur-2xl opacity-30 -z-10" />
              
              {/* Photo Container */}
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img
                  src="/profile-medal.jpg"
                  alt="Maurellio Christopher Yonathan - Silver Medal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-maroon/10 -z-20 rotate-12" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-dashed border-maroon/20 rounded-full -z-20" />
            </div>
          </motion.div>

          {/* Bio Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted leading-relaxed text-justify">
              I am Maurellio Christopher Yonathan, an Information Systems student at{" "}
              <span className="font-semibold text-foreground">
                Telkom University
              </span>{" "}
              with a strong passion for technology, design, and sustainability. I actively engage in high-impact leadership roles, currently serving as the{" "}
              <span className="font-semibold text-foreground">
                Chairman of the Managerial Trainer Organization (MTO)
              </span>
              , where I lead strategic initiatives and drive professional development within the organization.
            </p>
            <p className="text-lg text-muted leading-relaxed text-justify">
              I am also a member of{" "}
              <span className="font-semibold text-foreground">
                Apple Dev SG
              </span>
              , specializing in UI/UX design using Figma. While I have learned Xcode and the Swift programming language to understand Apple platform development, my expertise focuses on creating intuitive, user-centered designs and interactive prototypes that blend aesthetics with functionality. Within the academic and research sphere, I am a member of the{" "}
              <span className="font-semibold text-foreground">
                Enterprise Data Management (EDM) Laboratory
              </span>
              , where I focus on data-centric research and advanced analytics. Driven by a deep fascination with Data Science and Artificial Intelligence, I am currently focusing my professional growth toward becoming an{" "}
              <span className="font-semibold text-foreground">
                AI/ML Engineer
              </span>
              , leveraging data-driven insights to build intelligent, high-impact systems.
            </p>
            <p className="text-lg text-muted leading-relaxed text-justify">
              Beyond academics, I contribute to environmental initiatives such as VendoGreen and Eco Cycle Trade—innovative solutions for waste management and green living. With experience spanning IT leadership, UI/UX, data research, and sustainability projects, I am committed to leveraging technology and design to create impactful, future-ready solutions.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 + 0.1 }}
              className="bg-card rounded-2xl p-6 border border-card-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-maroon/5 flex items-center justify-center text-maroon mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="heading-serif text-xl sm:text-2xl text-center mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 + 0.1 }}
                className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-medium text-foreground/80 hover:border-maroon/30 hover:text-maroon transition-all duration-200 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
