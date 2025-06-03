'use client';

import React from 'react';
import { useTranslation } from '@/context/TranslationProvider';
import { services } from '@/constants/servicesData';
import { Card } from '@/components/ui/card';

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section
      id='services'
      className='flex flex-col items-center px-8 md:px-16 lg:px-24 text-base pt-16'>
      <h2 className='text-4xl font-bold border-b-4 border-primary mb-16 md:mb-20'>
        {t.Services.Title}
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 w-full'>
        {services.map((service, i) => (
          <Card
            key={service.id}
            className='bg-background text-foreground border border-gray-300 dark:border-gray-700 rounded-xl p-6 
                 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
                 flex flex-col gap-4 text-center sm:text-left items-center sm:items-baseline'>
            <div className='text-3xl mb-4 w-30 h-30'>{service.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>
              {t.Services.Services[i].title}
            </h3>
            <p className='text-muted-foreground'>
              {t.Services.Services[i].desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
