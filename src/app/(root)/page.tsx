"use client"
import { BlackTitle } from "@/src/components/text-styles";
import ilustracao from "@/public/assets/ilustracao-home.svg"
import { useBreakpoint } from "@/src/utils/usebreakpoint";
import Image from "next/image"
import { BlackButtonGreenTxt, BlackButtonWhiteTxt, GhostButtonGreenTxt, TranspButtonBlackTxt } from "@/src/components/buttons";

export default function Home() {

  const { isMobile, isTablet, isDesktop } = useBreakpoint()

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col lg:flex-row md:items-center lg:gap-x-8 lg:w-[85%]">
        <BlackTitle className="w-full md:w-3/4 text-center mt-4 lg:mt-0 ">
          <p>
            Experimente mais liberdade no controle da sua vida financeira.
          </p> 
          <p>
            Crie sua conta com a gente!
          </p>
        </BlackTitle>
        <Image
          src={ilustracao}
          alt="Ilustracao"
          className="mt-8"
        />
      </div>

      {isMobile && (
        <div className="w-full flex justify-between mt-4 gap-x-4">
          <BlackButtonWhiteTxt className="w-[calc(50%-8px)]">Abrir conta</BlackButtonWhiteTxt>
          <TranspButtonBlackTxt className="w-[calc(50%-8px)]">Já tenho conta</TranspButtonBlackTxt>
        </div>
      )}

    </div>
  );
}
