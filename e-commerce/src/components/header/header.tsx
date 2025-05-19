import { CircleUserRound, Menu, ShoppingCart } from 'lucide-react';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import Link from 'next/link';

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const RightNav = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/cart">
        <ShoppingCart />
      </Link>
      <Link href="/login">
        <CircleUserRound />
      </Link>
    </div>
  );
}

const Header = ({
  menu = [
    { title: 'Shop', url: '/shop' },
    {
      title: 'On sale',
      url: '/#on-sale'
    },
    {
      title: 'New arrivals',
      url: '/#new-arrivals'
    },
    {
      title: 'Categories',
      url: '#categories'
    }
  ]
}: NavbarProps) => {
  return (
    <section className="py-4">
      <div className="container m-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex items-center">
          <div className="flex items-center gap-6">
            <Link href="/">
              <h1 className="font-integral font-bold text-2xl lg:mb-2 lg:text-[2rem]">
                SHOP.CO
              </h1>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <RightNav />
        </nav>

        {/* Mobile Menu */}
        <div className="block px-3 lg:hidden">
          <div className='flex items-center justify-between'>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href="/">
                        <h1 className="font-integral font-bold text-2xl lg:mb-2 lg:text-[2rem]">
                          SHOP.CO
                        </h1>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
              <Link href="/">
                <h1 className="font-integral font-bold text-2xl lg:mb-2 lg:text-[2rem]">
                  SHOP.CO
                </h1>
              </Link>
            </div>
            <RightNav />
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url}>
      {item.title}
    </Link>
  );
};

export default Header;
