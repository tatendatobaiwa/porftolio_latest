'use client';
// [CLIENT REASON] Entire portfolio page relies on coordinate-based scroll animations and Framer Motion interaction primitives.

import { motion } from 'motion/react';
import { Terminal, Rocket, Briefcase, GraduationCap, Award, MapPin, Mail } from 'lucide-react';

const projects = [
  {
    title: "Algorithmic LEO Mosaic Reconstruction",
    tag: "MSc Thesis",
    desc: "Designing a deterministic set-cover optimization algorithm to reconstruct country-scale, near-real-time satellite mosaics. Targeting a latency reduction from 72 hours to under 10 minutes.",
    tech: ["Python", "Orekit", "H3-py", "SGP4", "NumPy"],
    theme: "white"
  },
  {
    title: "Lung Cancer Classification",
    tag: "Deep Learning",
    desc: "Engineered a two-phase transfer-learning pipeline ensembling four pre-trained CNNs (DenseNet121, InceptionV3, ResNet50V2, MobileNetV2), achieving 99.57% accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "Grad-CAM", "LIME"],
    theme: "green"
  },
  {
    title: "Ablehearts Foundation",
    tag: "Full-Stack Web",
    desc: "Designed and launched the official website for a non-profit organization supporting underprivileged children in Botswana. Engineered with mobile-first and accessibility requirements.",
    tech: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
    theme: "alt"
  }
];

const experience = [
  {
    role: "Teaching Assistant — Computer Science",
    company: "BIUST, Palapye, Botswana",
    date: "Aug 2025 – Present",
    desc: "Guide students in Data Structures & Algorithms, C Programming, and Software Testing (Selenium). Emphasis on memory management, pointer arithmetic, and optimization heuristics."
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed, Francistown, Botswana",
    date: "Nov 2024 – Present",
    desc: "Design, build, and deploy responsive web applications. Manage full project lifecycle with modern JavaScript frameworks."
  },
  {
    role: "Software Engineering Intern",
    company: "Spectrum Analytics, Gaborone, Botswana",
    date: "May 2024 – Jul 2024",
    desc: "Contributed to robust ETL data pipelines and client-facing web infrastructure. Gained practical exposure to cloud infrastructure patterns and enterprise data-fabric design."
  }
];

