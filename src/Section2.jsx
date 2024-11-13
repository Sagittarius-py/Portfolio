import { motion } from "framer-motion";

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

	const experience = [
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
			degree: ["Junior Web Application Development Engineer"],
			year: "2024",
		},
	];

	// Framer motion animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: -10, transition: { duration: 1.5 } },
	};

	return (
		<div className="relative flex flex-col lg:flex-row w-full bg-first justify-center overflow-hidden shadow-2xl shadow-zinc-900 p-6">
			{/* Education Section */}
			<div className="flex flex-col items-center w-full lg:w-1/2 bg-secc p-6 lg:p-10 space-y-8">
				<h1 className="text-white text-5xl font-semibold mb-4">Education</h1>
				{education.map((elem, index) => (
					<motion.div
						key={index}
						className="w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<p className="text-white text-2xl font-light">{elem.year}</p>
						<div className="w-full lg:w-auto border-t-2 border-accent1 border-dashed flex flex-col lg:ml-4 pt-4">
							<h2 className="text-white text-3xl font-medium">{elem.name}</h2>
							<p className="text-text text-xl font-light">{elem.degree}</p>
						</div>
					</motion.div>
				))}
			</div>

			{/* Experience Section */}
			<div className="flex flex-col items-center w-full lg:w-1/2 bg-third p-6 lg:p-10 space-y-8 mt-10 lg:mt-0">
				<h1 className="text-white text-5xl font-semibold mb-4">Experience</h1>
				{experience.map((elem, index) => (
					<motion.div
						key={index}
						className="w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<p className="text-white text-2xl font-light">{elem.year}</p>
						<div className="w-full lg:w-auto border-t-2 border-accent1 border-dashed flex flex-col lg:mr-4 pt-4">
							<h2 className="text-white text-3xl font-medium">{elem.name}</h2>
							<p className="text-text text-xl font-light">{elem.degree}</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Section2;
