"use client";

import React from "react";

type AppToggleProps = {
	onChange: () => void;
	className?: string;
};

const AppToggle = ({ onChange, className }: AppToggleProps) => {
	return (
		<input
			type="checkbox"
			onChange={onChange}
			className={`relative outline-none appearance-none cursor-pointer w-[35px] h-5 border-2 border-foreground rounded-3xl before:transition-transform before:duration-500 motion-reduce:before:transition-none before:w-5 before:h-5 before:bg-foreground before:absolute before:rounded-full before:-top-[2px] before:-right-[1px] checked:before:transform checked:before:-translate-x-3.5 ${className}`}
		/>
	);
};

export default AppToggle;
