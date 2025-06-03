'use client';

import { ThemeEnum } from '@/types/theme';
import { useTheme } from 'next-themes';
import LogoBlack from '../svgs/LogoBlack';
import LogoWhite from '../svgs/LogoWhite';
import { useEffect, useState } from 'react';

export type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return !hasMounted ? (
    <LogoBlack className={className} />
  ) : theme === ThemeEnum.LIGHT ? (
    <LogoBlack className={className} />
  ) : (
    <LogoWhite className={className} />
  );
}
