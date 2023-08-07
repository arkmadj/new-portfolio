import React from "react";

type BlobProps = {
  className?: string
}

const Blob = ({className}: BlobProps) => {
	return (
		<div className={`${className}`}>
			<svg
				width="314"
				height="393"
				viewBox="0 0 314 393"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M29.6335 110.417C0.466545 165.328 -10.0158 225.281 14.7684 282.716C36.5997 333.427 72.2378 377.854 122.777 391.011C154.344 399.198 177.781 376.522 199.332 346.606C232.28 301 262.645 252.436 294.169 205.632C326.644 157.272 315.063 110.946 286.237 77.2736C246.463 30.9371 182.415 -22.4755 115.4 10.4857C102.255 17.0127 89.4506 28.3792 78.9877 40.3025C59.7183 62.0885 42.768 85.6684 29.6335 110.417Z"
					fill="#353535"
				/>
			</svg>
		</div>
	);
};

export default Blob;
