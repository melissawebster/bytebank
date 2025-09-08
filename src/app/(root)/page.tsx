"use client"
import { BlackTitle } from "@/src/components/text-styles";
import ilustracao from "@/public/assets/ilustracao-home.svg"
import presente from "@/public/assets/icone-presente.png"
import saque from "@/public/assets/icone-saque.png"
import pontos from "@/public/assets/icone-pontos.png"
import dispositivos from "@/public/assets/icone-dispositivos.png"
import Image from "next/image"
import { BlackButtonWhiteTxt, TranspButtonBlackTxt } from "@/src/components/buttons";
import CardLanding from "@/src/components/card-landing";
import ModalSignUp from "@/src/components/modal-signup";
import ModalLogin from "@/src/components/modal-login";
import { useState } from "react";


export default function Home() {

    const [isAbrirContaOpen, setIsAbrirContaOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <div className="container flex flex-col items-center px-4 md:px-12 lg:px-16 xl:px-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-center lg:gap-x-4 w-full border rounded-lg bg-black/25 p-4">
        <div className="w-full md:w-3/4 text-center mt-4 md:mt-0 text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl lime-green opacity-80 
                        font-electrolize leading-snug drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">
          Experience&nbsp;greater&nbsp;freedom<br />in&nbsp;your&nbsp;financial&nbsp;life
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/credit-cards.svg"
            width={428}
            height={280}
            alt="credit"
            className="max-w-full object-contain"
          />
        </div>
      </div>
      {/* */}

      <div className="w-full flex justify-between mt-4 gap-x-4 md:hidden">

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
