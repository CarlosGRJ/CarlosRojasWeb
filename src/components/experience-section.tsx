'use client';

import { useTranslation } from '@/context/TranslationProvider';
import { FadeIn } from '@/components/ui/fade-in';

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id='experience'>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center justify-center'>
        <FadeIn className='w-full text-center'>
          <h2 className='sec-title mb-12 md:mb-16'>{t.Experience.Title}</h2>
        </FadeIn>

        <ol className='relative w-full max-w-3xl border-l-2 border-border space-y-10'>
          {t.Experience.List.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1}>
            <li className='relative pl-8'>
              <span className='absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background' />

              <time className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                {exp.date}
              </time>
              <h3 className='mt-1 text-lg font-semibold text-foreground'>
                {exp.role}
              </h3>
              <p className='text-sm text-muted-foreground'>{exp.company}</p>
              {exp.metric && (
                <p className='mt-2 mb-3 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground'>
                  {exp.metric}
                </p>
              )}

              <ul className='list-disc list-outside pl-4 space-y-1.5 text-sm text-muted-foreground'>
                {exp.descriptions.map((desc) => (
                  <li key={desc.id}>{desc.desc}</li>
                ))}
              </ul>
            </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
