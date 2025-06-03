import ProfileSection from "@/components/profile/profile-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile',
  description: 'User profile'
};

export default function ProfilePage() {
  return (
    <div className="py-4">
      <div className="container m-auto px-3">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <ProfileSection />
      </div>
    </div>
  );
}
