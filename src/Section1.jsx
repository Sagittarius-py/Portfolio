import bgimage from "./1.jpg";
import photo from "./photo.jpeg";

import Svgcircles from "./Svgcircles";

const Section1 = () => {
	return (
		<div className="relative ">
			<div className="absolute w-[200px] h-[1px] border-t-2 border-accent3 z-20 rotate-90 top-32 left-32 hidden lg:block" />
			<img
				src={bgimage}
				alt="bg"
				className="w-full h-screen filter contrast-150 saturate-75 absolute shadow-2xl shadow-zinc-900"
			/>
			<div className="w-full h-screen bg-first absolute bg-opacity-90 relative ">
				<div className="sm:w-3/6 sm:h-full absolute -right-24 rounded-bl-full bg-accent1 shadow-2xl shadow-zinc-900 " />
				<img
					src={photo}
					alt="circles"
					className="2xl:w-5/12 md:w-7/12 lg:h-full absolute right-0 rounded-bl-full object-cover object-top  shadow-2xl shadow-zinc-900"
				/>
				<div className="flex flex-col lg:flex-row lg:flex-nowrap absolute lg:left-44 bottom-24 lg:bottom-44 lg:scale-125">
					<div className="flex flex-col lg:items-end">
						<h1 className="text-white text-8xl xl:text-9xl font-thin underline decoration-4 decoration-accent1 underline-offset-8">
							Filip
						</h1>
						<h3 className="text-text text-4xl mt-6">Web</h3>
					</div>
					<div className=" lg:h-64 mx-4 -mt-24 hidden lg:block">
						<Svgcircles />
					</div>
					<div className="flex flex-col items-start">
						<h1 className="text-white text-8xl xl:text-9xl font-thin underline decoration-4 decoration-accent1 underline-offset-8">
							Sieniawski
						</h1>
						<h3 className="text-text text-4xl mt-6 ">Developer</h3>
					</div>
				</div>
			</div>
			<div className="absolute w-[200px] h-[1px] border-t-2 border-accent3 z-20 rotate-90 bottom-32 right-32 hidden lg:block" />
		</div>
	);
};

export default Section1;
