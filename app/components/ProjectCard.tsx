import React from "react";
import AppButton from "./AppButton";
import Image from "next/image";
import ArrowUpRight from "./svgs/ArrowUpRight";

export interface ProjectCardProps {
	name: string;
	date: string;
	paragraphs: string[];
	link: string;
	imageComponent?: React.FC;
	imgSrc?: string;
}

const ProjectCard = ({
	name,
	date,
	paragraphs,
	link,
  imageComponent: ImageComponent,
	imgSrc,
}: ProjectCardProps) => {
	return (
		<section className="grid grid-cols-2 mb-10 border-2 border-white px-10 py-[60px]">
			<div className="flex-grow">
				<h2 className="mb-2 font-mono text-2xl font-bold">{name}</h2>
				<p className="mb-8 font-sans text-lg font-medium">{date}</p>
				<div className="flex flex-col gap-8 mb-[42px]">
					{paragraphs.map((paragraph, key) => (
						<p className="font-sans text-lg" key={key}>
							{paragraph}
						</p>
					))}
				</div>
				<AppButton label="Visit Project" icon={ArrowUpRight}/>
			</div>
			<div className="flex justify-end flex-grow">
        {ImageComponent && <ImageComponent/>}
				{/* {imgSrc && (
					<Image
						src={imgSrc}
						alt="B54 application dashboard"
						width={600}
						height={600}
					/>
				)} */}
				{/* {imageComponent && <Image} */}
			</div>
		</section>
	);
};

export default ProjectCard;
