import { Eye } from "lucide-react";
import Image from "next/image";


export default function Saldo() {
  return (
    <div className="relative flex flex-col items-center w-full rounded-md bg-petroleum md:px-[10%] min-h-[400px]">
      <div className="w-full flex flex-col md:flex-row items-center m-8 md:justify-between">
        <div className="space-y-4 mb-12">
          <div className="text-2xl text-white">Olá, Joana! :&#41;</div>
          <div className="text-sm text-white">Quinta-feira, 08/09/2022</div>
          <Image 
            src="/assets/saldo-ilustracao.png"
            alt="saldo"
            unoptimized
            width={0}
            height={0}
            className="w-auto h-auto mt-4 hidden md:block lg:hidden"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-6 border-b pb-4 border-b-white">
            <div className="text-xl text-white">Saldo</div>
            <Eye color="#FFF" />
          </div>
          <div className="mt-3">
            <div className="text-lg text-white">Conta corrente</div>
            <div className="text-4xl text-white">R$ 2.500,00</div>
          </div>
        </div>

      </div>

      <Image 
        src="/assets/saldo-ilustracao.png"
        alt="saldo"
        unoptimized
        width={0}
        height={0}
        className="w-auto h-auto m-8 md:hidden"
      />

      {/* Pixels SM */}
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute top-0 left-0 w-auto h-auto z-10 rounded-t-md rotate-180 md:hidden"
      />
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute bottom-0 right-0 w-auto h-auto z-10 rounded-b-md md:hidden"
      />

      {/* Pixels MD */}
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute top-0 right-0 w-auto h-auto z-10 rounded-t-md rotate-180 hidden md:block lg:hidden"
      />
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute bottom-0 left-0 w-auto h-auto z-10 rounded-b-md hidden md:block lg:hidden"
      />
    </div>
  )
}