import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { navDashboardItems } from "../shared";

interface NavDashboardProps {
  className?: string;
}

export default function NavDashboard({ className }: NavDashboardProps) {
  return (
    <div
      className={twMerge(
        `dark-nav-style text-lg w-full rounded-lg p-0`,
        className
      )}
    >
      <div className="w-full flex flex-row lg:flex-col justify-between">
        {navDashboardItems.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className="first:rounded-l-lg last:rounded-r-lg
                      lg:first:rounded-t-lg lg:first:rounded-l-none
                      lg:last:rounded-b-lg  lg:last:rounded-r-none
                      overflow-hidden"
          >
            <div className="flex-1 font-normal lime-green text-sm border py-3 lg:py-4 px-4 border-slate-600 bg-slate-800">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
