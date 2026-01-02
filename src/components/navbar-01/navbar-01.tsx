'use client';

import { useEffect, useState } from 'react';

import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import LightDarkToggle from '../ui/light-dark-toggle';
import LanguageToggle from '../ui/language-toggle';

const Navbar01Page = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      aria-label='Primary'
      className={`z-50 h-16 w-screen -mx-[calc(50vw-50%)] border-b border-foreground/10 bg-background/80 transition-all duration-300 backdrop-blur-md backdrop-saturate-150 ${
        isSticky ? 'sticky top-0 shadow-sm' : ''
      }`}>
      <div className='mx-auto flex h-full max-w-screen-xl items-center justify-between px-8 sm:px-20'>
        <Logo className='w-20 h-14' />

        {/* Desktop Menu */}
        <NavMenu className='hidden md:block' />

        <div className='flex items-center gap-3'>
          <LightDarkToggle className='sm:inline-flex' />
          <LanguageToggle />

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar01Page;
