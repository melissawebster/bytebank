import React from "react";

interface CardLangingProps {
	img: React.ReactNode;
	title: string;
	description: string; 
}

export default function CardLanding({ img, title, description }: CardLangingProps) {
	return (
		<div className="flex flex-col items-center w-full md:w-1/2 border p-4 rounded-lg bg-black/25">
			<div>{img}</div>
			<div className="lime-green font-electrolize mt-2">{title}</div>
			<div className="text-white text-center font-light text-sm leading-relaxed mt-3">{description}</div>
		</div>
	);
}