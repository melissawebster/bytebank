import { ReactNode } from 'react';

export const BlackTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="text-black font-bold text-xl">
    {children}
  </h1>
);