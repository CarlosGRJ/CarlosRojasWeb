'use client';

import { getDictionary, type Dictionary, type Locale } from '@/i18n';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

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
    try {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved) {
        setLocale(saved);
        setT(getDictionary(saved));
      }
    } catch {
      // localStorage blocked (e.g. incognito with storage disabled)
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    setLocale(newLocale);
    setT(getDictionary(newLocale));
    try {
      localStorage.setItem('locale', newLocale);
    } catch {
      // localStorage blocked (e.g. incognito with storage disabled)
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, t, toggleLocale }),
    [locale, t, toggleLocale],
  );

  return (
    <TranslationContext.Provider value={value}>
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
