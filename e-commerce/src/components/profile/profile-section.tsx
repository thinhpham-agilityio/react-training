'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';
import useCartContext from '@/hooks/use-cart-context';

const ProfileSection = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [email,] = useState<string | null | undefined>(
    session?.user?.email
  );
  const { clearCart } = useCartContext();

  const handleClickLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({
        redirect: false
      });
      clearCart(); // Clear the cart on logout
      router.push('/');
    } catch {
      toast.error('Failed to log out. Please try again.');
      setIsLoggingOut(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <span className="text-gray-500">Loading profile...</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col border p-4 border-border-foreground rounded-lg max-w-lg">
        <h2 className="text-lg font-semibold">Email</h2>
        <p className="mt-2 text-sm text-gray-600">{email}</p>
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
