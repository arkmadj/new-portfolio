import B54Image from "../components/B54Image";
import { ProjectCardProps } from "../components/ProjectCard";
import SharaImage from "../components/SharaImage";

const projects: Array<ProjectCardProps> = [
	{
		name: "B54",
    date: "January 2022 - July 2023",
		paragraphs: [
      "At B54, I collaborate with designers and product managers on the customer application to implement new features and improve existing ones based on user feedback and product requirements. In addition, I am responsible for implementing end-to-end unit testing, which has reduced regressions by approximately 90%. I was also part of the team that built the marketing website.",
			"Tools I use to achieve this are Vue, NestJS, AdonisJS, NodeJS, Subsockets, Cypress, Quasar.",
		],
    link: "",
    imageComponent: B54Image,
	},
	{
		name: "Shara",
    date: "April 2021 - January 2022",
		paragraphs: [
      "I collaborated with a team of four engineers, one designer, and one product manager from the Flex team. Our goal was to provide a more versatile product with flexible terms. This upgrade allowed a broader range of customers to access our product, ensuring inclusivity and accessibility. As a result, we were able to reduce the churn rate by approximately 20%.",
			"Tools I used to achieve this are ReactNative, TypeScript, Redis, AdonisJS, NodeJS, PostgresDB, MongoDB and JavaScript.",
		],
    link: "",
    imgSrc: "",
    imageComponent: SharaImage,
	},
];

export {projects}
