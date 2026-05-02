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
};

export const services: ServiceItem[] = [
  { id: 'web', icon: <WebDevSVG /> },
  { id: 'mobile', icon: <MobileSVG /> },
  { id: 'frontend', icon: <ComponentArchSVG /> },
  { id: 'backend', icon: <BackendSVG /> },
  { id: 'portfolio', icon: <PortfolioSVG /> },
  { id: 'cms', icon: <DashboardSVG /> },
];
