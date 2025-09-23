import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { navDashboardItems } from "../shared";

interface NavDashboardProps {
  className?: string;
}

export default function NavDashboard({ className }: NavDashboardProps) {
  return (
    <div className={twMerge(`dark-card-style text-lg w-full rounded-lg px-4 pt-9 pb-12`, className)}>
      <div className="w-full flex flex-row lg:flex-col justify-between px-4">
        {navDashboardItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <div className="font-normal lime-green text-sm px-4 py-1 lg:py-4">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
