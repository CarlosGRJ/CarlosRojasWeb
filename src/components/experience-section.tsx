'use client';

import React from 'react';
import { useTranslation } from '@/context/TranslationProvider';
import { Card, CardDescription, CardTitle } from './ui/card';

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section
      id='experience'
      className='flex flex-col items-center justify-center text-[1.4rem] px-4 md:px-16 pt-16'>
      <h2 className='text-4xl font-bold mb-16 md:mb-20 border-b-4 border-primary pb-2'>
        {t.Experience.Title}
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
        {t.Experience.List.map((exp) => (
          <Card
            key={exp.id}
            className='bg-background border border-gray-300 dark:border-gray-700 p-8 transition-all hover:bg-primary'>
            <div>
              <span className='block text-sm font-medium opacity-75 mb-2'>
                {exp.date}
              </span>
              <CardTitle>
                <h3 className='text-2xl font-semibold mb-1'>{exp.role}</h3>
              </CardTitle>
              <span className='text-md text-muted-foreground'>
                {exp.company}
              </span>
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
    </section>
  );
}
