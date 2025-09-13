import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const WhiteTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={twMerge(`text-white font-bold text-xl`, className)}>
    {children}
  </div>
);
