/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import { cloneElement, ReactElement } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconProps?: LucideProps;
  ref?: React.Ref<HTMLInputElement>;
}

const InputField = ({
  className,
  type,
  startIcon,
  endIcon,
  iconProps = {},
  ref,
  ...props
}: InputProps) => {
  const { className: iconClassName, ...iconRest } = iconProps;

  return (
    <div className="relative">
      {startIcon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
          {cloneElement(startIcon as ReactElement<any>, {
            size: 24,
            className: cn('text-muted-foreground', iconClassName),
            ...iconRest
          })}
        </div>
      )}
      <input
        type={type}
        className={cn(
          'border-input bg-background text-zinc-900 placeholder:text-black/40 ring-offset-background flex min-h-10 w-full rounded-full border px-8 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base',
          startIcon ? 'pl-12' : '',
          endIcon ? 'pr-12' : '',
          className
        )}
        ref={ref}
        {...props}
      />
      {endIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
          {cloneElement(endIcon as ReactElement<any>, {
            size: 24,
            className: cn('text-muted-foreground', iconClassName),
            ...iconRest
          })}
        </div>
      )}
    </div>
  );
};

InputField.displayName = 'Input';

export default InputField;
