import React from "react";

const NavBar = () => {
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
		<nav className="flex flex-row justify-between py-10 px-[70px] font-sans text-lg font-medium">
			<div className="">
				<p>Software engineer with 4 years experience</p>
				<p>Based in Lagos, Nigeria 09:23AM</p>
			</div>
			<div>
				<ul className="flex list-none gap-[50px]">
					{navLinks.map((link, key) => (
						<li key={key} className="cursor-pointer">
							{link.name}
						</li>
					))}
					<li></li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
