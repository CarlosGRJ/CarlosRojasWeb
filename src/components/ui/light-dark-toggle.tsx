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

export default function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(
              resolvedTheme === ThemeEnum.LIGHT
                ? ThemeEnum.DARK
                : ThemeEnum.LIGHT,
            );
          }}>
          <Button
            variant='outline'
            aria-label={
              resolvedTheme === ThemeEnum.LIGHT
                ? 'Enable dark mode'
                : 'Enable light mode'
            }>
            <SunIcon className='block dark:hidden' />
            <MoonIcon className='hidden dark:block' />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <span className='hidden dark:block'>Enable light mode</span>
          <span className='inline dark:hidden'>Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
