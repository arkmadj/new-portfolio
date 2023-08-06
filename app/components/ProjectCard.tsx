import React from "react";

type Props = {
	name: string;
	startDate: string;
	endDate?: string;
	paragraphs: string[];
	link: string;
	imgSrc: string;
};

const ProjectCard = ({
	name,
	startDate,
	endDate,
	paragraphs,
	link,
	imgSrc,
}: Props) => {
	return (
		<section className="flex">
			<div>
				<h2>{name}</h2>
        <p>{startDate}</p>
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
