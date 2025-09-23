"use client";
import Image from "next/image";
import {
  BlackButtonGreenTxt,
  GreenButtonBlackTxt,
} from "@/src/components/buttons";
import CardLanding from "@/src/components/card-landing";
import ModalSignUp from "@/src/components/modal-signup";
import ModalLogin from "@/src/components/modal-login";
import { useState } from "react";
import {
  blueCardStyle,
  whiteTextStyle,
} from "@/src/components/shared";

export default function Home() {
  const [isOpenAccountOpen, setIsOpenAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="container flex flex-col items-center p-4 md:px-12 lg:px-16 xl:px-20">
      {/* Hero Section */}
      <div
        className={`${blueCardStyle} flex flex-col md:items-center lg:gap-x-4 w-full px-4 py-6`}
      >
        <div className="flex flex-col md:flex-row w-full">
          <div
            className={`w-full md:w-[70%] text-center md:text-left md:ml-2
             text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 
             leading-snug opacity-100 
             shiny-title`}
          >
            Experience&nbsp;greater&nbsp;freedom
            <br />
            in&nbsp;your&nbsp;financial&nbsp;life
          </div>
          <div className="flex-1 mx-auto flex w-[80%] md:w-[35%] justify-center">
            <Image
              src="/assets/credit-cards.svg"
              width={500}
              height={280}
              alt="card"
              className="max-w-full object-contain"
            />
          </div>
        </div>
        <div
          className={`${whiteTextStyle} w-full text-sm lg:text-lg mt-0 md:-mt-8 lg:-mt-20 md:ml-3 drop-shadow-[0_0_2px_rgba(0,0,0,0.2)]`}
        >
          <span>
            ByteBank is more than a bank &mdash; it&rsquo;s your partner in
            financial freedom.&nbsp;
          </span>
          <span className="hidden md:block h-1"></span>
          <span className="mt-0 md:-mt-4">
            We offer the tools and benefits that fit your lifestyle.
          </span>
        </div>
      </div>
      {/* */}

      <div className="w-full flex justify-between mt-4 gap-x-4 md:hidden">
        <GreenButtonBlackTxt
          className="w-[calc(50%-8px)]"
          onClick={() => setIsOpenAccountOpen(true)}
        >
          Open Account
        </GreenButtonBlackTxt>

        <ModalSignUp
          isOpen={isOpenAccountOpen}
          close={() => setIsOpenAccountOpen(false)}
        />

        <BlackButtonGreenTxt
          className="w-[calc(50%-8px)]"
          onClick={() => setIsLoginOpen(true)}
        >
          Sign In
        </BlackButtonGreenTxt>

        <ModalLogin isOpen={isLoginOpen} close={() => setIsLoginOpen(false)} />
      </div>

      <div className="flex flex-col items-center w-full">
        <div
          className="shiny-title mt-12 font-extralight text-3xl opacity-100"
        >
          Services
        </div>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 mb-10 mt-5 w-full">
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10 lg:w-1/2">
            <CardLanding
              img={
                  <Image
                    src="/assets/icon-account.svg"
                    width={100}
                    height={80}
                    alt="Checking Account"
                    className="object-contain"
                  />
              }
              title="Checking Account"
              description={
                <span>
                  Your everyday finances <br />
                  made simple.
                </span>
              }
            />
            <CardLanding
              img={
                <Image
                  src="/assets/icon-card.svg"
                  width={107}
                  height={80}
                  alt="Smart Card"
                />
              }
              title="Smart Card"
              description={
                <span>
                  One card for everyday payments <br />
                  and credit flexibility.
                </span>
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10 lg:w-1/2">
            <CardLanding
              img={
                <Image
                  src="/assets/icon-points.svg"
                  width={109}
                  height={80}
                  alt="Points program"
                />
              }
              title="Points program"
              description={
                <span>
                  Turn every purchase <br />
                  into rewards.
                </span>
              }
            />
            <CardLanding
              img={
                <Image
                  src="/assets/icon-atm.svg"
                  width={104}
                  height={80}
                  alt="Free ATM Access"
                />
              }
              title="Free ATM Access"
              description={
                <span>
                  Access your money,
                  <br />
                  absolutely fee-free.
                </span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
