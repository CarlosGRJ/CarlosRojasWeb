'use client';

import React from 'react';
import { Button } from './button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { ThemeEnum } from '@/types/theme';
import { useTranslation } from '@/context/TranslationProvider';

export default function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const isLight = resolvedTheme === ThemeEnum.LIGHT;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(isLight ? ThemeEnum.DARK : ThemeEnum.LIGHT);
          }}>
          <Button
            variant='outline'
            aria-label={isLight ? t.Aria.EnableDarkMode : t.Aria.EnableLightMode}>
            <SunIcon className='block dark:hidden' />
            <MoonIcon className='hidden dark:block' />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <span className='hidden dark:block'>{t.Aria.EnableLightMode}</span>
          <span className='inline dark:hidden'>{t.Aria.EnableDarkMode}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
