'use client';

import Link from 'next/link';

import { Separator } from '@/components/ui/separator';
import { Logo } from '../navbar-01/logo';
import { useTranslation } from '@/context/TranslationProvider';

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
      title: t.Header.Skills,
      href: '#skills',
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
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20'>
        <div className='py-12 flex flex-col justify-start items-center'>
          <Logo className='w-36 h-24' />

          <ul className='mt-6 flex items-center gap-4 flex-wrap'>
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  aria-label={`${t.Aria.GoToSection} ${title}`}
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
          <span className='text-muted-foreground'>
            &copy; {new Date().getFullYear()} {t.Footer.Copyright}
          </span>

          <div className='flex items-center gap-5 text-muted-foreground'>
            <Link
              aria-label={t.Aria.VisitGitHub}
              href='https://github.com/CarlosGRJ'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub className='h-5 w-5' />
            </Link>

            <Link
              aria-label={t.Aria.VisitInstagram}
              href='https://www.instagram.com/carloscodebrew'
              target='_blank'
              rel='noopener noreferrer'>
              <FaInstagram className='h-5 w-5' />
            </Link>

            <Link
              aria-label={t.Aria.VisitLinkedIn}
              href='https://www.linkedin.com/in/carlosgrj'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedinIn className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer05Page;
