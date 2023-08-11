import React from "react";
import StarIcon from "./svgs/StarIcon";

const AppBanner = () => {
	const stars = [
		{
			className: "top-[36px] left-[306px]",
			size: "6",
		},
		{
			className: "top-[78px] left-[1011px]",
			size: "8",
		},
		{
			className: "top-[126px] left-[680px]",
			size: "6",
		},
		{
			className: "top-[126px] left-[94px]",
			size: "8",
		},
		{
			className: "top-[177px] left-[1180px]",
			size: "6",
		},
		{
			className: "top-[330px] left-[519px]",
			size: "6",
		},
		{
			className: "top-[336px] left-[1342px]",
			size: "6",
		},
		{
			className: "top-[353px] left-[-48px]",
			size: "6",
		},
		{
			className: "top-[382px] left-[895px]",
			size: "8",
		},
		{
			className: "top-[483px] left-[403px]",
			size: "6",
		},
		{
			className: "top-[533px] left-[1055px]",
			size: "6",
		},
		{
			className: "top-[587px] left-[71px]",
			size: "6",
		},
	];

	return (
		<section className="min-h-[calc(100vh-152px)] items-end flex flex-col">
			<div className="relative flex-grow w-full">
				{stars.map((star, key) => (
					<StarIcon
						key={key}
						className={`absolute ${star.className}`}
						size={star.size}
						pathClassName="fill-foreground"
					/>
				))}
			</div>
			<h1 className="font-mono text-[180px] font-extrabold">AHMAD JINADU</h1>
		</section>
	);
};

export default AppBanner;
