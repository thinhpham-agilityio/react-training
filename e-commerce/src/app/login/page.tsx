import { Metadata } from 'next';

import LoginForm from '@/components/features/auth/login/login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page'
};

export default function LoginPage() {
  return (
    <div className="border-border-foreground mx-auto mt-60 w-fit rounded-xl border p-15 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
}
