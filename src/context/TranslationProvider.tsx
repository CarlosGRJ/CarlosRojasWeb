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
  locale: initialLocale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [t, setT] = useState<Dictionary>(getDictionary(initialLocale));

  useEffect(() => {
    setLocale(initialLocale);
    setT(getDictionary(initialLocale));
  }, [initialLocale]);

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
