import React from "react";

const AppFooter = () => {
	const foooterLinks = [
		{
			name: "Resume",
			to: "",
		},
		{
			name: "LinkedIn",
			to: "",
		},
		{
			name: "Github",
			to: "",
		},
		{
			name: "Codepen",
			to: "",
		},
	];
	return (
		<footer className="flex justify-between mb-[50px]">
			<p>Ahmad Jinadu 2023</p>
			<ul className="flex list-none gap-[50px] items-center">
				{foooterLinks.map((link, key) => (
					<li key={key} className="cursor-pointer">
						{link.name}
					</li>
				))}
			</ul>
		</footer>
	);
};

export default AppFooter;
