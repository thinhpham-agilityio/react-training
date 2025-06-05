'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

import { Button } from '../ui/button';
import useCartContext from '@/hooks/use-cart-context';
import { userSignOut } from '@/actions/auth';
import { redirect } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';

const ProfileSection = () => {
  const { data: session, status, update } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { clearCart } = useCartContext();

  const email = session?.user?.email || '';  

  const handleClickLogout = async () => {
    setIsLoggingOut(true);
    try {
      await userSignOut();
      clearCart(); // Clear the cart on logout
      await update(); // Update session state
    } catch {
      toast.error('Failed to log out. Please try again.');
      setIsLoggingOut(false);
      return;
    }

    redirect('/');
  };

  return (
    <>
      <div className="flex flex-col border p-4 border-border-foreground rounded-lg max-w-lg">
        <h2 className="text-lg font-semibold">Email</h2>
        {status === 'loading' || !email ? (
          <Skeleton className="w-100 h-10" />
        ) : (
          <p className="mt-2 text-sm text-primary">{email}</p>
        )}
      </div>
      <div>
        <Button
          variant="destructive"
          className="mt-4"
          onClick={handleClickLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Logging out...' : 'Logout'}
        </Button>
      </div>
    </>
  );
};

export default ProfileSection;
