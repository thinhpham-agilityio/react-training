'use client';
import { useState } from 'react';
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '@/lib/zod';
import { z } from 'zod';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { update: updateSession } = useSession();

  type FormData = z.infer<typeof signInSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema)
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: FormData) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });
    if (res?.error) {
      setError('email', { message: 'Invalid email or password' });
      setError('password', { message: '' });
    } else {
      router.push('/');
      updateSession(); // Revalidate session
    }
  };

  return (
    <form
      className="w-full max-w-md space-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
        <MailIcon className="h-5 w-5 text-muted-foreground" />
        <Input
          id="credentials-email"
          type="email"
          placeholder="Email"
          className="border-0 focus-visible:ring-0 shadow-none"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
      </div>
      {errors.email && (
        <p className="text-[0.8rem] text-destructive">{errors.email.message}</p>
      )}
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
        <LockIcon className="h-5 w-5 text-muted-foreground" />
        <Input
          id="credentials-password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="border-0 focus-visible:ring-0 shadow-none"
          aria-invalid={!!errors.password}
          {...register('password')}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
          ) : (
            <EyeIcon className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>
      {errors.password && (
        <p className="text-[0.8rem] text-destructive">
          {errors.password.message}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Log In'}
      </Button>
    </form>
  );
};

export default LoginForm;
