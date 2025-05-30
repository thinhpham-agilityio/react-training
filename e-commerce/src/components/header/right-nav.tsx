import { CircleUserRound } from 'lucide-react';

import Link from 'next/link';
import ShoppingCartIcon from '../icon/shopping-cart-icon';

const RightNav = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/cart" passHref>
        <ShoppingCartIcon />
      </Link>
      <Link href="/login">
        <CircleUserRound />
      </Link>
    </div>
  );
};

export default RightNav;
