import { Menu } from 'lucide-react';

import { Accordion } from '@/components/common/ui/accordion';
import { Button } from '@/components/common/ui/button';
import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/common/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/common/ui/sheet';
import Logo from './logo';
import { MenuItem, MobileMenuItem } from './menu-item';
import RightNav from './right-nav';

const menu = [
  { title: 'Shop', url: '/shop' },
  {
    title: 'On sale',
    url: '/#on-sale'
  },
  {
    title: 'New arrivals',
    url: '/#new-arrivals'
  }
];

const Header = () => {
  return (
    <section className="bg-contained fixed top-0 left-0 z-50 w-full py-3 shadow">
      <div className="container m-auto lg:px-3">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <MenuItem
                      key={item.title}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <RightNav />
        </nav>

        {/* Mobile Menu */}
        <div className="block px-3 lg:hidden">
          <div className="flex items-center justify-between">
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
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => (
                        <MobileMenuItem
                          key={item.title}
                          title={item.title}
                          url={item.url}
                        />
                      ))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
              <Logo />
            </div>
            <RightNav />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
