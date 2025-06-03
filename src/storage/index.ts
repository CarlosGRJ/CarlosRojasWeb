import { Theme, ThemeEnum } from '@/types/theme';

export const saveThemeToStorage = ({ theme }: { theme: Theme }) => {
  window.localStorage.setItem('theme', theme);
};

export const getThemeFromStorage = () => {
  const theme = window.localStorage.getItem('theme');
  return theme ? (theme as Theme) : ThemeEnum.LIGHT;
};