const skills = [
  { category: "Languages", items: ["Python", "C", "Java", "JavaScript", "SQL"] },
  { category: "Frameworks/AI", items: ["TensorFlow", "Keras", "Selenium", "React"] },
  { category: "Space & Geometry", items: ["Astrodynamics", "Orekit", "SGP4", "H3 DGGS"] },
  { category: "Engineering", items: ["Algorithms", "Automated Testing", "Linux", "Git"] }
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen font-mono p-6 sm:p-12 lg:p-20 overflow-x-hidden selection:bg-[#00FF41] selection:text-black">
      {/* Interactive Scanline overlay for that retro feel */}
      <div className="scanline"></div>

      {/* Galaxy Background Blur Detail */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#2D0054] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#00FF41] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto space-y-24 relative z-10">
        
        {/* HEADER / HERO */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 pt-10"
        >
          <div className="inline-block bg-[#00FF41] text-black px-4 py-2 border-r-[8px] border-b-[8px] border-white mb-4">
             <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">Tatenda_Tobaiwa.sh</h1>
          </div>
          
          <h2 className="text-2xl sm:text-4xl text-white font-black italic uppercase leading-none mt-4 max-w-3xl">
            Software Engineer <span className="text-[#00FF41]">×</span> Computational Geometer
          </h2>
          
          <div className="flex flex-wrap gap-4 pt-4 text-[#00FF41]/80 text-sm font-bold">
            <span className="flex items-center gap-2"><MapPin size={18} className="text-white"/> Francistown, Botswana</span>
            <span className="flex items-center gap-2"><Mail size={18} className="text-white"/> tatenda.tobaiwa@gmail.com</span>
          </div>
        </motion.header>

        {/* TERMINAL / ABOUT */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="brutal-green p-6 sm:p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full flex items-center px-4 py-2 bg-[#00FF41]">
            <Terminal size={16} className="text-black mr-2" />
            <span className="text-black font-black text-xs uppercase tracking-widest">About_Me</span>
          </div>
          <div className="pt-8 space-y-4 text-base sm:text-lg text-[#00FF41]/90 leading-relaxed font-mono">
            <p className="text-white font-bold">&gt; EXECUTE query --target &quot;Tatenda&quot;</p>
            <p>
              I am a software engineer, C programmer, and computational geometer who finds genuine joy at the intersection of rigorous mathematics and real-world impact.
            </p>
            <p>
              My doctoral-track research asks a deceptively simple question: <strong className="text-white font-black uppercase">how do we reconstruct a complete, near-real-time view of the Earth from a swarm of small satellites in under ten minutes?</strong> The answer involves orbital mechanics, hexagonal spatial indexing, and deterministic set-cover optimization.
            </p>
            <p>
              Beyond research, I have built production web systems, coached students through pointers and recursive algorithms, and won two national hackathon championships. Driven by conviction that advanced technology can make a tangible difference in communities across southern Africa.
            </p>
            <span className="inline-block w-4 h-6 bg-[#00FF41] animate-pulse mt-2"></span>
          </div>
        </motion.section>

        {/* PROJECTS GRID */}
        <section className="space-y-12 z-20 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 border-b-[4px] border-white/20 pb-4"
          >
            <Rocket className="text-[#00FF41]" size={36} />
            <h3 className="text-4xl text-white font-black uppercase tracking-tighter">Key Missions</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={proj.theme === 'white' ? 'brutal-white p-6 sm:p-8 flex flex-col' : proj.theme === 'green' ? 'brutal-green p-6 sm:p-8 flex flex-col' : 'border-4 border-[#00FF41] bg-[#05050A] p-6 sm:p-8 flex flex-col'}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 ${proj.theme === 'white' ? 'bg-white text-black' : 'bg-[#00FF41] text-black'}`}>
                    {proj.tag}
                  </span>
                  <span className="text-[#00FF41] text-xs font-bold opacity-70">
                    #PROJECT-{idx + 1}
                  </span>
                </div>
                
                <h4 className={`text-3xl font-black uppercase tracking-tighter mb-4 ${proj.theme === 'white' ? 'text-white' : 'text-[#00FF41]'}`}>{proj.title}</h4>
                <p className={`text-sm mb-6 flex-grow ${proj.theme === 'white' ? 'text-white/80' : 'text-[#00FF41]/80'}`}>{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, i) => (
                    <span 
                      key={t} 
                      className={`text-xs px-2 py-1 font-bold ${i % 2 === 0 ? (proj.theme === 'white' ? 'bg-white text-black border border-white' : 'bg-[#00FF41] text-black border border-[#00FF41]') : (proj.theme === 'white' ? 'border border-white text-white' : 'border border-[#00FF41] text-[#00FF41]')}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button styled as per DESIGN HTML */}
                <div className="mt-8 flex">
                   <div className={`px-4 py-2 border-[2px] text-sm font-bold cursor-pointer transition-all ${proj.theme === 'white' ? 'border-white hover:bg-white hover:text-black text-white' : 'border-[#00FF41] hover:bg-[#00FF41] hover:text-black text-[#00FF41]'}`}>
                     VIEW_SOURCE
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section className="space-y-12 z-20 relative">
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 border-b-[4px] border-[#00FF41]/30 pb-4"
          >
            <Briefcase className="text-white" size={36} />
            <h3 className="text-4xl text-[#00FF41] font-black uppercase tracking-tighter">Trajectory</h3>
          </motion.div>

          <div className="space-y-8 pl-4 sm:pl-8 border-l-[4px] border-[#00FF41]/50 relative ml-[8px]">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-6"
              >
                <div className="absolute w-5 h-5 bg-[#00FF41] -left-[45px] sm:-left-[45px] top-1 border-[4px] border-[#05050A]"></div>
                <div className="mb-2">
                  <span className="bg-white text-black text-xs font-bold px-2 py-0.5 uppercase">{exp.date}</span>
                </div>
                <h4 className="text-2xl text-white font-black uppercase tracking-tighter mt-2">{exp.role}</h4>
                <p className="text-[#00FF41] text-sm font-bold mt-1 mb-3">{exp.company}</p>
                <p className="text-white/70 text-sm max-w-2xl leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-4 border-white p-6 sm:p-8 mt-12 bg-[#1A0033] relative overflow-hidden"
          >
            <div className="flex gap-4 items-center mb-8 border-b-[4px] border-white/20 pb-4">
              <GraduationCap className="text-[#00FF41]" size={32}/>
              <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Academic Modules</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 text-sm relative z-10">
              <div>
                <h5 className="font-black text-white mb-2 uppercase text-xl">MSc Computer Science</h5>
                <p className="text-[#00FF41] font-bold">BIUST • <span className="text-white">Aug 2025 - Present</span></p>
                <p className="text-white/80 mt-2">Algorithmic Reconstruction of Near-Real-Time Mosaics</p>
              </div>
              <div>
                <h5 className="font-black text-white mb-2 uppercase text-xl">BSc Software Engineering</h5>
                <p className="text-[#00FF41] font-bold">BIUST • <span className="text-white">May 2025</span></p>
                <p className="text-white/80 mt-2">Strong foundation spanning algorithms, systems programming, and ML</p>
              </div>
            </div>
            {/* Design detail */}
            <div className="absolute top-0 right-0 p-2 text-xs opacity-40 text-white font-bold">v2.0.4</div>
          </motion.div>
        </section>

        {/* SKILLS & AWARDS */}
        <section className="grid lg:grid-cols-12 gap-6 pt-8 z-20 relative">
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4 border-[4px] border-[#00FF41] p-6 bg-[#0A0A1F] shadow-[8px_8px_0px_#00FF41]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black mb-6 flex items-center text-white uppercase tracking-tighter">
              <span className="mr-2 text-[#00FF41]">[</span>SKILLS<span className="ml-2 text-[#00FF41]">]</span>
            </h2>
            <div className="space-y-6">
              {skills.map((skill, sIdx) => (
                <div key={skill.category}>
                  <h4 className="text-[#00FF41]/60 text-xs font-bold uppercase tracking-widest mb-3 border-b border-[#00FF41]/20 pb-1">{skill.category}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {skill.items.map((i, idx) => (
                      <div key={i} className={`${idx % 3 === 0 ? 'bg-[#00FF41] text-black border border-[#00FF41]' : (idx % 2 === 0 ? 'border border-[#00FF41] text-white' : 'border border-[#00FF41] text-white')} p-1 px-2 font-bold cursor-default transition-colors`}>
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 grid grid-rows-2 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <div className="border-[4px] border-white p-6 bg-[black] text-white flex flex-col justify-center shadow-[12px_12px_0px_#2D0054]">
                <div className="flex items-center gap-4 mb-6 border-b-[2px] border-[#00FF41]/30 pb-2">
                  <Award className="text-[#00FF41]" size={32} />
                  <h3 className="text-3xl text-white font-black uppercase tracking-tighter">Accolades</h3>
                </div>
                <div className="space-y-4 text-sm">
                  {[
                    { title: "1st Place — Huawei Innovation Challenge", tag: "National Champ 25/26" },
                    { title: "1st Place — Orange Digital Hackathon", tag: "National Champ" },
                    { title: "AfAS 2026", tag: "Conference Presenter" }
                  ].map(award => (
                    <div key={award.title} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/20 pb-2 gap-2">
                      <span className="font-bold uppercase">{award.title}</span>
                      <span className="text-black bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap">{award.tag}</span>
                    </div>
                  ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-[4px] border-[#00FF41] p-4 bg-[#05050A] relative flex flex-col justify-center items-center text-center">
                 <div className="flex gap-1 mb-4">
                  <div className="w-4 h-4 bg-[#00FF41]"></div>
                  <div className="w-4 h-4 bg-white"></div>
                  <div className="w-4 h-4 bg-[#2D0054]"></div>
                </div>
                <span className="text-xs uppercase opacity-70 font-bold mb-1 mt-2">Status</span>
                <span className="text-[#00FF41] font-black uppercase text-xl">Optimum</span>
              </div>
              <div className="border-[4px] border-white p-4 bg-[#2D0054] text-white flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-black">99.5</span>
                <span className="text-xs font-bold uppercase tracking-widest mt-2 text-[#00FF41]">Accuracy %</span>
              </div>
            </div>

          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="mt-8 flex flex-col sm:flex-row justify-between items-center z-10 border-t-[2px] border-[#00FF41] pt-6 pb-12">
          <div className="flex gap-6 text-sm mb-4 sm:mb-0">
            <span className="font-black uppercase hover:text-white cursor-pointer transition-colors border-b-2 border-transparent hover:border-white">LinkedIn</span>
            <span className="font-black uppercase hover:text-white cursor-pointer transition-colors border-b-2 border-transparent hover:border-white">CV.PDF</span>
          </div>
          <div className="text-xs font-bold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF41] animate-ping"></div>
            SECURE CONNECTION ESTABLISHED // PORT 8080
          </div>
        </footer>
      </div>
    </div>
  );
}
