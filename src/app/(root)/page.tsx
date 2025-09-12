"use client"
import { WhiteTitle } from "@/src/components/text-styles";
import Image from "next/image"
import { BlackButtonGreenTxt, GreenButtonBlackTxt } from "@/src/components/buttons";
import CardLanding from "@/src/components/card-landing";
import ModalSignUp from "@/src/components/modal-signup";
import ModalLogin from "@/src/components/modal-login";
import { useState } from "react";


export default function Home() {

    const [isAbrirContaOpen, setIsAbrirContaOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <div className="container flex flex-col items-center p-4 md:px-12 lg:px-16 xl:px-20">
      {/* Hero Section */}
      <div className="flex flex-col md:items-center lg:gap-x-4 w-full rounded-lg bg-black/30 px-4 py-6">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-[70%] text-center md:text-left md:ml-2
             text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 
             font-electrolize leading-snug opacity-100 
             bg-gradient-to-r from-lime-300 to-cyan-400 
             text-transparent bg-clip-text drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
            Experience&nbsp;greater&nbsp;freedom<br />in&nbsp;your&nbsp;financial&nbsp;life
          </div>
          <div className="flex-1 mx-auto flex w-[80%] md:w-[30%] justify-center">
            <Image
              src="/assets/credit-cards.svg"
              width={428}
              height={280}
              alt="credit"
              className="max-w-full object-contain"
            />
          </div>
        </div>
        <div className="w-full text-white leading-relaxed font-light text-sm lg:text-lg mt-0 md:-mt-8 lg:-mt-16 md:ml-3 drop-shadow-[0_0_2px_rgba(0,0,0,0.2)]">
          <span>ByteBank is more than a bank — it’s your partner in financial freedom.&nbsp;</span>
          <span className="hidden md:block h-1"></span>
          <span className="mt-0 md:-mt-4">Simple, secure, and built for the digital world, we offer the tools and benefits that fit your lifestyle.</span>
        </div>
      </div>
      {/* */}

      <div className="w-full flex justify-between mt-4 gap-x-4 md:hidden">

        <GreenButtonBlackTxt 
          className="w-[calc(50%-8px)]" 
          onClick={() => setIsAbrirContaOpen(true)}
        >
          Open Account
        </GreenButtonBlackTxt>

        <ModalSignUp isOpen={isAbrirContaOpen} close={() => setIsAbrirContaOpen(false)} />

        <BlackButtonGreenTxt 
          className="w-[calc(50%-8px)]"
          onClick={() => setIsLoginOpen(true)}
        >
          Sign In
        </BlackButtonGreenTxt>

        <ModalLogin isOpen={isLoginOpen} close={() => setIsLoginOpen(false)} />

      </div>

      <div className="flex flex-col items-center">
        <div className="mt-12 font-extralight text-3xl 
            font-electrolize leading-snug opacity-100 
            bg-gradient-to-r from-cyan-300 to-lime-200 
            text-transparent bg-clip-text drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
          Benefits
        </div>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 mb-10 mt-5 max-w-full">
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10 lg:w-1/2">
            <CardLanding
              img={<Image src='/assets/icon-card.svg' width={80} height={80} alt="Free account & card" />}
              title="Free account & card"
              description="A free digital account. No monthly fees, ever."
            />
            <CardLanding
              img={<Image src='/assets/icon-money.svg' width={80} height={80} alt="Free cash withdrawals" />}
              title="Free cash withdrawals"
              description="You can withdraw cash for free 4 times a month at any ATM."
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10 lg:w-1/2">
            <CardLanding
              img={<Image src='/assets/icon-points.svg' width={80} height={80} alt="Points program" />}
              title="Points program"
              description="Earn points with your credit card purchases without paying a membership fee!"
            />
            <CardLanding
              img={<Image src='/assets/icon-security.svg' width={80} height={80} alt="Device Insurance" />}
              title="Device Insurance"
              description="Your mobile devices are protected for a small symbolic fee."
            />
          </div>
        </div>
      </div>

    </div>
  );
}
