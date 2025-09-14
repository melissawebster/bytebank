import { Eye } from "lucide-react";
import Image from "next/image";
import { cardStyle } from "../shared";

export default function Balance() {
  return (
    <div className={`${cardStyle} relative flex flex-col items-center w-full md:px-[10%] min-h-[400px]`}>
      <div className="w-full flex flex-col md:flex-row items-center m-8 md:justify-between">
        <div className="space-y-4 mb-12">
          <div className="text-2xl text-white">Hi Joana! :&#41;</div>
          <div className="text-sm text-white">Thursday, 08/09/2022</div>
        </div>
        <div>
          <div className="flex items-center gap-x-6 border-b pb-4 border-b-white">
            <div className="text-xl text-white">Balance</div>
            <Eye color="#FFF" />
          </div>
          <div className="mt-3">
            <div className="text-lg text-white">Checking account</div>
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

    </div>
  );
}
