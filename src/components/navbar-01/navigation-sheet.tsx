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

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' aria-label='Open navigation menu'>
          <Menu aria-hidden='true' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <Logo className='w-20 h-14' />
        </SheetTitle>
        <SheetDescription className='sr-only'>
          Site navigation links
        </SheetDescription>
        <NavMenu orientation='vertical' className='mt-12 items-start' />
      </SheetContent>
    </Sheet>
  );
};
