'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useTranslation } from '@/context/TranslationProvider';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export const NavMenu = (props: NavigationMenuProps) => {
  const { t } = useTranslation();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className='gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link aria-label='Go to home section' href='#home'>
              {t.Header.Home}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link aria-label='Go to about section' href='#about'>
              {t.Header.About}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link aria-label='Go to services section' href='#services'>
              {t.Header.Services}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link aria-label='Go to experience section' href='#experience'>
              {t.Header.Experience}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link aria-label='Go to portfolio section' href='#portfolio'>
              {t.Header.Portfolio}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link aria-label='Go to contact section' href='#contact'>
              {t.Header.Contact}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
