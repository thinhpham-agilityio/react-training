import ShoppingCartIcon from '../icons/shopping-cart-icon';
import ProfileIcon from '../icons/profile-icon';

const RightNav = () => {
  return (
    <div className="flex items-center gap-6">
      <ShoppingCartIcon />
      <ProfileIcon />
    </div>
  );
};

export default RightNav;
