import React from "react";

export interface ProjectCardProps {
	name: string;
	date: string;
	paragraphs: string[];
	link: string;
	imgSrc: string;
}

const ProjectCard = ({
	name,
	date,
	paragraphs,
	link,
	imgSrc,
}: ProjectCardProps) => {
	return (
		<section className="flex">
			<div>
				<h2>{name}</h2>
				<p>{date}</p>
				<div>
					{paragraphs.map((paragraph, key) => (
						<p key={key}>{paragraph}</p>
					))}
				</div>
			</div>
			<div></div>
		</section>
	);
};

export default ProjectCard;
