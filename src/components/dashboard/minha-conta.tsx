import Image from "next/image";
import Input from "../label-error-input";
import { OrangeButtonWhiteTxt } from "../buttons";

export default function Conta() {
  return (
    <div className="relative flex flex-col items-center w-full rounded-md bg-gray-400 p-6 md:px-[10%] min-h-[400px]">
      <div className="w-full flex flex-col items-start">

        <div className="text-xl font-semibold mb-6">Minha conta</div>

        <div className="w-full flex flex-col lg:flex-row">
          <Image 
            src="/assets/ilustracao-minhaconta.svg"
            alt="minha-conta"
            unoptimized
            width={446}
            height={381}
            className="hidden lg:block"
          />

          <form
            className="w-full flex flex-col gap-y-4"
          >
            <Input
              label='Nome'
              className="w-full md:w-2/3 lg:w-full"
            />

            <Input
              label='E-mail'
              className="w-full md:w-2/3 lg:w-full"
            />

            <Input
              label='Senha'
              className="w-full md:w-2/3 lg:w-full"
            />

            <OrangeButtonWhiteTxt
              type="submit"
              className="mt-4 w-full md:w-2/3"
            >
              Salvar alterações
            </OrangeButtonWhiteTxt>

          </form>

          <Image 
            src="/assets/ilustracao-minhaconta.svg"
            alt="minha-conta"
            unoptimized
            width={446}
            height={381}
            className="lg:hidden mt-6"
          />

        </div>

      </div>

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
        className="absolute top-0 right-0 w-auto h-auto z-10 rounded-t-md rotate-180 hidden md:block"
      />
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute bottom-0 left-0 w-auto h-auto z-10 rounded-b-md hidden md:block"
      />
    </div>
  )
}