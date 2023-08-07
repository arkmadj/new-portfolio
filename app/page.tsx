import AppFooter from "./components/AppFooter";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./constants";

export default function Home() {
	return (
		<main className="min-h-screen w-[1300px] ms-auto me-auto">
			<NavBar />
			<section className="min-h-[calc(100vh-152px)] bg-red-s00 flex items-end">
				<h1 className="font-mono text-[180px] font-extrabold">AHMAD JINADU</h1>
			</section>
			{projects.map((project, key) => (
				<ProjectCard key={key} {...project} />
			))}
			<section className="flex flex-col gap-8 mb-[66px] text-xl font-sans">
				<p>
					Hi, my name is Ahmad, and I am a software engineer based in Lagos,
					Nigeria. My focus is on creating interactive digital experiences on
					the web, and I have collaborated with teams across the world to
					achieve this goal. I have experience working with frameworks such as
					React, ReactNative, Vue, Go, TypeScript, JavaScript, Python, and Rust.
				</p>
				<p>
					In addition to being a software engineer, I am also an illustrator and
					enjoy drawing and character design. I have worked with personal care
					brands, among others. You can find some of my work here.
				</p>
				<p>
					During the weekends, I like to catch up with the Premier League or
					play Valorant online.
				</p>
			</section>
			<section className="flex flex-col gap-5 mb-[100px] font-sans">
				<p>React out {'>>'}</p>
				<p className="text-2xl font-semibold ">ahmadjinadu@gmail.com</p>
			</section>
			<section></section>
			<AppFooter />
		</main>
	);
}
