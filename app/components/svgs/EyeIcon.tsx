import React from "react";

type EyeIconProps = {
	className?: string;
};

const EyeIcon = ({ className }: EyeIconProps) => {
	return (
		<div className={`${className}`}>
			<svg
				width="16"
				height="13"
				viewBox="0 0 16 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.14449 1.23195C3.47782 1.23195 0.811157 6.56528 0.811157 6.56528C0.811157 6.56528 3.47782 11.8986 8.14449 11.8986C12.8112 11.8986 15.4778 6.56528 15.4778 6.56528C15.4778 6.56528 12.8112 1.23195 8.14449 1.23195Z"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};

export default EyeIcon;
