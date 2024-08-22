const Section4 = () => {
	const items = [
		{
			title: "FrontEnd",
			content: [
				{ name: "HTML", percent: "95", description: "Lorem ipsum dol...." },
				{
					name: "JavaScript",
					percent: "90",
					description: "Lorem ipsum dol....",
				},
				{ name: "React.js", percent: "85", description: "Lorem ipsum dol...." },
				{
					name: "TypeScript",
					percent: "65",
					description: "Lorem ipsum dol....",
				},
			],
		},
		{
			title: "BackEnd",
			content: [
				{ name: "Express", percent: "90", description: "Lorem ipsum dol...." },
				{ name: "Next.js", percent: "70", description: "Lorem ipsum dol...." },
				{ name: "PHP", percent: "50", description: "Lorem ipsum dol...." },
			],
		},
	];
	const items2 = [
		{
			title: "Other",
			content: [
				{ name: "Python", percent: "70", description: "Lorem ipsum dol...." },
				{ name: "Java", percent: "50", description: "Lorem ipsum dol...." },
				{ name: "C++", percent: "50", description: "Lorem ipsum dol...." },
			],
		},
		{
			title: "Databases",
			content: [
				{ name: "MongoDB", percent: "70", description: "Lorem ipsum dol...." },
				{ name: "MariaDB", percent: "60", description: "Lorem ipsum dol...." },
				{ name: "MySQL", percent: "60", description: "Lorem ipsum dol...." },
				{ name: "MsSQL", percent: "50", description: "Lorem ipsum dol...." },
			],
		},
	];

	return (
		<div className="w-full h-auto bg-first p-8 ">
			<h1 className="text-4xl text-white mb-4 w-full text-center">
				Technologies
			</h1>

			<div className="flex">
				<div className="flex flex-col w-1/2 p-4">
					{items.map((item, index) => (
						<div
							key={index}
							className={`border-accent3 border-2 p-4 rounded-xl bg-second break-inside-avoid h-min mb-8 bg-first`}
						>
							{item.content.map((elem, key) => (
								<div key={key} className="mb-8">
									<h1 className="text-xl text-white">{elem.name}</h1>
									<div className="w-full h-6 bg-secc rounded-xl overflow-hidden drop-shadow relative">
										<div
											className="h-full bg-accent1"
											style={{ width: `${elem.percent}%` }}
										/>
										<p className="text-accent3 z-20 right-2 top-0 absolute">
											{elem.percent}%
										</p>
									</div>
									<p className="text-white font-thin">{elem.description}</p>
								</div>
							))}
						</div>
					))}
				</div>
				<div className="flex flex-col w-1/2 p-4">
					{items2.map((item, index) => (
						<div
							key={index}
							className={`border-accent3  border-2 p-4 rounded-xl bg-second break-inside-avoid h-min mb-8 bg-first`}
						>
							{item.content.map((elem, key) => (
								<div key={key} className="mb-8">
									<h1 className="text-xl text-white">{elem.name}</h1>
									<div className="w-full h-6 bg-secc rounded-xl overflow-hidden drop-shadow relative">
										<div
											className="h-full bg-accent1"
											style={{ width: `${elem.percent}%` }}
										/>
										<p className="text-accent3 z-20 right-2 top-0 absolute">
											{elem.percent}%
										</p>
									</div>
									<p className="text-text font-thin">{elem.description}</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Section4;
