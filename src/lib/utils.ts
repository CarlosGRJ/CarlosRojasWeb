import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTechStack(techStack: string): string[] {
  return techStack
    .replaceAll(/\([^)]*\)/g, '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}