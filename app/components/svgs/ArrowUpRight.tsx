import React from "react";

type ArrowUpRightProps = {
	className?: string;
};

const ArrowUpRight = ({ className }: ArrowUpRightProps) => {
	return (
		<div className={`${className}`}>
			<svg
				width="20"
				height="21"
				viewBox="0 0 20 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.83337 14.4493L14.1667 6.11599M14.1667 6.11599V14.4493M14.1667 6.11599H5.83337"
					stroke="#1B1B1B"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};

export default ArrowUpRight;