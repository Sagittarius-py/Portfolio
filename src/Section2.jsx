const Section2 = () => {
	const education = [
		{
			name: "Complex of Schools and Educational Institutions in Nysa",
			degree: "Technician of Information Technology",
			year: "2017",
		},
		{
			name: "University of Applied Sciences In Nysa",
			degree: "Web Systems Engineer",
			year: "2021",
		},
		{
			name: "Degree in Computer Science",
			degree: "Bachelor of Engineering",
			year: "2025",
		},
	];

	const expirience = [
		{
			name: "Wakmet Sp. z.o.o.",
			degree: ["Junior Plant System Management Technician"],
			year: "2018",
		},
		{
			name: "PP Malta Group",
			degree: ["Junior Web Development Specialist"],
			year: "2022",
		},
		{
			name: "Głuchołazy City Hall",
			degree: ["Web Application Developer"],
			year: "2024",
		},
	];

	return (
		<div className="relative flex flex-col lg:flex-row w-screen bg-first flex justify-center overflow-hidden shadow-2xl shadow-zinc-900">
			<div className="absolute w-[200px] h-[1px] border-t-2 border-accent1 z-30 rotate-90 top-32 left-32 opacity-0 lg:opacity-100" />

			<div className="flex flex-col lg:flex-row w-8/12 justify-center">
				<div className="flex flex-col items-end justify-around w-screen lg:w-2/3 h-5/6 bg-secc z-20 mt-20 py-10">
					<h1 className="top-20 text-white text-5xl z-30 p-2 w-full flex justify-center mb-10">
						Education
					</h1>
					{education.map((elem) => {
						return (
							<div className="flex w-3/4">
								<p className="text-white text-2xl px-2 font-thin">
									{elem.year}
								</p>
								<div className=" h-48 border-t-4 border-accent1 border-dashed flex flex-col mt-4">
									<h1 className="text-white text-4xl font-light text-end pr-2">
										{elem.name}
									</h1>
									<h2 className="text-text text-2xl font-thin text-end pr-2">
										{elem.degree}
									</h2>
								</div>
							</div>
						);
					})}
				</div>
				<div className="border-r-4 border-accent1 z-30 h-full absolute" />
				<div className="flex flex-col items-start  justify-around w-screen lg:w-2/3 h-5/6 bg-third  z-20 mt-20 py-10 flex">
					<h1 className="top-20 text-white text-5xl z-30 p-2 w-full flex justify-center mb-10">
						Expirience
					</h1>
					{expirience.map((elem) => {
						return (
							<div className="flex w-3/4">
								<div className="w-96 h-48 border-t-4 border-accent1 border-dashed flex flex-col mt-4 ">
									<h1 className="text-white text-4xl font-light text-end pr-2">
										{elem.name}
									</h1>
									<h2 className="text-text  text-2xl font-thin text-end pr-2">
										{elem.degree}
									</h2>
								</div>
								<p className="text-white text-2xl px-2 font-thin">
									{elem.year}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className="absolute w-[200px] h-[1px] border-t-2 border-accent1 z-20 rotate-90 bottom-32 right-32 opacity-0 lg:opacity-100" />
			{[...Array(100)].map((x, i) => {
				let x_coord = Math.floor(Math.random() * 1920) - 100;
				let y_coord = Math.floor(Math.random() * 800) + 50;
				let x_or_y = Math.floor(Math.random() * 2);

				return (
					<div
						className={`absolute w-[200px] h-[1px] border-t-2 border-text ${
							x_or_y ? "rotate-90" : null
						} z-10`}
						style={{ left: `${x_coord}px`, top: `${y_coord}px` }}
					/>
				);
			})}
		</div>
	);
};

export default Section2;
