'use client';

import { getDictionary, type Dictionary, type Locale } from '@/i18n';
import { createContext, useContext, useEffect, useState } from 'react';

type TranslationContextType = {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [t, setT] = useState<Dictionary>(getDictionary('en')); // ✅ now sync

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved) {
      setLocale(saved);
      setT(getDictionary(saved));
    }
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    setLocale(newLocale);
    setT(getDictionary(newLocale));
    localStorage.setItem('locale', newLocale);
  };

  return (
    <TranslationContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context)
    throw new Error('useTranslation must be used inside TranslationProvider');
  return context;
};
