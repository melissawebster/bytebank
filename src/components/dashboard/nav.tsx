import { twMerge } from "tailwind-merge";

interface NavDashboardProps {
  type: 'tablet' | 'desktop';
  className?: string;
}

export default function NavDashboard({type, className} : NavDashboardProps) {
  const menuItems = ['Início', 'Transferências', 'Investimentos', 'Outros serviços']
  return (
    <div className={twMerge('w-full', className)}>
      {type === 'tablet'  && (
        <div className="w-full flex flex-row justify-between px-4">
          {menuItems.map((item, index) => (
            <div className="p-4" key={index}>{item}</div>
          ))}
        </div>
      )}
      {type === 'desktop'  && (
        <div className="w-full h-full flex-col p-4 bg-white rounded-md">
          {menuItems.map((item, index) => (
            <div className="p-4 text-sm border-b border-green-300" key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  )
}