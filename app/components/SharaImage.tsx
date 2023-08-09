import React from "react";
import AppButton from "./AppButton";
import Blob from "./svgs/Blob";
import ShoppingCart from "./svgs/ShoppingCartIcon";

type Props = {};

const LimitCard = () => {
	return (
		<div className="flex flex-col items-center p-5 bg-shara-background rounded-xl gap-[7px] absolute right-0 bottom-[46px] shadow-shara-2">
			<span className="text-xs font-medium text-shara-gray-4">Limit Available</span>
			<span className="text-xl font-bold text-shara-primary mb-[5px]">Ksh 80,000</span>
			<p className="text-[10px] text-shara-gray-3 mb-[5px]">
				Monthly limit: Ksh 100,000
			</p>
			<AppButton
				className="text-white bg-shara-green-1 text-[10px] rounded-[7px] px-[7px] py-[3px]"
				label="Sell to a Customer"
				leftIcon={() => (
					<div className="flex items-center justify-center w-6 h-6 border border-white rounded-full gap-[3px]">
						<ShoppingCart />
					</div>
				)}
			/>
		</div>
	);
};

const ScoreCard = () => {
	return (
		<div className="absolute bottom-[114px] right-[43px] flex flex-col items-center px-5 text-black bg-shara-background py-11 rounded-xl gap-[7px] w-[325px] shadow-shara-1">
			<p className="text-xs font-medium text-shara-gray-4">Your Shara Score</p>
			<span className="text-[43px] font-bold text-shara-primary mb-[5px]">
				85
			</span>
			<p className=" text-[10px] font-medium text-shara-gray-4">
				You&rsquo;re doing great
			</p>
			<div className=" h-[3px] bg-red-500 w-full mb-[5px]"></div>
			<p className=" text-[10px] font-medium text-shara-green-2">
				Pay on time to increase your monthly limit
			</p>
		</div>
	);
};

const WeekCard = () => {
	// const [activeWeek, setActiveWeek] = useState<number>(2)

	return (
		<div className="absolute bottom-[68px] right-[160px] grid w-56 grid-cols-2 gap-1 p-3 text-black bg-shara-background shadow-shara-3 rounded-xl">
			{[2, 4, 8, 12].map((n) => (
				<div
					key={n}
					className="flex justify-between items-center border-2 border-green-800 rounded-sm py-1 px-2.5"
				>
					<div className="w-3 h-3 rounded-full ring-2 ring-offset-1 bg-shara-green-1 ring-shara-green-1"></div>
					<span className="text-shara-green-1 text-[10px]">{n} weeks</span>
				</div>
			))}
		</div>
	);
};

const SharaImage = (props: Props) => {
	return (
		<div className="relative w-full font-dm-sans">
			<Blob
				className="absolute w-fit right-12 bottom-8"
				blobClassName="fill-blob"
			/>
			<ScoreCard />
			<LimitCard />
			<WeekCard />
		</div>
	);
};

export default SharaImage;
