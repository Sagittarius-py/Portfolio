import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
	return (
		<div className="App overflow-x-hidden bg-first sm:block md:hidden lg:block">
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<footer className="w-full py-12 flex flex-col justify-center items-center bg-zinc space-y-4">
				<h4 className="text-2xl lg:text-3xl text-white font-light tracking-wide">
					© Filip Sieniawski
				</h4>
				<div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 text-center lg:text-left">
					<div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
						<p className="text-lg lg:text-xl text-text hover:text-accent1 transition-colors">
							<span className="font-medium">Phone:</span> +48 577 371 102
						</p>
						<p className="text-lg lg:text-xl text-text hover:text-accent1 transition-colors">
							<span className="font-medium">Email:</span>{" "}
							<a
								href="mailto:filip.sieniawski3@gmail.com"
								className="hover:text-accent2 transition-colors"
							>
								filip.sieniawski3@gmail.com
							</a>
						</p>
					</div>
					<div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
						<p className="text-lg lg:text-xl text-text">
							<span className="font-medium">LinkedIn:</span>{" "}
							<a
								href="https://www.linkedin.com/in/filip-sieniawski3/"
								className="text-accent1 hover:text-accent2 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								filip-sieniawski3
							</a>
						</p>
						<p className="text-lg lg:text-xl text-text">
							<span className="font-medium">GitHub:</span>{" "}
							<a
								href="https://github.com/Sagittarius-py"
								className="text-accent1 hover:text-accent2 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sagittarius-py
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
