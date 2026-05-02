import { ReactNode } from 'react';

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectCategory =
  | 'Web App'
  | 'Landing Page'
  | 'E-commerce'
  | 'Catalog'
  | 'FinTech'
  | 'B2B'
  | 'Dashboard'
  | 'Portfolio';

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: ReactNode;
  coverImg: string;
  images: ProjectImage[];
  role: string;
  techStack: string;
  url: string;
  category: ProjectCategory;
  isInternal?: boolean;
}
