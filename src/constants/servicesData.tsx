// src/constants/servicesData.ts

import WebDevSVG from '@/components/svgs/WebDevSVG';
import DashboardSVG from '@/components/svgs/DashboardSVG';
import ComponentArchSVG from '@/components/svgs/ComponentArchSVG';
import BackendSVG from '@/components/svgs/BackendSVG';
import PortfolioSVG from '@/components/svgs/PortfolioSVG';
import MobileSVG from '@/components/svgs/MobileSVG';
import { ReactNode } from 'react';

export type ServiceItem = {
  id: string;
  icon: ReactNode;
  titleKey: string;
  descKey: string;
};

export const services: ServiceItem[] = [
  {
    id: 'web',
    icon: <WebDevSVG />,
    titleKey: 'Services.Services[0].title',
    descKey: 'Services.Services[0].desc',
  },
  {
    id: 'mobile',
    icon: <MobileSVG />,
    titleKey: 'Services.Services[1].title',
    descKey: 'Services.Services[1].desc',
  },
  {
    id: 'frontend',
    icon: <ComponentArchSVG />,
    titleKey: 'Services.Services[2].title',
    descKey: 'Services.Services[2].desc',
  },
  {
    id: 'backend',
    icon: <BackendSVG />,
    titleKey: 'Services.Services[3].title',
    descKey: 'Services.Services[3].desc',
  },
  {
    id: 'portfolio',
    icon: <PortfolioSVG />,
    titleKey: 'Services.Services[4].title',
    descKey: 'Services.Services[4].desc',
  },
  {
    id: 'cms',
    icon: <DashboardSVG />,
    titleKey: 'Services.Services[5].title',
    descKey: 'Services.Services[5].desc',
  },
];
