'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { useTranslation } from '@/context/TranslationProvider';

type NavigationSheetProps = {
  activeSection?: string;
};

export const NavigationSheet = ({ activeSection }: NavigationSheetProps) => {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' aria-label={t.Aria.OpenNavMenu}>
          <Menu aria-hidden='true' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <Logo className='w-20 h-14' />
        </SheetTitle>
        <SheetDescription className='sr-only'>
          {t.Aria.SiteNavLinks}
        </SheetDescription>
        <NavMenu
          orientation='vertical'
          className='mt-12 items-start'
          activeSection={activeSection}
        />
      </SheetContent>
    </Sheet>
  );
};
