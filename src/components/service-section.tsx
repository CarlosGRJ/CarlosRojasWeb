'use client';

import { useTranslation } from '@/context/TranslationProvider';
import { services } from '@/constants/servicesData';
import { Card } from '@/components/ui/card';

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id='services' className='bg-muted/40'>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center text-base'>
        <h2 className='sec-title mb-12 md:mb-16'>{t.Services.Title}</h2>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 w-full'>
          {services.map((service) => {
            const serviceT = t.Services.Services.find((s) => s.id === service.id);

            return (
              <Card
                key={service.id}
                className='bg-background text-foreground border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 text-center sm:text-left items-center sm:items-baseline'>
                <div className='w-20 h-20 mb-4 [&_svg]:w-full [&_svg]:h-full' aria-hidden='true'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  {serviceT?.title}
                </h3>
                <p className='text-muted-foreground'>{serviceT?.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
