'use client';

import { getThemeFromStorage, saveThemeToStorage } from '@/storage';
import { Theme, ThemeEnum } from '@/types/theme';
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: ThemeEnum.LIGHT,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);

  useEffect(() => {
    const storedTheme = getThemeFromStorage();
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (isDarkMode) {
      setTheme(ThemeEnum.DARK);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove(ThemeEnum.LIGHT, ThemeEnum.DARK);
    document.body.classList.add(theme);
    saveThemeToStorage({ theme });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
