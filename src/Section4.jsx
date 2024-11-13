import { FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import {
	SiExpress,
	SiNextdotjs,
	SiPhp,
	SiCplusplus,
	SiMongodb,
	SiMariadb,
	SiMysql,
	SiHtml5,
} from "react-icons/si";
import { motion } from "framer-motion";

const Section4 = () => {
	const items = [
		{
			title: "Front-End",
			content: [
				{
					name: "HTML / CSS",
					percent: 90,
					description:
						"Responsive layouts, semantic HTML, and modern CSS techniques.",
					icon: <SiHtml5 />,
				},
				{
					name: "JavaScript / TypeScript",
					percent: 90,
					description:
						"Proficient in ES6+ syntax, TypeScript typing, and asynchronous patterns.",
					icon: <FaJs />,
				},
				{
					name: "React.js / React Native",
					percent: 85,
					description:
						"React hooks, component lifecycle, and mobile-focused development.",
					icon: <FaReact />,
				},
			],
		},
		{
			title: "Back-End",
			content: [
				{
					name: "Express.js / Node.js",
					percent: 90,
					description:
						"Server-side development with Express, including RESTful API design.",
					icon: <SiExpress />,
				},
				{
					name: "Next.js",
					percent: 70,
					description:
						"Server-side rendering and API routes for full-stack React applications.",
					icon: <SiNextdotjs />,
				},
				{
					name: "PHP + Laravel",
					percent: 50,
					description:
						"Efficient with MVC patterns and dynamic content handling with Laravel.",
					icon: <SiPhp />,
				},
			],
		},
	];

	const items2 = [
		{
			title: "Desktop",
			content: [
				{
					name: "Python",
					percent: 70,
					description: "Scripting and backend development.",
					icon: <FaPython />,
				},
				{
					name: "Java",
					percent: 50,
					description: "Object-oriented programming.",
					icon: <FaJava />,
				},
				{
					name: "C / C++",
					percent: 50,
					description: "Memory management and system-level programming.",
					icon: <SiCplusplus />,
				},
			],
		},
		{
			title: "Databases",
			content: [
				{
					name: "MongoDB",
					percent: 70,
					description: "NoSQL database design.",
					icon: <SiMongodb />,
				},
				{
					name: "MariaDB",
					percent: 60,
					description: "Relational database management.",
					icon: <SiMariadb />,
				},
				{
					name: "MySQL",
					percent: 60,
					description: "SQL queries and joins.",
					icon: <SiMysql />,
				},
			],
		},
	];

	return (
		<div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 min-h-screen">
			<h1 className="text-4xl text-white mb-8 text-center font-bold">
				Technologies
			</h1>

			<div className="flex flex-wrap justify-center gap-8">
				{[...items, ...items2].map((category, index) => (
					<div
						key={index}
						className="w-full md:w-5/12 p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-accent2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
					>
						<h2 className="text-2xl text-accent1 mb-6 text-center font-semibold">
							{category.title}
						</h2>
						{category.content.map((skill, idx) => (
							<motion.div
								key={idx}
								className="mb-6 bg-zinc p-4 rounded-xl shadow-inner hover:bg-third hover:shadow-md transition-colors duration-300"
								whileHover={{ scale: 1.05 }}
							>
								<div className="flex items-center ">
									<div className="text-3xl -400 mr-4 text-white">
										{skill.icon}
									</div>
									<div className="flex-1">
										<h3 className="text-lg text-white font-semibold">
											{skill.name}
										</h3>
										<p className="text-sm  text-white">{skill.description}</p>
										<div className="relative w-full h-4 mt-2 bg-secc rounded-full overflow-hidden flex items-center">
											<motion.div
												className="absolute h-full bg-accent2"
												initial={{ width: 0 }}
												animate={{ width: `${skill.percent}%` }}
												transition={{ duration: 1 }}
											></motion.div>
											<span className="absolute right-2 text-sm text-white">
												{skill.percent}%
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Section4;
