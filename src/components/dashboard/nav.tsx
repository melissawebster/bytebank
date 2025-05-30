import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface NavDashboardProps {
  type: 'tablet' | 'desktop';
  className?: string;
}

export default function NavDashboard({type, className} : NavDashboardProps) {
  const menuItems = [
    {nome: 'Início', url:'/dashboard'},
    {nome: 'Transferências', url:'/dashboard'},
    {nome: 'Investimentos', url:'/dashboard/meus-investimentos'},
    {nome: 'Outros serviços', url:'/dashboard/servicos'},
  ]
  return (
    <div className={twMerge('w-full', className)}>
      {type === 'tablet'  && (
        <div className="w-full flex flex-row justify-between px-4">
          {menuItems.map((item, index) => (
            <Link 
              href={item.url} 
            >
              <div className="p-4" key={index}>
                {item.nome}
              </div>
            </Link>
          ))}
        </div>
      )}
      {type === 'desktop'  && (
        <div className="w-full h-full flex-col p-4 bg-white rounded-md">
          {menuItems.map((item, index) => (
            <Link 
              href={item.url} 
            >
              <div className="p-4" key={index}>
                {item.nome}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}