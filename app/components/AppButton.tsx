import Image from "next/image";
import React from "react";

export interface ButtonProps {
	label: string;
	rightIcon?: React.FC;
	leftIcon?: React.FC;
	className?: string;
}

const AppButton = ({
	label,
	rightIcon: RightIcon,
	leftIcon: LeftIcon,
	className,
}: ButtonProps) => {
	return (
		<button
			className={`flex gap-1 items-center font-sans text-black border-none outline-none px-6 py-3 rounded font-bold ${className}`}
		>
			{LeftIcon && <LeftIcon />}
			{label}
			{RightIcon && <RightIcon />}
		</button>
	);
};

export default AppButton;
