import { CircleUserRound, ShoppingCart } from 'lucide-react';

import Link from 'next/link';

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
};

export default RightNav;
