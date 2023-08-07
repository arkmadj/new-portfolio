import Image from "next/image";
import React from "react";

const B54Image = () => {
	const businessInfo = [
		{
			title: "BUSINESS MODEL",
			value: "MARKETPLACE",
		},
		{
			title: "SECTOR",
			value: "AGRICULTURE",
		},
	];

	return (
		<div className="flex flex-col p-6 bg-white gap-2.5 w-[354px] font-dm-sans rounded-2xl">
			<div className="flex gap-2 mb-1.5">
				<Image
					src="/nigeria-flag.png"
					alt="Flag of Nigeria"
					width={25}
					height={10}
				/>
				<span className="text-base font-bold text-black">Thando Textiles</span>
			</div>
			<div className="flex flex-col gap-3 p-3 bg-gray-100">
				<span className=" text-[10px] text-gray-500">TEAM</span>
				<div className="flex justify-between">
					<div className="flex gap-3">
						{[1, 2, 3, 4, 5].map((n) => (
							<Image
								src="/avatar.png"
								alt="Female Bit-emoji avatar image"
								width={30}
								height={30}
								key={n}
							/>
						))}
					</div>
					<div className="flex gap-12"></div>
				</div>
			</div>
			<div className="flex px-3 bg-gray-100 py-[18px] items-center justify-between">
				<div className="flexflex-col gap-1.5">
					<span className="text-gray-300 text-[10px] font-medium">PHONE NUMBER</span>
					<p className="text-xs font-bold text-gray-500">+243 908 9023 321</p>
				</div>
				<div className="bg-gray-300 w-[35px] h-[35px] rounded-full"></div>
			</div>
			<div className="flex gap-[7px]">
				{businessInfo.map((info, key) => (
					<div
						key={key}
						className="flex px-3 bg-gray-100 py-[18px] flex-col gap-1.5 flex-grow"
					>
						<span className="text-gray-300 text-[10px] font-medium">
							{info.title}
						</span>
						<span className="text-xs font-bold text-gray-500">
							{info.value}
						</span>
					</div>
				))}
			</div>
			<div className="flex px-3 bg-gray-100 py-[18px] flex-col gap-1.5">
				<span className="text-gray-300 text-[10px] font-medium">
					DESCRIPTION
				</span>
				<p className="text-xs font-bold text-gray-500">
					We provide textile and textile manufacturing...
				</p>
			</div>
		</div>
	);
};

export default B54Image;
