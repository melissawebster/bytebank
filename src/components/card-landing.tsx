import React from "react";

interface CardLangingProps {
	img: React.ReactNode;
	title: string;
	description: string; 
}

export default function CardLanding({ img, title, description }: CardLangingProps) {
	return (
		<div className="flex flex-col items-center w-full md:w-1/2 border p-4 rounded-lg bg-black/25">
			<div className="drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">
        {img}
      </div>
			<div className="lime-green font-electrolize mt-2 drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">
        {title}
      </div>
			<div className="text-white text-center font-light text-sm leading-relaxed mt-3 drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]">
			  {description}
			</div>
		</div>
	);
}