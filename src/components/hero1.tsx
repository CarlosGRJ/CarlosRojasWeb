import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

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
    <section id='home' className='py-12 sm:py-20'>
      <div className='container'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            {badge && (
              <Badge variant='outline'>
                {badge}
                <ArrowUpRight className='ml-2 size-4' />
              </Badge>
            )}
            <h1 className='my-6 text-4xl font-bold text-pretty lg:text-6xl'>
              {heading}
            </h1>
            <p className='mb-8 max-w-xl text-muted-foreground lg:text-xl'>
              {description}
            </p>
            <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
              {buttons.primary && (
                <Button asChild className='w-full sm:w-auto'>
                  <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant='outline' className='w-full sm:w-auto'>
                  <Link href={buttons.secondary.url} target='_blank'>
                    {buttons.secondary.text}
                    <FaGithub className='size-4' />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <Image
            width={400}
            height={400}
            src={image.src}
            alt={image.alt}
            className='max-h-11/12 w-full rounded-3xl object-cover'
            quality={80}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
