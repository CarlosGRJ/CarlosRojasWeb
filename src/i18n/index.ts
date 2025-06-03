import en from './en.json';
import es from './es.json';

export const dictionaries = {
  en,
  es,
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)[Locale];

// ✅ synchronous function
export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ?? dictionaries.en;
};
