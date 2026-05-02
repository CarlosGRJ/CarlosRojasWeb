'use client';

import { Search, Layers, Code2, FlaskConical, Rocket } from 'lucide-react';
import { useTranslation } from '@/context/TranslationProvider';
import { FadeIn } from '@/components/ui/fade-in';

const STEP_ICONS = [Search, Layers, Code2, FlaskConical, Rocket];

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section id='process'>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center'>
        <FadeIn className='w-full text-center'>
          <h2 className='sec-title mb-12 md:mb-16'>{t.Process.Title}</h2>
        </FadeIn>

        <div className='relative w-full max-w-5xl'>
          <div
            className='absolute top-8 left-0 right-0 hidden h-px bg-border lg:block'
            aria-hidden='true'
          />

          <ol className='grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-4'>
            {t.Process.Steps.map((step, index) => {
              const Icon = STEP_ICONS[index];
              return (
                <FadeIn key={step.id} delay={index * 0.1}>
                  <li className='flex flex-col items-center text-center gap-3'>
                    <div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm'>
                      <Icon className='h-6 w-6 text-primary' aria-hidden='true' />
                    </div>
                    <span className='text-xs font-mono text-muted-foreground'>
                      0{index + 1}
                    </span>
                    <h3 className='text-base font-semibold text-foreground'>
                      {step.title}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {step.desc}
                    </p>
                  </li>
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
