import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { ExternalLink } from "lucide-react";

const Section2 = () => {
	const education = [
		{
			name: "Complex of Schools and Educational Institutions in Nysa",
			degree: "Technician of Information Technology",
			year: "2017",
			link: "https://rolniknysa.pl/",
		},
		{
			name: "University of Applied Sciences In Nysa",
			degree: "Web Systems Engineer",
			year: "2021",
			link: "https://pans.nysa.pl/",
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
			degree: "Junior Plant System Management Technician",
			year: "2018",
			link: "https://wakmet.com.pl/",
		},
		{
			name: "PP Malta Group",
			degree: "Junior Web Development Specialist",
			year: "2022",
		},
		{
			name: "Głuchołazy City Hall ",
			degree: "Junior Web Application Development Engineer",
			year: "2024",
			link: "https://glucholazy.pl/1189/strona-glowna.html",
		},
	];

	// Framer motion animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const SectionCard = ({ title, items, icon: Icon, bgColor }) => (
		<div className={`w-full lg:w-1/2 ${bgColor} p-8 rounded-xl`}>
			<div className="flex items-center mb-8 space-x-4">
				<Icon className="w-12 h-12 text-accent1" />
				<h1 className="text-white text-4xl font-thin">{title}</h1>
			</div>
			<div className="space-y-6">
				{items.map((elem, index) => (
					<motion.div
						key={index}
						className="group"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<a href={elem.link} target={elem.link ? "_blanc" : null}>
							<div className="flex items-center space-x-4">
								<div className="w-16 flex-shrink-0">
									<p className="text-white text-xl font-light opacity-70 group-hover:opacity-100 transition-opacity">
										{elem.year}
									</p>
								</div>
								<div className="flex-grow border-t-2 border-accent1 border-dashed pl-4 pt-4">
									<div className="flex ">
										<h2 className="text-white text-2xl font-medium group-hover:text-accent1 transition-colors">
											{elem.name}
										</h2>
										{elem.link ? (
											<ExternalLink className="text-white cursor-pointer hover:text-accent1 transition-colors" />
										) : null}
									</div>
									<p className="text-text text-lg font-light">{elem.degree}</p>
								</div>
							</div>
						</a>
					</motion.div>
				))}
			</div>
		</div>
	);

	return (
		<div className="relative flex flex-col lg:flex-row w-full bg-first justify-center overflow-hidden p-4 lg:p-8 gap-8">
			<SectionCard
				title="Education"
				items={education}
				icon={GraduationCap}
				bgColor="bg-secc"
			/>
			<SectionCard
				title="Experience"
				items={experience}
				icon={Briefcase}
				bgColor="bg-third"
			/>
		</div>
	);
};

export default Section2;
