import { Metadata } from 'next';

import ProfileSection from '@/components/features/user/profile/profile-section';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'User profile'
};

export default function ProfilePage() {
  return (
    <div className="py-10">
      <div className="container m-auto px-3">
        <h1 className="mb-6 text-2xl font-bold">Profile</h1>
        <ProfileSection />
      </div>
    </div>
  );
}
