import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const BlackTitle = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={twMerge(`text-black font-bold text-xl`, className)}>
    {children}
  </div>
);