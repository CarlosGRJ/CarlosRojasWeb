'use client';

import React from 'react';
import { useTranslation } from '@/context/TranslationProvider';
import { Card, CardDescription, CardTitle } from './ui/card';

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section
      id='experience'
      className=''>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center justify-center'>
      <h2 className='sec-title mb-12 md:mb-16'>
        {t.Experience.Title}
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
        {t.Experience.List.map((exp) => (
          <Card
            key={exp.id}
            className='bg-background border border-gray-300 dark:border-gray-700 p-8 transition-all hover:bg-primary'>
            <div>
              <time className='block text-sm font-medium opacity-75 mb-2'>
                {exp.date}
              </time>
              <CardTitle>
                <h3 className='text-2xl font-semibold mb-1'>{exp.role}</h3>
              </CardTitle>
              <p className='text-md text-muted-foreground'>{exp.company}</p>
            </div>

            <CardDescription className='text-foreground'>
              <ul className='mt-6 list-disc list-inside space-y-2'>
                {exp.descriptions.map((desc) => (
                  <li key={desc.id}>{desc.desc}</li>
                ))}
              </ul>
            </CardDescription>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}
