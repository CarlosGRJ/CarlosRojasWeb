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
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <Logo className='w-20 h-14' />
        </SheetTitle>
        <NavMenu orientation='vertical' className='mt-12 items-start' />
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
