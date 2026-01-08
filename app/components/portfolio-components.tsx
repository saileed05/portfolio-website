// components/portfolio-components.tsx

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import {
  ProjectCaseStudyProps,
  ExperienceItemProps,
  SkillCategoryProps,
  CertBadgeProps,
  AchievementCardProps,
} from './types';

// --- ProjectCaseStudy (Staggered Fade-In & Accessibility Fix) ---

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  title, category, description, stack, link, github, year, imageSrc
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    // Uses 'visible' variant defined in page.tsx for staggering
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.6 } },
      }}
      className="group grid md:grid-cols-12 gap-8 items-center"
    >
      {/* Accessibility Fix: Changed clickable div to a link tag */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="md:col-span-7 relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 aspect-[16/10] border border-neutral-200/60 dark:border-white/5 shadow-sm cursor-pointer block"
        aria-label={`View live project: ${title}`}
      >
        {imageSrc ? <Image src={imageSrc} alt={`${title} screenshot`} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" /> : <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" />}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-orange-400/10 dark:from-purple-500/20 dark:to-blue-500/20 mix-blend-multiply dark:mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </a>
      <div className="md:col-span-5 flex flex-col justify-center h-full py-2 pl-4">
        <span className="block text-xs font-mono text-neutral-400 mb-4 border-l-2 border-pink-200 dark:border-purple-800 pl-3 tracking-widest uppercase">{category} — {year}</span>
        <h3 className="font-serif text-3xl md:text-4xl mb-4 text-neutral-800 dark:text-neutral-100 group-hover:text-pink-900 dark:group-hover:text-purple-300 transition-colors">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-light">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech) => <span key={tech} className="px-3 py-1 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-full text-[10px] tracking-wider font-medium text-neutral-500 dark:text-neutral-400 uppercase">{tech}</span>)}
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 hover:text-pink-600 dark:hover:text-purple-400 transition-colors">
            View Live <ArrowUpRight size={14} />
          </a>
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
            Github
          </a>}
        </div>
      </div>
    </motion.div>
  );
};


// --- ExperienceItem (Typed) ---

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, date, desc, skills }) => (
  <div className="group relative border-t border-neutral-300 dark:border-neutral-800 py-12 md:grid md:grid-cols-12 gap-8 hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-500 px-4 md:px-0">
    <div className="md:col-span-4 flex flex-col justify-between">
      <h4 className="font-serif text-3xl text-neutral-800 dark:text-neutral-100 mb-2">{company}</h4>
      <span className="font-mono text-sm text-neutral-400 tracking-widest uppercase">{date}</span>
    </div>
    <div className="md:col-span-8 mt-4 md:mt-0">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200 group-hover:text-pink-700 dark:group-hover:text-purple-400 transition-colors">{role}</h3>
        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-pink-600 dark:text-purple-400" />
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 max-w-xl">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 text-xs rounded-full border border-neutral-200 dark:border-white/5">{skill}</span>)}
      </div>
    </div>
  </div>
);

// --- SkillCategory (WOW Fix: Hover Micro-Interaction & Typed) ---

export const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }} 
      
      // ✨ WOW FIX: Add subtle lift and shadow on hover
      whileHover={shouldReduceMotion ? {} : { 
        y: -5, 
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)',
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}

      // Updated className for the hover effect
      className="group p-6 rounded-xl bg-white dark:bg-black/10 border border-neutral-100 dark:border-white/5 cursor-default hover:border-pink-300/60 dark:hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6 text-neutral-400 group-hover:text-pink-400 dark:group-hover:text-purple-400 transition-colors">
        {icon}
        <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => <div key={skill} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-default border-l-2 border-transparent hover:border-pink-300 dark:hover:border-purple-400 pl-3">{skill}</div>)}
      </div>
    </motion.div>
  );
};

// --- CertBadge (Typed) ---

export const CertBadge: React.FC<CertBadgeProps> = ({ icon, title, subtitle }) => (
  <div className="flex gap-4 items-start p-4 bg-[#F5F5F0] dark:bg-[#1A1A1A] rounded-lg border border-neutral-200/60 dark:border-white/5 hover:border-pink-300/50 dark:hover:border-purple-500/30 hover:shadow-sm transition-all cursor-default">
    <div className="text-neutral-500 dark:text-neutral-400 mt-1">{icon}</div>
    <div>
      <h4 className="font-medium text-sm text-neutral-800 dark:text-neutral-200">{title}</h4>
      <p className="text-xs text-neutral-500 mt-1 font-medium">{subtitle}</p>
    </div>
  </div>
);

// --- AchievementCard (Typed) ---

export const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description, detail }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }} 
      className="flex flex-col items-center text-center p-8 bg-white dark:bg-[#1A1A1A] rounded-xl border border-neutral-200 dark:border-white/5 hover:border-pink-200/60 dark:hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="mb-6 p-4 bg-neutral-50 dark:bg-white/5 rounded-full text-neutral-400 group-hover:text-pink-500 dark:group-hover:text-purple-400 group-hover:bg-pink-50 dark:group-hover:bg-purple-900/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-serif text-2xl mb-2 text-neutral-800 dark:text-neutral-100">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1 font-medium">{description}</p>
      <p className="text-xs text-neutral-400 uppercase tracking-wide">{detail}</p>
    </motion.div>
  );
};