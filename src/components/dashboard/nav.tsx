import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { darkCardStyle, navDashboardItems } from "../shared";

interface NavDashboardProps {
  className?: string;
}

export default function NavDashboard({ className }: NavDashboardProps) {
  return (
    <div className={twMerge("w-full rounded-lg border bg-dark-transp border-amber-300 p-4", className)}>
      <div className="w-full flex flex-row lg:flex-col justify-between px-4">
        {navDashboardItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <div className="font-normal lime-green text-sm p-4">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
