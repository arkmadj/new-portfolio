"use client";

import React, { useRef } from "react";
import AppToggle from "./AppToggle";

const NavBar = () => {
	// const [isDarkMode, setIsDarkMode] = useState(false)

	// setIsDarkMode(!isDarkMode)

	const darkModeCover = useRef<HTMLDivElement>(null!);

	// const toggleDarkMode = () => {
	// 	document.body.classList.toggle("light");
	// 	const a = darkModeCover.current;
	// 	a.classList.toggle("grow-ball");
	// 	a.classList.toggle("shrink-ball")
	// 	setTimeout(() => {
	// 		a.classList.toggle("fall-black")
	// 	}, 1100);
	// 	// a.style.cla = "10";
	// 	// a.style.s = ""
	// 	// console.log({a})
	// };

	const toggleDarkMode = () => {
		document.body.classList.toggle("light");
		const a = darkModeCover.current;
		!a.classList.contains("grow-ball") ? addDarkMode() : addLightMode();
	};

	const addDarkMode = () => {
		const a = darkModeCover.current;
		a.classList.remove("shrink-ball");
		a.classList.add("grow-ball");
	};

	const addLightMode = () => {
		const a = darkModeCover.current;
		a.classList.remove("grow-ball");
		a.classList.add("shrink-ball");
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
						<span className="text-white">{link.name}</span>
					</li>
				))}
				<li className="relative">
					<AppToggle onChange={toggleDarkMode} className="mt-[3px]" />
					<div
						ref={darkModeCover}
						className="absolute pointer-events-none mix-blend-difference z-10 -top-10 -right-10 w-[100px] h-[100px] bg-foreground rounded-full transform origin-center scale-[0.001] transition-transform duration-1000"
					></div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
