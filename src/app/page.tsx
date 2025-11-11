'use client';

import Contact02Page from '@/components/contact-02/contact-02';
import { Hero1 } from '@/components/hero1';
import { Hero34 } from '@/components/hero34';
import ServicesSection from '@/components/service-section';
import ExperienceSection from '@/components/experience-section';
import PortfolioSection from '@/components/portfolio-section';
import { useTranslation } from '@/context/TranslationProvider';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero1
        heading={t.Home.Title}
        description={t.Home.Description}
        badge={t.Home.Badge}
        image={{
          src: '/images/carlos-avatar.webp',
          alt: 'Carlos Avatar',
        }}
        buttons={{
          primary: {
            text: t.Home.Hire,
            url: '#contact',
          },
          secondary: {
            text: t.Home.ViewOnGitHub,
            url: 'https://github.com/CarlosGRJ',
          },
        }}
      />

      <Hero34 description={t.About.Description} />

      <ServicesSection />

      <ExperienceSection />

      <PortfolioSection />

      <Contact02Page />
    </>
  );
}
