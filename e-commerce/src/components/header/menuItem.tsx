'use client';

import Link from 'next/link';

import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  title: string;
  url: string;
}

const MenuItem = (item: MenuItemProps) => {
  const path = usePathname();

  console.log(path);
  

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        href={item.url}
        className={
          path.includes(item.url)
            ? 'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground text-chart-1'
            : 'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground'
        }
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const MobileMenuItem = (item: MenuItemProps) => {
  const path = usePathname();

  return (
    <Link
      key={item.title}
      href={item.url}
      className={path.includes(item.url) ? 'text-chart-1' : ''}
    >
      {item.title}
    </Link>
  );
};

export { MenuItem, MobileMenuItem };
