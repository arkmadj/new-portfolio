import React from "react";

type PhoneIconProps = {
	className?: string;
};

const PhoneIcon = ({ className }: PhoneIconProps) => {
	return (
		<div className={`${className}`}>
			<svg
				width="25"
				height="25"
				viewBox="0 0 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.52663 10.4258C7.44302 14.5997 10.853 17.9182 15.0926 19.7172L15.7722 20.02C17.327 20.7127 19.1547 20.1864 20.1031 18.7729L20.9912 17.4492C21.2799 17.0188 21.192 16.4392 20.7886 16.1138L17.7768 13.684C17.3344 13.3271 16.6839 13.4102 16.3455 13.8669L15.4137 15.1241C13.0229 13.9448 11.0819 12.0037 9.90253 9.61293L11.1598 8.68121C11.6164 8.34278 11.6996 7.69227 11.3427 7.24989L8.91281 4.23794C8.58746 3.83466 8.00796 3.7467 7.57759 4.03526L6.24475 4.92896C4.82241 5.88267 4.29902 7.72552 5.00776 9.28447L5.52585 10.4241L5.52663 10.4258Z"
					fill="black"
				/>
			</svg>
		</div>
	);
};

export default PhoneIcon;