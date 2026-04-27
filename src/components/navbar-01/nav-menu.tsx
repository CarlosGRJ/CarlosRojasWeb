'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useTranslation } from '@/context/TranslationProvider';
import { cn } from '@/lib/utils';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

type NavMenuProps = NavigationMenuProps & {
  activeSection?: string;
};

const NAV_LINKS = [
  { id: 'home', labelKey: 'Home' },
  { id: 'about', labelKey: 'About' },
  { id: 'skills', labelKey: 'Skills' },
  { id: 'services', labelKey: 'Services' },
  { id: 'experience', labelKey: 'Experience' },
  { id: 'portfolio', labelKey: 'Portfolio' },
  { id: 'contact', labelKey: 'Contact' },
] as const;

export const NavMenu = ({ activeSection, ...props }: NavMenuProps) => {
  const { t } = useTranslation();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className='gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
        {NAV_LINKS.map(({ id, labelKey }) => (
          <NavigationMenuItem key={id}>
            <NavigationMenuLink asChild>
              <Link
                href={`#${id}`}
                aria-current={activeSection === id ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium transition-colors',
                  activeSection === id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground',
                )}>
                {t.Header[labelKey]}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
