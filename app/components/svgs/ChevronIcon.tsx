import React from "react";

type ChevronIconProps = {
	className?: string;
};

const ChevronIcon = ({ className }: ChevronIconProps) => {
	return (
		<div className={`${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="17"
				height="17"
				viewBox="0 0 17 17"
				fill="none"
			>
				<path
					d="M12.1445 6.56528L8.14453 10.5653L4.14453 6.56528"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};

export default ChevronIcon;
