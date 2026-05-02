import { ProjectCategory } from '@/types/portfolio';

export const CATEGORY_STYLES: Record<ProjectCategory, string> = {
  'Web App': 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400',
  'Landing Page': 'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400',
  'E-commerce': 'bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400',
  Catalog: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400',
  FinTech: 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400',
  B2B: 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400',
  Dashboard: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400',
  Portfolio: 'bg-teal-100 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400',
};
