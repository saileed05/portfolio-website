// page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, Download, Award, Code2, Cloud, Database, 
  Trophy, Users, BrainCircuit, BarChart3, Briefcase, Cpu, Mail, Sun, Moon, 
} from 'lucide-react';
import { useTheme } from './providers'; 

// 🚀 IMPORTS FOR REFACTORED COMPONENTS
import { ContactForm } from './components/contact-form'; 
import { 
  ProjectCaseStudy, 
  ExperienceItem, 
  SkillCategory, 
  CertBadge, 
  AchievementCard 
} from './components/portfolio-components'; 


export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  
  // FIX: Reduced Motion Hook
  const shouldReduceMotion = useReducedMotion();

  // ✨ WOW FIX: Re-introduced useScroll for Parallax effect
  const { scrollYProgress } = useScroll(); 
  
  // ✨ WOW FIX: Define parallax transform for the Hero H1
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -50]); 
  
  // FIX: Ensure hydration match by checking if mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid flicker

  // Define animation props based on reduced motion preference
  const blob1Animate = shouldReduceMotion 
    ? { opacity: 0.5 }
    : { scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.4, 0.6, 0.4] };
    
  // 🐛 FIX: Remove string 'ease: "easeInOut"' to resolve TypeScript error 2322. 
  // Use a duration and let Framer Motion handle default easing, or use a number array for cubic-bezier.
  const blob1Transition = { duration: 15, repeat: Infinity };
  
  const blob2Animate = shouldReduceMotion 
    ? { opacity: 0.4 }
    : { x: [0, 50, 0], y: [0, -50, 0] };
    
  // 🐛 FIX: Remove string 'ease: "easeInOut"' to resolve TypeScript error 2322.
  const blob2Transition = { duration: 20, repeat: Infinity };


  return (
    <div className="bg-[#F9F8F5] dark:bg-[#0F0F0F] min-h-screen text-[#1A1A1A] dark:text-[#E5E5E5] selection:bg-[#FFD1DC] selection:text-[#50222d] dark:selection:bg-purple-900 dark:selection:text-white overflow-hidden font-sans transition-colors duration-500">
      
      {/* BACKGROUND AURA (Reduced motion implemented) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={blob1Animate}
          transition={blob1Transition}
          className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] bg-gradient-to-r from-pink-300 via-orange-200 to-rose-200 dark:from-purple-600/40 dark:via-blue-600/30 dark:to-indigo-600/40 rounded-full blur-[100px] opacity-50 dark:opacity-60 transition-colors duration-500"
        />
        <motion.div 
          animate={blob2Animate}
          transition={blob2Transition}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-tr from-blue-100 via-rose-200 to-pink-100 dark:from-indigo-500/30 dark:via-purple-500/30 dark:to-pink-500/20 rounded-full blur-[120px] opacity-40 dark:opacity-50 transition-colors duration-500"
        />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center bg-[#F9F8F5]/80 dark:bg-[#0F0F0F]/80 backdrop-blur-sm border-b border-transparent dark:border-white/5 transition-colors duration-500">
        <span className="font-serif text-xl tracking-tight font-medium text-neutral-900 dark:text-neutral-100">Sailee Desai.</span>
        
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400">
            <a href="#work" className="hover:text-pink-600 dark:hover:text-purple-400 transition-colors">Work</a>
            <a href="#skills" className="hover:text-pink-600 dark:hover:text-purple-400 transition-colors">Skills</a>
            <a href="#about" className="hover:text-pink-600 dark:hover:text-purple-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-pink-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </div>
          
          {/* THEME TOGGLE */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/50 dark:bg-white/10 hover:bg-pink-100 dark:hover:bg-purple-900/50 transition-colors text-neutral-600 dark:text-neutral-300 border border-transparent hover:border-pink-200 dark:hover:border-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400 dark:focus-visible:ring-purple-400"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? <Moon size={18} className="text-neutral-600" /> : <Sun size={18} className="text-yellow-400" />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION (WOW Fix: Parallax Scroll) */}
      <header className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-20">
        <motion.div 
          style={{ y: yParallax }} // ✨ WOW FIX: Apply parallax transform here
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} // 🐛 FIX: Removed string "easeOut"
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6 text-sm text-neutral-500 dark:text-neutral-400 font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] text-neutral-900 dark:text-neutral-100 mb-8 transition-colors">
            Building intelligent <br />
            <span className="italic text-neutral-400 dark:text-neutral-500 font-light">systems</span> with <br />
            creative depth.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl font-light leading-relaxed mb-8">
            Full-Stack Developer & AI Engineer based in Mumbai. 
            Merging strict logic with aesthetic fluidity.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
             <div className="flex items-center gap-2">
                <Users size={16} className="text-pink-600 dark:text-purple-400" />
                <span>National Chess Player</span>
             </div>
             <div className="hidden md:block w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
             <span>B.Tech CS @ SNDT</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-20 flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600"
        >
          <div className="w-8 h-[1px] bg-neutral-400 dark:bg-neutral-600"></div> Scroll
        </motion.div>
      </header>

      <main>
        {/* WORK SECTION (WOW Fix: Staggered Reveal) */}
        <section id="work" aria-labelledby="work-heading" className="relative z-10 py-32 px-6 md:px-20">
          <div className="flex items-baseline justify-between mb-24 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <h2 id="work-heading" className="font-serif text-4xl text-neutral-800 dark:text-neutral-200">Selected Work</h2>
            <span className="text-sm font-mono text-neutral-400">01 — 02</span>
          </div>

          {/* ✨ WOW FIX: Wrapper for Staggered Animation */}
          <motion.div 
            className="space-y-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.2 } },
            }}
          >
            <ProjectCaseStudy 
              title="SmartCareer AI"
              category="GenAI Platform"
              description="Production-ready career readiness platform with ATS compatibility scoring, keyword optimization, and AI-powered mock interviews. Multi-format file processing (PDF/DOCX/TXT) with personalized feedback generation using Google Gemini 2.0 API."
              stack={["Python", "Streamlit", "Gemini 2.0", "NLP", "Cloud Deploy"]}
              link="https://ibm-edunet-smartcareer-ai-mbxuzbcqopwpbflrp2f9ss.streamlit.app"
              github="https://github.com/saileed05/ibm-edunet-smartcareer-ai"
              year="2025"
              imageSrc="/smartcareerAI.png"
            />

            <ProjectCaseStudy 
              title="CodeSense AI"
              category="EdTech Tool"
              description="Educational platform offering AI-powered code explanations at 4 expertise levels (ELI5 to Expert) for Python, JavaScript, Java, and C++. Features AST parsing, automated bug detection with AI fixes, and step-by-step visual execution tracking."
              stack={["FastAPI", "React", "AST Parsing", "Gemini API", "Vercel"]}
              link="https://codesense-ai-one.vercel.app"
              github="https://github.com/saileed05/codesense-ai"
              year="2025"
              imageSrc="/codesenseAI.png"
            />
          </motion.div>
        </section>

        {/* TECHNICAL SKILLS (Uses refactored SkillCategory with hover effect) */}
        <section id="skills" aria-labelledby="skills-heading" className="relative z-10 py-32 px-6 md:px-20 bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-colors">
          <div className="flex items-baseline justify-between mb-20">
            <h2 id="skills-heading" className="font-serif text-4xl md:text-5xl text-neutral-800 dark:text-neutral-200">Technical Arsenal</h2>
            <span className="text-sm font-mono text-neutral-400">Tools & Technologies</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <SkillCategory 
              icon={<Code2 size={20} />}
              title="Languages"
              skills={['Python', 'JavaScript', 'C++', 'SQL', 'HTML/CSS']}
            />
            <SkillCategory 
              icon={<Award size={20} />}
              title="Frameworks"
              skills={['React', 'FastAPI', 'Streamlit', 'Node.js']}
            />
            <SkillCategory 
              icon={<BrainCircuit size={20} />}
              title="AI & Cloud"
              skills={['Google Gemini API', 'NLP', 'Streamlit Cloud', 'Vercel']}
            />
            <SkillCategory 
              icon={<Database size={20} />}
              title="Databases & Tools"
              skills={['PostgreSQL', 'MySQL', 'Git', 'VS Code', ]}
            />
          </div>
        </section>

        {/* EXPERIENCE (Uses refactored ExperienceItem) */}
        <section id="about" aria-labelledby="about-heading" className="relative z-10 py-32 px-6 md:px-20">
          <div className="flex items-baseline justify-between mb-20">
            <h2 id="about-heading" className="font-serif text-4xl md:text-5xl text-neutral-800 dark:text-neutral-200">Experience</h2>
            <span className="text-sm font-mono text-neutral-400">Professional History</span>
          </div>
          <div className="w-full">
            <ExperienceItem 
              role="AI & Cloud Intern" 
              company="IBM SkillsBuild" 
              date="SEP 2025 — OCT 2025"
              desc="Engineered full-stack AI solutions, integrating Google Gemini 2.0 API for intelligent data processing. Developed SmartCareer AI with resume analysis engine, ATS scoring, and mock interview system. Deployed on Streamlit Cloud with multi-format file processing capabilities."
              skills={["Generative AI", "Cloud Architecture", "Python", "API Integration", "NLP"]}
            />
            <ExperienceItem 
              role="PR & Outreach Head" 
              company="ACM-W Student Chapter, SNDT" 
              date="2024 — 2025"
              desc="Spearheaded strategic outreach campaigns that increased event participation by 30%. Managed team of volunteers and coordinated with industry speakers for technical workshops. Led marketing initiatives for chapter's flagship events."
              skills={["Leadership", "Public Relations", "Event Management", "Strategy", "Team Building"]}
            />
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS (Uses refactored CertBadge) */}
        <section aria-labelledby="edu-heading" className="relative z-10 py-24 px-6 md:px-20 bg-neutral-50 dark:bg-[#151515] border-y border-neutral-200 dark:border-white/10 transition-colors">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h3 id="edu-heading" className="font-serif text-3xl mb-8 text-neutral-800 dark:text-neutral-200 flex items-center gap-3">
                Education
              </h3>
              <div className="space-y-8">
                <div className="relative border-l-2 border-pink-300 dark:border-purple-500 pl-6 py-1">
                  <h4 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200">B.Tech in Computer Science</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1 font-light">Usha Mittal Institute of Technology, SNDT University</p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className="px-3 py-1 bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 rounded-full font-medium text-neutral-600 dark:text-neutral-300">CGPA: 7.95/10</span>
                    <span className="text-neutral-400">Expected 2027</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 tracking-widest uppercase">Minor in Embedded Systems</p>
                </div>
                <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 py-1">
                  <h4 className="font-medium text-lg text-neutral-700 dark:text-neutral-300">12th Grade • Science (PCM)</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-500 mt-1">Jiten Mody Junior College</p>
                  <p className="text-xs text-neutral-400 mt-2">2021 — 2023</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl mb-8 text-neutral-800 dark:text-neutral-200">Certifications</h3>
              <div className="grid gap-4">
                <CertBadge icon={<Briefcase size={18} />} title="McKinsey.org Forward Program" subtitle="Problem-Solving • Communication • Digital Toolkit" />
                <CertBadge icon={<Cloud size={18} />} title="Google Cloud Arcade Facilitator" subtitle="97 Points • Compute, Storage, API Gateway" />
                <CertBadge icon={<BrainCircuit size={18} />} title="IBM: Fundamentals of AI" subtitle="Professional Skills Certification" />
                <CertBadge icon={<BarChart3 size={18} />} title="Deloitte: Data Analytics" subtitle="Job Simulation Certificate" />
                <CertBadge icon={<Briefcase size={18} />} title="JPMorgan Chase" subtitle="Software Engineering Virtual Experience" />
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS (Uses refactored AchievementCard) */}
        <section aria-labelledby="highlights-heading" className="relative z-10 py-32 px-6 md:px-20">
          <div className="flex flex-col items-center mb-16">
             <h2 id="highlights-heading" className="font-serif text-4xl md:text-5xl text-neutral-800 dark:text-neutral-200 mb-4">Highlights</h2>
             <div className="w-12 h-1 bg-pink-300 dark:bg-purple-500"></div>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <AchievementCard 
              icon={<Trophy size={32} className="text-amber-500" />} 
              title="3rd Prize" 
              description="Innovative Business Plan" 
              detail="IIC, ICT Mumbai" 
            />
            <AchievementCard 
              icon={<Users size={32} className="text-blue-500 dark:text-blue-400" />} 
              title="National Player" 
              description="University Chess Team" 
              detail="State & National Levels" 
            />
            <AchievementCard 
              icon={<Cpu size={32} className="text-purple-500 dark:text-purple-400" />} 
              title="Top Performer" 
              description="Google Cloud Arcade" 
              detail="97 Points Achieved" 
            />
          </div>
        </section>
      </main>

      {/* FOOTER & CONTACT (Uses new ContactForm) */}
      <footer id="contact" className="relative z-10 py-24 px-6 md:px-20 bg-[#F9F8F5] dark:bg-[#0F0F0F] transition-colors">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="relative bg-white dark:bg-[#1A1A1A] rounded-sm shadow-xl overflow-hidden w-full md:min-h-[600px] border border-neutral-200 dark:border-white/10"
          >
            {/* Texture */}
            <div 
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] mix-blend-multiply dark:mix-blend-overlay pointer-events-none"
              style={{ 
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,.03) 3px)'
              }}
            ></div>
            
            {/* Postcard Border Line */}
            <div className="absolute inset-4 border-2 border-neutral-100 dark:border-white/5 pointer-events-none"></div>

            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Side: Contact Form */}
              <div className="relative p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-200 dark:border-white/10">
                <h3 className="font-serif text-4xl md:text-5xl mb-4 font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
                  Let's create <br />
                  <span className="italic text-pink-600 dark:text-purple-400">timeless</span> work.
                </h3>
                
                {/* Replaced old form with new component */}
                <ContactForm />

              </div>

              {/* Right Side: Address & Stamp */}
              <div className="relative p-8 md:p-12 flex flex-col justify-between bg-neutral-50/30 dark:bg-black/20">
                
                {/* The "Stamp" */}
                <div className="absolute top-8 right-8 w-24 h-28 bg-white dark:bg-[#252525] border border-neutral-200 dark:border-white/10 shadow-sm p-2 rotate-3 items-center justify-center hidden md:flex">
                   <div className="w-full h-full border border-dashed border-neutral-300 dark:border-neutral-600 flex flex-col items-center justify-center gap-1">
                      <Mail size={20} className="text-pink-300 dark:text-purple-400" />
                      <span className="text-[8px] uppercase tracking-widest text-neutral-400">Air Mail</span>
                   </div>
                </div>

                <div className="mt-auto space-y-6">
                  <div className="space-y-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    <p className="uppercase tracking-widest text-neutral-300 dark:text-neutral-600 mb-2">Recipient</p>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium text-sm">Sailee Desai</p>
                    <p>Mumbai, Maharashtra</p>
                    <p>India, 400001</p>
                  </div>

                  <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-3">
                    <a href="mailto:desaisailee0@gmail.com" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                      <Mail size={14} /> desaisailee0@gmail.com
                    </a>
                    
                    <a 
                      href="/Sailee_Desai_Resume.pdf" 
                      download
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
                    >
                      <Download size={14} /> Download Resume
                    </a>

                    <div className="flex gap-4 mt-2">
                       <a href="https://linkedin.com/in/sailee-desai" className="text-neutral-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                       </a>
                       <a href="https://github.com/saileed05" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="mt-12 text-center">
             <p className="font-serif text-neutral-800 dark:text-neutral-200 text-lg mb-2">Sailee Desai</p>
             <p className="text-xs text-neutral-400">© 2025. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}