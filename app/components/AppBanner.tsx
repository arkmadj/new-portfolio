"use client";

import React, { useEffect } from "react";
import StarIcon from "./svgs/StarIcon";
import { motion, useScroll, useAnimate, useTransform } from "framer-motion";
import { scroll } from "framer-motion/dom";

const AppBanner = () => {
	const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, -1])
	const smallStars = [
		{
			className: "top-[36px] left-[306px]",
			size: "3",
		},
		{
			className: "top-[78px] left-[1011px]",
			size: "4",
		},
		{
			className: "top-[126px] left-[680px]",
			size: "3",
		},
		{
			className: "top-[126px] left-[94px]",
			size: "4",
		},
		{
			className: "top-[177px] left-[1180px]",
			size: "3",
		},
		{
			className: "top-[330px] left-[519px]",
			size: "3",
		},
		{
			className: "top-[336px] left-[1342px]",
			size: "4",
		},
		{
			className: "top-[353px] left-[-48px]",
			size: "3",
		},
		{
			className: "top-[382px] left-[895px]",
			size: "3",
		},
		{
			className: "top-[483px] left-[403px]",
			size: "3",
		},
		{
			className: "top-[533px] left-[1055px]",
			size: "3",
		},
		{
			className: "top-[587px] left-[71px]",
			size: "3",
		},
		// mirror stars
		{
			className: "top-[606px] left-[306px]",
			size: "3",
		},
		{
			className: "top-[648px] left-[1011px]",
			size: "4",
		},
		{
			className: "top-[696px] left-[680px]",
			size: "3",
		},
		{
			className: "top-[696px] left-[94px]",
			size: "4",
		},
		{
			className: "top-[747px] left-[1180px]",
			size: "3",
		},
		{
			className: "top-[900px] left-[519px]",
			size: "3",
		},
		{
			className: "top-[906px] left-[1342px]",
			size: "3",
		},
		{
			className: "top-[923px] left-[-48px]",
			size: "3",
		},
		{
			className: "top-[952px] left-[895px]",
			size: "4",
		},
		{
			className: "top-[1053px] left-[403px]",
			size: "3",
		},
		{
			className: "top-[1103px] left-[1055px]",
			size: "3",
		},
		{
			className: "top-[1157px] left-[71px]",
			size: "3",
		},
	];
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
		// mirror stars
		{
			className: "top-[606px] left-[306px]",
			size: "6",
		},
		{
			className: "top-[648px] left-[1011px]",
			size: "8",
		},
		{
			className: "top-[696px] left-[680px]",
			size: "6",
		},
		{
			className: "top-[696px] left-[94px]",
			size: "8",
		},
		{
			className: "top-[747px] left-[1180px]",
			size: "6",
		},
		{
			className: "top-[900px] left-[519px]",
			size: "6",
		},
		{
			className: "top-[906px] left-[1342px]",
			size: "6",
		},
		{
			className: "top-[923px] left-[-48px]",
			size: "6",
		},
		{
			className: "top-[952px] left-[895px]",
			size: "8",
		},
		{
			className: "top-[1053px] left-[403px]",
			size: "6",
		},
		{
			className: "top-[1103px] left-[1055px]",
			size: "6",
		},
		{
			className: "top-[1157px] left-[71px]",
			size: "6",
		},
	];

	return (
		<section className="min-h-[calc(100vh-152px)] items-end flex flex-col pointer-events-none">
			<motion.div
				initial={{
					translateY: 0,
				}}
				animate={{
					translateY: -570,
				}}
				transition={{
					repeat: Infinity,
					duration: 30,
					repeatType: "loop",
					ease: "linear",
				}}
				className="relative flex-grow w-full"
			>
				{stars.map((star, key) => (
					<StarIcon
						key={key}
						className={`absolute ${star.className}`}
						size={star.size}
						pathClassName="fill-foreground"
					/>
				))}
			</motion.div>
			<motion.div
				initial={{
					translateY: 0,
				}}
				animate={{
					translateY: -570,
				}}
				transition={{
					repeat: Infinity,
					duration: 15,
					repeatType: "loop",
					ease: "linear",
				}}
				className="relative flex-grow w-full"
			>
				{smallStars.map((star, key) => (
					<StarIcon
						key={key}
						className={`absolute ${star.className}`}
						size={star.size}
						pathClassName="fill-foreground"
					/>
				))}
			</motion.div>
			<motion.h1
				className="font-mono text-[180px] font-extrabold"
				style={{ scale, opacity: opacity}}
			>
				AHMAD JINADU
			</motion.h1>
		</section>
	);
};

export default AppBanner;
