'use client';

import { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
          onLinkClick={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
};
