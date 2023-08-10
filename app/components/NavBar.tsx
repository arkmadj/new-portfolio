"use client";

import React, { useState } from "react";
import AppToggle from "./AppToggle";
import { motion } from "framer-motion";

const NavBar = () => {
	const [isLight, setIsLight] = useState(false);

	const variants = {
		light: {
			scale: [0, 99, 99, 99, 99, 99, 99, 99, 99, 100],
		},
		dark: {
			scale: [100, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		},
	};

	const toggleDarkMode = () => {
		const body = document.body;
		!body.classList.contains("light") ? addLightMode() : removeLightMode();
	};

	const addLightMode = () => {
		setIsLight((isLight) => !isLight);
		document.body.classList.toggle("light");
		const root = document.querySelector(":root")!
		root.classList.toggle('light-bar')
	};

	const removeLightMode = () => {
		setIsLight((isLight) => !isLight);
		setTimeout(() => {
			document.body.classList.toggle("light");
			const root = document.querySelector(":root")!
			root.classList.toggle('light-bar')
		}, 1000);
	};

	const navLinks = [
		{
			name: "Resume",
			to: "",
		},
		{
			name: "About",
			to: "",
		},
		{
			name: "Contact",
			to: "",
		},
	];
	return (
		<nav className="flex justify-between py-10 font-sans text-lg font-medium">
			<div className="flex gap-[13px]">
				<div className=" w-6 h-[2px] bg-foreground mt-[11px]"></div>
				<div className="flex flex-col gap-4">
					<p>Software engineer with 4 years experience</p>
					<p>Based in Lagos, Nigeria 09:23AM</p>
				</div>
			</div>
			<ul className="flex list-none gap-[50px]">
				{navLinks.map((link, key) => (
					<li key={key} className="cursor-pointer">
						<span className="text-foreground">{link.name}</span>
					</li>
				))}
				<li className="relative">
					<AppToggle onChange={toggleDarkMode} className="mt-[3px]" />
					{true && (
						<motion.div
							initial={false}
							animate={isLight ? "light" : "dark"}
							variants={variants}
							transition={{
								times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
								duration: 0.4,
								ease: "easeIn",
							}}
							className="absolute pointer-events-none z-10 -top-10 -right-10 w-[100px] h-[100px] bg-white rounded-full transform origin-center scsale-[1] transition-transform duration-1000 mix-blend-difference"
						></motion.div>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
