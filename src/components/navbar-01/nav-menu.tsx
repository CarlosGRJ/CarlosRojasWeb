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
            <Link href='#home'>{t.Header.Home}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='#about'>{t.Header.About}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='#services'>{t.Header.Services}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='#experience'>{t.Header.Experience}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='#portfolio'>{t.Header.Portfolio}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href='#contact'>{t.Header.Contact}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
