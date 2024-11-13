import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

function App() {
	return (
		<div className="App overflow-x-hidden bg-first sm:block md:hidden lg:block">
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<footer className="w-full h-48 flex flex-col justify-center items-center bg-zinc ">
				<h4 className="lg:text-3xl text-white">@ Filip Sieniawski</h4>
				<p className="lg:text-xl text-text">
					Phone: +48 577 371 102 | Email: filip.sieniawski3@gmail.com | Linked:{" "}
					<a href="https://www.linkedin.com/in/filip-sieniawski3/">
						filip-sieniawski3
					</a>{" "}
					| GitHub:{" "}
					<a href="https://github.com/Sagittarius-py">Sagittarius-py</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
