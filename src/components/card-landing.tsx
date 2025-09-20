import React, { ReactNode } from "react";
import { whiteTextStyle } from "./shared";
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
      className="flex flex-col items-center w-full md:w-1/2 px-4 py-8 rounded-lg border border-white 
			bg-gradient-card"
    >
      <div className="drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">{img}</div>
      <div
        className="shiny-title mt-2 text-center text-lg"
      >
        {title}
      </div>
      <div className={`${whiteTextStyle} text-center text-sm my-2 h-[45px]`}>
        {description}
      </div>
      <BlackButtonGreenTxt className="mt-3">
        Learn more
      </BlackButtonGreenTxt>
    </div>
  );
}
