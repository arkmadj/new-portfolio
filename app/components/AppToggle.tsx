'use client'

import React from "react";

type AppToggleProps = {
	onChange: () => void;
};

const AppToggle = ({onChange }: AppToggleProps) => {
	return (
		<input
			type="checkbox"
      onChange={onChange}
			className="relative shadow-lg outline-none appearance-none cursor-pointer w-[35px] h-5 border-2 border-white rounded-3xl before:transition-all before:duration-500 motion-reduce:before:transition-none before:w-5 before:h-5 before:bg-white before:absolute before:rounded-full before:-top-[2px] before:-right-[1px] checked:before:transform checked:before:-translate-x-3.5"
		/>
	);
};

export default AppToggle;