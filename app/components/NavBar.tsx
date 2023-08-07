"use client";

import React from "react";
import AppToggle from "./AppToggle";

const NavBar = () => {
	// const [isDarkMode, setIsDarkMode] = useState(false)

	// setIsDarkMode(!isDarkMode)

	const toggleDarkMode = () => {
		document.body.classList.toggle("dark")
	};

	const addDarkMode = () => {
		const body = document.body;
		body.classList.remove("light-mode");
		body.classList.add("dark-mode");
	};

	const addLightMode = () => {
		const body = document.body;
		body.classList.remove("dark-mode");
		body.classList.add("light-mode");
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
				<div className=" w-6 h-[2px] bg-white mt-[11px]"></div>
				<div className="flex flex-col gap-4">
					<p>Software engineer with 4 years experience</p>
					<p>Based in Lagos, Nigeria 09:23AM</p>
				</div>
			</div>
			<ul className="flex list-none gap-[50px]">
				{navLinks.map((link, key) => (
					<li key={key} className="cursor-pointer">
						{link.name}
					</li>
				))}
				<li>
					<AppToggle onChange={toggleDarkMode} />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
