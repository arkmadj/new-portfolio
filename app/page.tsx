import NavBar from "./components/NavBar";

export default function Home() {
	return (
		<main className="min-h-screen w-[1300px] ms-auto me-auto">
			<NavBar />
			<section className="min-h-[calc(100vh-152px)] bg-red-s00 flex items-end">
				<h1 className=" font-mono text-[180px] font-extrabold">AHMAD JINADU</h1>
			</section>
		</main>
	);
}
