'use client';

import { Separator } from '@/components/ui/separator';
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../navbar-01/logo';
import { useTranslation } from '@/context/TranslationProvider';

const Footer05Page = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t.Header.Home,
      href: '#home',
    },
    {
      title: t.Header.About,
      href: '#about',
    },
    {
      title: t.Header.Services,
      href: '#services',
    },
    {
      title: t.Header.Experience,
      href: '#experience',
    },
    {
      title: t.Header.Portfolio,
      href: '#portfolio',
    },
    {
      title: t.Header.Contact,
      href: '#contact',
    },
  ];

  return (
    <footer>
      <div className='max-w-screen-xl mx-auto'>
        <div className='py-12 flex flex-col justify-start items-center'>
          {/* Logo */}
          <Logo className='w-36 h-24' />

          <ul className='mt-6 flex items-center gap-4 flex-wrap'>
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className='text-muted-foreground hover:text-foreground font-medium'>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className='py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0'>
          {/* Copyright */}
          <span className='text-muted-foreground'>
            &copy; {new Date().getFullYear()} {t.Footer.Copyright}
          </span>

          <div className='flex items-center gap-5 text-muted-foreground'>
            <Link href='#' target='_blank'>
              <TwitterIcon className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <DribbbleIcon className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <TwitchIcon className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <GithubIcon className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer05Page;
