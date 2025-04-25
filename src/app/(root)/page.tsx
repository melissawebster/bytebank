"use client"
import { BlackTitle } from "@/src/components/text-styles";
import ilustracao from "@/public/assets/ilustracao-home.svg"
import presente from "@/public/assets/icone-presente.png"
import saque from "@/public/assets/icone-saque.png"
import pontos from "@/public/assets/icone-pontos.png"
import dispositivos from "@/public/assets/icone-dispositivos.png"
import { useBreakpoint } from "@/src/utils/usebreakpoint";
import Image from "next/image"
import { BlackButtonWhiteTxt, TranspButtonBlackTxt } from "@/src/components/buttons";
import CardLanding from "@/src/components/card-landing";
import ModalSignUp from "@/src/components/modal-signup";
import ModalLogin from "@/src/components/modal-login";
import { useState } from "react";
import { Link } from "lucide-react";

export default function Home() {

  const { isMobile } = useBreakpoint()

    const [isAbrirContaOpen, setIsAbrirContaOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
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


          <BlackButtonWhiteTxt 
            className="w-[calc(50%-8px)]" 
            onClick={() => setIsAbrirContaOpen(true)}
          >
            Abrir conta
          </BlackButtonWhiteTxt>
  
          <ModalSignUp isOpen={isAbrirContaOpen} close={() => setIsAbrirContaOpen(false)} />

          <TranspButtonBlackTxt 
            className="w-[calc(50%-8px)]"
            onClick={() => setIsLoginOpen(true)}
          >
            Já tenho conta
          </TranspButtonBlackTxt>

          <ModalLogin isOpen={isLoginOpen} close={() => setIsLoginOpen(false)} />

        </div>
      )}

      <div className="flex flex-col items-center">
        <BlackTitle className="mt-12">
          Vantagens do nosso banco:
        </BlackTitle>
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 my-10 max-w-3/4 md:max-w-full">
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
            <CardLanding
              img={<Image src={presente} alt="Conta e cartão gratuitos" />}
              title="Conta e cartão gratuitos"
              description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
            />
            <CardLanding
              img={<Image src={saque} alt="Saques sem custo" />}
              title="Saques sem custo"
              description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
            <CardLanding
              img={<Image src={pontos} alt="Programa de pontos" />}
              title="Programa de pontos"
              description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
            />
            <CardLanding
              img={<Image src={dispositivos} alt="Seguro Dispositivos" />}
              title="Seguro Dispositivos"
              description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
            />
          </div>
        </div>
      </div>

    </div>
  );
}
