import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface NavDashboardProps {
  type: "tablet" | "desktop";
  className?: string;
}

export default function NavDashboard({ type, className }: NavDashboardProps) {
  const menuItems = [
    { nome: "Home", url: "/dashboard" },
    { nome: "Transfers", url: "/dashboard" },
    { nome: "Investments", url: "/dashboard/meus-investimentos" },
    { nome: "Other services", url: "/dashboard/servicos" },
  ];
  return (
    <div className={twMerge("w-full", className)}>
      {type === "tablet" && (
        <div className="w-full flex flex-row justify-between px-4">
          {menuItems.map((item, index) => (
            <Link href={item.url}>
              <div className="p-4" key={index}>
                {item.nome}
              </div>
            </Link>
          ))}
        </div>
      )}
      {type === "desktop" && (
        <div className="w-full h-full flex-col p-4 bg-white rounded-md">
          {menuItems.map((item, index) => (
            <Link href={item.url}>
              <div className="p-4" key={index}>
                {item.nome}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
