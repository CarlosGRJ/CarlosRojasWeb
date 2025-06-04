'use client';

import React from 'react';
import { Button } from './button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { useTranslation } from '@/context/TranslationProvider';
import { LanguageEnum } from '@/types/language';

export default function LanguageToggle({ className }: { className?: string }) {
  const { t, toggleLocale, locale } = useTranslation();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={className}>
          <Button
            onClick={toggleLocale}
            aria-label='Toggle language'
            variant='outline'>
            {locale === LanguageEnum.EN ? LanguageEnum.ES : LanguageEnum.EN}
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <span>{t.LanguageToggle.tooltip}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
