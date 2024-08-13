const Section2 = () => {
	return (
		<div className="relative h-screen w-full bg-first flex justify-center pt-20">
			<h1 className="absolute top-20 text-white text-5xl z-30 bg-first p-2">
				Education
			</h1>
			<div className="flex w-10/12 justify-center">
				<div className="flex flex-col items-end w-2/3 h-5/6 bg-secc z-20 mt-20">
					<div className="flex w-2/3 m">
						<p className="text-white text-2xl mt-16  px-2 font-thin">2017</p>
						<div className=" h-48 border-t-4 border-accent1 border-dashed mt-20 flex flex-col">
							<h1 className="text-white text-4xl font-light text-end pr-2">
								Complex of Schools and Educational Institutions in Nysa.
							</h1>
							<h2 className="text-text text-2xl font-thin text-end pr-2">
								Technician of Information Technology
							</h2>
						</div>
					</div>

					<div className="flex w-2/3 mt-36">
						<p className="text-white text-2xl px-2 font-thin">2025</p>
						<div className=" h-48 border-t-4 border-accent1 border-dashed flex flex-col mt-4">
							<h1 className="text-white text-4xl font-light text-end pr-2">
								Bachelor of Engineering in Computer Science
							</h1>
						</div>
					</div>
				</div>
				<div className="border-r-4 border-accent1 z-20 h-full flex-nowrap" />
				<div className="w-2/3 h-5/6 bg-third z-20 mt-20 pt-4 flex">
					<div className=" h-48 border-t-4 border-accent1 border-dashed mt-64 flex flex-col">
						<h1 className="text-white text-4xl font-light pl-2">
							University of Applied Sciences In Nysa
						</h1>
						<h2 className="text-text text-2xl font-thin pl-2">
							Web Systems Engineer
						</h2>
					</div>
					<p className="text-white text-2xl mt-60 px-2 font-thin">2021</p>
				</div>
			</div>
		</div>
	);
};

export default Section2;
