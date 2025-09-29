import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { navDashboardItems } from "../shared";

interface NavDashboardProps {
  className?: string;
}

export default function NavDashboard({ className }: NavDashboardProps) {
  return (
    <div className={twMerge(`text-lg w-full rounded-md p-0`, className)}>
      <div className="w-full flex flex-row lg:flex-col justify-between">
        {navDashboardItems.map((item, index) => (
          <Link href={item.url} key={index} className="flex-1">
            <div
              className={`flex font-light lime-green border border-0.5 text-sm py-3 lg:py-4 px-4 justify-center lg:block bg-slate-600 hover:bg-slate-700 overflow-hidden ${
                index === 0 ? "rounded-l-md lg:rounded-l-none lg:rounded-t-md" : ""
              } ${
                index === navDashboardItems.length - 1 ? "rounded-r-md lg:rounded-r-none lg:rounded-b-md" : ""
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
