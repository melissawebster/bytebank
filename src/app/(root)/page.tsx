"use client"
import { BlackTitle } from "@/src/components/text-styles";
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
    <div className="container flex flex-col items-center px-4 md:px-12 lg:px-16 xl:px-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-center lg:gap-x-4 w-full border border-0.2 rounded-lg bg-black/25 p-4">
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
        <BlackTitle className="mt-12 text-white font-extralight text-lg drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          Exclusive Advantages
        </BlackTitle>
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 mb-10 mt-5 max-w-3/4 md:max-w-full">
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
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
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
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
