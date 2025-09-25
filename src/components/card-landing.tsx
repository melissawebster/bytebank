import React, { ReactNode } from "react";
import { BlackButtonGreenTxt } from "./buttons";

interface CardLangingProps {
  img: React.ReactNode;
  title: string;
  description: ReactNode;
}

export default function CardLanding({
  img,
  title,
  description,
}: CardLangingProps) {
  return (
    <div
      className="landing-card-style landing-card-style--brighter 
      flex flex-col items-center w-full md:w-1/2 px-4 py-8"
    >
      <div className="drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">{img}</div>
      <div
        className="shiny-title mt-2 text-center text-lg"
      >
        {title}
      </div>
      <div className="white-text-style text-center text-sm my-2 h-[45px]">
        {description}
      </div>
      <BlackButtonGreenTxt className="mt-3">
        Learn more
      </BlackButtonGreenTxt>
    </div>
  );
}
