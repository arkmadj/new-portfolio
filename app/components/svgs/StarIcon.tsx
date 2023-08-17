import React from "react";

type StarIconProps = {
	className?: string;
	size: string;
	pathClassName?: string;
};

const StarIcon = ({
	className,
	size,
	pathClassName,
}: StarIconProps) => {
	return (
		<div className={`${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 7 8"
				fill="none"
			>
				<path
					className={`${pathClassName}`}
					d="M0 4.13083C1.84362 3.28647 3.25268 1.80285 3.92096 0.00238053C3.96373 -0.106458 4.65865 3.54954 7 4.25452C7 4.25452 4.16686 5.51111 3.49599 7.99956C3.49866 8.03419 3.33562 6.02315 0 4.13083Z"
				/>
			</svg>
		</div>
	);
};

export default StarIcon;
