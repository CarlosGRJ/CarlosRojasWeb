'use client';

import { useEffect, useRef, useState } from 'react';

import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import LightDarkToggle from '../ui/light-dark-toggle';
import LanguageToggle from '../ui/language-toggle';
import { useTranslation } from '@/context/TranslationProvider';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'services',
  'experience',
  'portfolio',
  'contact',
] as const;

type SectionId = (typeof SECTION_IDS)[number];

function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('home');
  const visibleRef = useRef(new Set<SectionId>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) {
            visibleRef.current.add(id);
          } else {
            visibleRef.current.delete(id);
          }
        });
        const topmost = SECTION_IDS.find((id) => visibleRef.current.has(id));
        if (topmost) setActive(topmost);
      },
      { rootMargin: '-10px 0px -85% 0px', threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

const Navbar01Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const activeSection = useActiveSection();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label={t.Aria.PrimaryNav}
      className={`z-50 h-16 w-full border-b border-foreground/10 bg-background/80 transition-all duration-300 backdrop-blur-md backdrop-saturate-150 ${
        isSticky ? 'sticky top-0 shadow-sm' : ''
      }`}>
      <div className='mx-auto flex h-full max-w-[1920px] items-center justify-between px-8 sm:px-20'>
        <Logo className='w-20 h-14' />

        <NavMenu className='hidden md:block' activeSection={activeSection} />

        <div className='flex items-center gap-3'>
          <LightDarkToggle className='sm:inline-flex' />
          <LanguageToggle />

          <div className='md:hidden'>
            <NavigationSheet activeSection={activeSection} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar01Page;
