import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = '✨ Your Website Builder',
  heading = '',
  description = '',
  buttons = {
    primary: {
      text: 'Hire me',
      url: '#contact',
    },
    secondary: {
      text: 'View on GitHub',
      url: 'https://github.com/CarlosGRJ',
    },
  },
  image = {
    src: '',
    alt: '',
  },
}: Hero1Props) => {
  return (
    <section id='home' className='relative py-16 sm:py-24'>
      <div className='pointer-events-none absolute inset-0 left-1/2 -z-10 w-[100vw] -translate-x-1/2'>
        <Image
          src='/images/background-home.webp'
          alt=''
          aria-hidden='true'
          fill
          sizes='100vw'
          className='h-full w-full object-cover'
          quality={80}
        />
      </div>

      <div className='mx-auto w-full max-w-7xl px-8 sm:px-20'>
        <div className='grid items-center gap-10 lg:grid-cols-[3fr_2fr]'>
          <div className='order-2 flex flex-col items-center rounded-3xl bg-background/60 p-6 text-center text-foreground shadow-md backdrop-blur-md sm:p-8 lg:order-1 lg:items-start lg:text-left'>
            {badge && (
              <Badge variant='outline'>
                {badge}
                <ArrowUpRight className='ml-2 size-4' />
              </Badge>
            )}
            <h1 className='my-6 text-4xl font-bold text-pretty text-foreground lg:text-6xl'>
              {heading}
            </h1>
            <p className='mb-8 max-w-xl text-foreground/70 lg:text-xl'>
              {description}
            </p>
            <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
              {buttons.primary && (
                <Button asChild className='w-full sm:w-auto'>
                  <Link
                    aria-label={`Primary action: ${buttons.primary.text}`}
                    href={buttons.primary.url}>
                    {buttons.primary.text}
                  </Link>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant='outline' className='w-full sm:w-auto'>
                  <Link
                    aria-label={`View project on GitHub: ${buttons.secondary.text}`}
                    href={buttons.secondary.url}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {buttons.secondary.text}
                    <FaGithub className='size-4' />
                  </Link>
                </Button>
              )}
            </div>
            <dl className='mt-8 grid w-full max-w-md grid-cols-2 gap-4 text-left text-sm'>
              <div className='rounded-xl border bg-background/90 p-4 shadow-sm'>
                <dt className='text-foreground/60'>Years of experience</dt>
                <dd className='mt-2 text-2xl font-semibold'>6+ years</dd>
              </div>
              <div className='rounded-xl border bg-background/90 p-4 shadow-sm'>
                <dt className='text-foreground/60'>Find me on</dt>
                <dd className='mt-3 flex items-center gap-3'>
                  <Link
                    href='https://www.linkedin.com/in/carlosgrj/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Visit LinkedIn profile'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
                    <FaLinkedin className='size-5' />
                  </Link>
                  <Link
                    href='https://www.instagram.com/carloscodebrew'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Visit Instagram profile'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
                    <FaInstagram className='size-5' />
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          <figure className='order-1 relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:order-2 lg:justify-self-end'>
            <div className='absolute -right-6 -top-6 hidden h-20 w-20 rounded-full bg-primary/20 blur-2xl sm:block' />
            <div className='absolute -bottom-8 -left-8 hidden h-24 w-24 rounded-full bg-primary/20 blur-2xl sm:block' />
            <Image
              width={340}
              height={340}
              src={image.src}
              alt={image.alt}
              className='aspect-square w-full rounded-full border bg-background/70 object-cover shadow-lg'
              quality={80}
              priority
              sizes='(min-width: 1024px) 260px, (min-width: 640px) 240px, 220px'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
