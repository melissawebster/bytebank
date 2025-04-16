import React from "react";

interface CardLangingProps {
	img: React.ReactNode;
	title: string;
	description: string; 
}

export default function CardLanding({ img, title, description }: CardLangingProps) {
	return (
		<div className="flex flex-col items-center w-full md:w-1/2">
			<div>{img}</div>
			<div className="green-text">{title}</div>
			<div className="text-slate-600 text-center">{description}</div>
		</div>
	);
}