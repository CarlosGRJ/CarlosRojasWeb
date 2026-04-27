import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiHtml5,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiAmazonwebservices,
  SiVercel,
  SiDocker,
  SiGit,
  SiOpenai,
  SiGooglegemini,
  SiJest,
} from 'react-icons/si';
import { Brain, Bot, Globe, FlaskConical } from 'lucide-react';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: IconType | LucideIcon | React.ComponentType<any>;
  color?: string;
};

export type SkillCategory = {
  id: 'frontend' | 'backend' | 'ai' | 'database' | 'testing';
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
      { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'SCSS', Icon: SiSass, color: '#CC6699' },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', Icon: SiExpress },
      { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
      { name: 'Apollo', Icon: SiApollographql, color: '#6D28D9' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'REST APIs', Icon: Globe },
    ],
  },
  {
    id: 'ai',
    skills: [
      { name: 'OpenAI API', Icon: SiOpenai },
      { name: 'Claude API', Icon: Brain, color: '#CC785C' },
      { name: 'Gemini API', Icon: SiGooglegemini, color: '#4285F4' },
      { name: 'LLM Integration', Icon: Bot, color: '#7C3AED' },
    ],
  },
  {
    id: 'database',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
      { name: 'AWS', Icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
    ],
  },
  {
    id: 'testing',
    skills: [
      { name: 'Jest', Icon: SiJest, color: '#C21325' },
      { name: 'React Testing Library', Icon: SiReact, color: '#61DAFB' },
      { name: 'Jasmine', Icon: FlaskConical, color: '#8A4182' },
    ],
  },
];
