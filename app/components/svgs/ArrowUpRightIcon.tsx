import React from "react";

type ArrowUpRightIconProps = {
	className?: string;
};

const ArrowUpRightIcon = ({ className }: ArrowUpRightIconProps) => {
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
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default ArrowUpRightIcon;
