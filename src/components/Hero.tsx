"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-slate-50">
      
      {/* ======================= */}
      {/* TOP SECTION (Hero Main) */}
      {/* ======================= */}
      {/* ======================= */}
      <div className="relative min-h-[95vh] flex items-center pt-24 lg:pt-0">
        
        {/* ======================= */}
        {/* Background Layers Container (Fixed Stacking Context) */}
        {/* ======================= */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          
          {/* Dreamy Painted Background Image (Masterpiece Aesthetic) */}
          <div 
            className="absolute inset-0 w-full h-full opacity-40 lg:opacity-50" 
            style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'sepia(0.3) hue-rotate(-15deg) saturate(1.2)' }} 
          />
          {/* Reddish Warming Overlay */}
          <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply" />
          
          {/* Bottom Fade to blend with next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/70 to-slate-50" />

          {/* 1. The Massive Solid Circle Behind Profile (Right side) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[60vw] max-w-[800px] h-[60vw] max-h-[800px] bg-maroon/25 rounded-full blur-3xl" />
          
          {/* 2. Soft Dynamic Glows for Depth */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-maroon/25 rounded-full blur-[150px]" />
          
          {/* 3. The "Lingkaran Besar" (Giant Outline Circle) crossing the screen - REMOVED due to cutting the text */}
          
          {/* 4. A distinct geometric frame behind the image (Changed to match the square photo) */}
          <div className="absolute top-1/2 right-[5%] lg:right-[10%] -translate-y-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-maroon/20 to-red-600/10 rounded-[3rem] rotate-6 border-[10px] lg:border-[15px] border-white/50 shadow-2xl" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06]" 
            style={{ backgroundImage: 'radial-gradient(#8b0000 2px, transparent 2px)', backgroundSize: '40px 40px' }} 
          />

          {/* Floating Abstract Shapes */}
          <motion.div 
            animate={{ rotate: 360, y: [0, 20, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[15%] left-[10%] lg:left-[20%] w-16 h-16 bg-gradient-to-tr from-maroon/30 to-red-400/20 rounded-2xl rotate-45 backdrop-blur-md border border-white/80" 
          />
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 90, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[8%] w-32 h-32 border-[10px] border-maroon/20 rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] right-[15%] w-48 h-48 border-[2px] border-dashed border-maroon/30 rounded-full" 
          />
          
          {/* Tech Decor: Plus Signs (+) */}
          <div className="absolute top-[45%] left-[2%] opacity-40 text-maroon font-bold text-2xl hidden lg:block">+</div>
          <div className="absolute bottom-[35%] right-[5%] opacity-40 text-maroon font-bold text-2xl hidden lg:block">+</div>
          <div className="absolute top-[10%] right-[40%] opacity-30 text-maroon font-bold text-3xl hidden lg:block">+</div>
          
          {/* Tiny Glowing Orbs */}
          <motion.div animate={{ y: [0, 30, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444]" />
          <motion.div animate={{ y: [0, -40, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-maroon rounded-full shadow-[0_0_20px_#8b0000]" />
          <motion.div animate={{ x: [0, 20, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} className="absolute top-[60%] left-[45%] w-2 h-2 bg-slate-500 rounded-full" />
          
          {/* Tech Data Strings (Faded) */}
          <div className="absolute bottom-10 left-10 lg:left-20 opacity-[0.06] -rotate-90 origin-bottom-left font-mono text-5xl font-black text-maroon whitespace-nowrap">
            {"<CODE/> DESIGN. BUILD."}
          </div>
          <div className="absolute top-10 right-10 opacity-[0.03] font-serif text-[10rem] leading-none font-black text-slate-800">
            PORTFOLIO
          </div>
        </div>
        
        {/* Floating Skill Badges (Glassmorphism + Real Logos) */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-5, -5, -5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-[20%] left-4 lg:left-16 hidden sm:flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 z-20"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-8 h-8 drop-shadow-sm" />
          <span className="font-bold text-slate-700 tracking-wide">PHP</span>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [8, 8, 8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-10 lg:left-[35%] hidden sm:flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 z-20"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-7 h-7 drop-shadow-sm" />
          <span className="font-bold text-slate-700 tracking-wide">Figma</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-10, -10, -10] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[15%] right-10 lg:right-[40%] hidden xl:flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 z-20"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="w-8 h-8 drop-shadow-sm" />
          <span className="font-bold text-slate-700 tracking-wide">Laravel</span>
        </motion.div>

        {/* Python */}
        <motion.div animate={{ y: [0, 10, 0], rotate: [5, 5, 5] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} className="absolute top-[10%] left-[35%] hidden md:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8 drop-shadow-sm" />
        </motion.div>

        {/* VS Code */}
        <motion.div animate={{ y: [0, -15, 0], rotate: [12, 12, 12] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }} className="absolute bottom-[20%] right-[25%] hidden md:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-7 h-7 drop-shadow-sm" />
        </motion.div>

        {/* GitHub */}
        <motion.div animate={{ y: [0, 12, 0], rotate: [-8, -8, -8] }} transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }} className="absolute top-[60%] left-[8%] hidden lg:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8 drop-shadow-sm" />
        </motion.div>

        {/* Jupyter (IPYNB) */}
        <motion.div animate={{ y: [0, -8, 0], rotate: [15, 15, 15] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }} className="absolute top-[8%] right-[10%] hidden xl:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" className="w-7 h-7 drop-shadow-sm" />
        </motion.div>

        {/* Docker */}
        <motion.div animate={{ y: [0, 14, 0], rotate: [-5, -5, -5] }} transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 2.5 }} className="absolute bottom-[10%] left-[20%] hidden lg:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 drop-shadow-sm" />
        </motion.div>

        {/* MySQL */}
        <motion.div animate={{ y: [0, -10, 0], rotate: [10, 10, 10] }} transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.2 }} className="absolute top-[80%] right-[40%] hidden lg:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 drop-shadow-sm" />
        </motion.div>

        {/* JavaScript */}
        <motion.div animate={{ y: [0, 10, 0], rotate: [-15, -15, -15] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.3 }} className="absolute top-[40%] right-[4%] hidden xl:flex items-center justify-center p-3 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60 z-10">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7 drop-shadow-sm" />
        </motion.div>

        {/* Large Maroon Shape on Right (Refined) */}
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-[110%] bg-maroon/[0.04] lg:rounded-bl-[250px] -z-20 border-l border-b border-maroon/5 shadow-inner" />

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left — Text */}
            <div className="order-2 lg:order-1 text-center lg:text-left pt-10 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="text-sm font-bold text-maroon uppercase tracking-[0.15em]">
                  Welcome to my world
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-4"
              >
                Hi, I&apos;m <span className="text-maroon">Maurellio</span><br />
                <span className="text-2xl sm:text-4xl md:text-5xl text-foreground/80 mt-2 block">
                  A Data & ML Enthusiast
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 mt-6 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Undergraduate Information Systems Student at Telkom University. Chairman of MTO. 
                Passionate about Data & Machine Learning. Designing impactful digital solutions for the future. 
                I have experience in leading organizations and building data-driven projects.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#kontak"
                  className="inline-block px-8 py-4 bg-maroon text-white font-bold rounded-lg shadow-lg shadow-maroon/30 hover:bg-maroon-dark hover:-translate-y-1 transition-all duration-300"
                >
                  CONTACT ME
                </a>
                <a
                  href="https://drive.google.com/file/d/1xD2EkmV8_6opCKPPRd7nVA2oFA5aLbFq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-maroon font-bold rounded-lg shadow-lg border border-maroon/20 hover:border-maroon hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
                >
                  DOWNLOAD CV
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                
                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-2 sm:mt-0 sm:ml-2">
                  <a href="https://linkedin.com/in/maurellio" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-maroon hover:text-white transition-all duration-300 shadow-sm border border-slate-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://github.com/maurellio" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm border border-slate-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — Photo & Badges */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 relative flex justify-center lg:justify-end mt-10 lg:mt-0"
            >
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
                {/* Main Image Container */}
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10">
                  <img
                    src="/profile.jpg"
                    alt="Maurellio Christopher"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating Badge 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
                  className="absolute -left-6 lg:-left-12 top-1/4 bg-white rounded-xl p-3 shadow-xl flex items-center gap-3 border border-slate-100 z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center text-white font-bold">
                    Ai
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-none">AI/ML</p>
                    <p className="text-xs text-muted">Engineer</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 150 }}
                  className="absolute -right-6 lg:-right-8 bottom-1/4 bg-white rounded-xl p-3 shadow-xl flex items-center gap-3 border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-none">Chairman</p>
                    <p className="text-xs text-muted">MTO FRI</p>
                  </div>
                </motion.div>
                
                {/* Small Floating Pill 1: Data Analyst */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-4 right-4 sm:right-20 lg:right-24 bg-maroon text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl rotate-6 border border-maroon-dark z-20"
                >
                  Data Analyst
                </motion.div>

                {/* Small Floating Pill 2: Web Designer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="absolute -bottom-5 left-4 sm:left-12 lg:left-20 bg-slate-800 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl -rotate-6 border border-slate-700 z-20"
                >
                  Web Designer
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
