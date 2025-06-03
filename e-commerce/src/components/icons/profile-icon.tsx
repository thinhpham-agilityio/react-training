'use client';

import { CircleUserRound } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const ProfileIcon = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <Link href="/profile">
        <CircleUserRound />
      </Link>
    );
  }

  return (
    <Link href="/login">
      <CircleUserRound />
    </Link>
  );
};

export default ProfileIcon;
