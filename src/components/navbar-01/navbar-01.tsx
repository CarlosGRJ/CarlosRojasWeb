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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`h-16 bg-background border-b ${isSticky ? 'sticky' : ''}`}>
      <div className='h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
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
