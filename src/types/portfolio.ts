import { ReactNode } from 'react';

export type ProjectImage = {
  src: string;
  alt: string;
};

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
  isInternal?: boolean;
}
