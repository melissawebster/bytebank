
import Image from "next/image";
import { twMerge } from "tailwind-merge";


const lista = [
  {
    mes: "Novembro",
    tipo: "Depósito",
    data: "2024-11-05",
    valor: 150.00
  },
  {
    mes: "Novembro",
    tipo: "Depósito",
    data: "2024-11-10",
    valor: 2500.00
  },
  {
    mes: "Novembro",
    tipo: "Transferência",
    data: "2024-11-15",
    valor: 300.00
  },
  {
    mes: "Novembro",
    tipo: "Transferência",
    data: "2024-11-25",
    valor: 1200.00
  }
];

interface ExtratoProps {
  className?: string;
}

export default function Extrato({className} : ExtratoProps) {

  return (
    <div className={twMerge("flex flex-col items-left md:items-center w-full rounded-md bg-white p-6", className)}>
      <div className="w-full flex flex-col items-center gap-y-6 max-w-[250px]">
        <div className="flex justify-between w-full">
          <div className="text-2xl text-black font-semibold">Extrato</div>
          <div className="flex gap-x-4">
            <Image 
              src="/assets/erase.png" 
              alt="erase"
              width={40}
              height={40}
            />
            <Image 
              src="/assets/delete.png" 
              alt="delete"
              width={40}
              height={40}
            />
          </div>
        </div>

        {lista.map((item, index) => (
          <div className="flex justify-between w-full border-b border-green-400 py-2" key={index}>
            <div className="">
              <div className="green-text font-semibold">{item.mes}</div>
              <div>{item.tipo}</div>
              <div className="font-semibold">R$ {item.valor}</div>
            </div>
            <div className="flex h-full text-gray-500">
              {item.data}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}