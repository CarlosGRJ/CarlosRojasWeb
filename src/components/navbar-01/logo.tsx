'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeEnum } from '@/types/theme';
import LogoBlack from '../svgs/LogoBlack';
import LogoWhite from '../svgs/LogoWhite';

export type LogoProps = {
  readonly className?: string;
};

export function Logo({ className }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <LogoBlack className={className} />;

  return resolvedTheme === ThemeEnum.DARK ? (
    <LogoWhite className={className} />
  ) : (
    <LogoBlack className={className} />
  );
}
