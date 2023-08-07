import React from "react";
import AppButton from "./AppButton";
import Blob from "./svgs/Blob";

type Props = {};

const LimitCard = () => {
	return (
		<div className="flex flex-col items-center p-5 bg-white rounded-xl gap-[7px] absolute right-0 bottom-[46px] shadow-shara-2">
			<span className="text-xs font-medium text-gray-500">Limit Available</span>
			<span className="text-xl font-bold text-black mb-[5px]">Ksh 80,000</span>
			<p className="text-[10px] text-gray-500 mb-[5px]">
				Monthly limit: Ksh 100,000
			</p>
			<AppButton
				className="text-white bg-green-700 text-[10px]"
				label="Sell to a Customer"
			/>
		</div>
	);
};

const ScoreCard = () => {
	return (
		<div className="absolute bottom-[114px] right-[43px] flex flex-col items-center px-5 text-black bg-white py-11 rounded-xl gap-[7px] w-[325px] shadow-shara-1">
			<p className="text-xs font-medium text-gray-500">Your Shara Score</p>
			<span className="text-[43px] font-bold text-black mb-[5px]">85</span>
			<p className=" text-[10px] font-medium text-gray-400">
				You&rsquo;re doing great
			</p>
			<div className=" h-[3px] bg-red-500 w-full mb-[5px]"></div>
			<p className=" text-[10px] font-medium text-green-800">
				Pay on time to increase your monthly limit
			</p>
		</div>
	);
};

const WeekCard = () => {
	// const [activeWeek, setActiveWeek] = useState<number>(2)

	return (
		<div className="absolute bottom-[60px] right-[170px] grid w-56 grid-cols-2 gap-1 p-3 text-black bg-white shadow-shara-3 rounded-xl">
			{[2, 4, 8, 12].map((n) => (
				<div key={n} className="border-2 border-green-800 rounded-sm py-1 px-2.5">
					<span>{n} weeks</span>
				</div>
			))}
		</div>
	);
};

const SharaImage = (props: Props) => {
	return (
		<div className="relative w-full bg-red-s400 font-dm-sans">
      <Blob className="absolute w-fit right-12 bottom-8"/>
			<ScoreCard />
			<LimitCard />
			<WeekCard />
		</div>
	);
};

export default SharaImage;
