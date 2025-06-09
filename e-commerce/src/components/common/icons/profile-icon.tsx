'use client';

import Link from 'next/link';
import { CircleUserRound } from 'lucide-react';
import { useSession } from 'next-auth/react';

const ProfileIcon = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <Link aria-label="profile" href="/profile">
        <CircleUserRound />
      </Link>
    );
  }

  return (
    <Link aria-label="login" href="/login">
      <CircleUserRound />
    </Link>
  );
};

export default ProfileIcon;
