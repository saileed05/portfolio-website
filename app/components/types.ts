// components/types.ts

import React from 'react';

export interface ProjectCaseStudyProps {
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
  github?: string;
  year: string;
  imageSrc: string;
}

export interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
}

export interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export interface CertBadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}