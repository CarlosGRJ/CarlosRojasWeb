'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { useTranslation } from '@/context/TranslationProvider';
import { LanguageEnum } from '@/types/language';
import { useCurrentSection } from '@/hooks/useCurrentSection';

export default function LanguageToggle({ className }: { className?: string }) {
  const { t, locale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale =
    locale === LanguageEnum.EN ? LanguageEnum.ES : LanguageEnum.EN;

  const sectionIds = [
    'home',
    'about',
    'services',
    'experience',
    'portfolio',
    'contact',
  ];
  const currentSection = useCurrentSection(sectionIds);

  const handleToggle = () => {
    const segments = pathname.split('/');
    segments[1] = switchLocale;
    const basePath = segments.join('/');
    const hash = currentSection ? `#${currentSection}` : '';

    router.replace(`${basePath}${hash}`);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={className}>
          <Button
            onClick={handleToggle}
            aria-label='Toggle language'
            variant='outline'>
            {switchLocale}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>{t.LanguageToggle.tooltip}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
