import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import bgimage from "../imgs/1.jpg";
import img1 from "../imgs/Social.png";
import img2 from "../imgs/Shop.png";
import img3 from "../imgs/Proton.png";
import img4 from "../imgs/Framework.png";
import img5 from "../imgs/OtakuApp.png";

const Section3 = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 150);
	}, []);

	const projects = [
		{
			id: 1,
			name: "JS-JSX Framework",
			tech: "JavaScript",
			image: img4,
			link: "https://github.com/Sagittarius-py/MiniFramework",
			xoffset: 0,
			active: false,
		},
		{
			id: 2,
			name: "Web Shop",
			tech: "React | Next.js",
			image: img2,
			link: "https://github.com/Sagittarius-py/Sagittarius-Shop-React.ts-Express",
			xoffset: 20,
			active: false,
		},
		{
			id: 3,
			name: "Instagram Clone",
			tech: "React | Next.js",
			image: img1,
			link: "https://github.com/Sagittarius-py/Social-blog-React-Express",
			xoffset: 20,
			active: true,
		},
		{
			id: 4,
			name: "Manga Reader",
			tech: "React Native",
			image: img5,
			link: "https://github.com/Sagittarius-py/Manga_Reader_3.0",
			xoffset: 0,
			active: false,
		},
		{
			id: 5,
			name: "Electrician Tool",
			tech: "PHP Laravel",
			image: img3,
			link: "https://github.com/Sagittarius-py/Neutron-0",
			xoffset: 0,
			active: false,
		},
	];

	const openInNewTab = (url) => {
		window.open(url, "_blank").focus();
	};

	const [hoveredCard, setHoveredCard] = useState(null);

	const handleMouseMove = (e, id) => {
		if (hoveredCard !== id) return;

		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Changed from /10 to /20 to reduce the intensity
		const rotateX = (y - centerY) / 20;
		const rotateY = -(x - centerX) / 20;

		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
	};

	const handleMouseLeave = (e) => {
		setHoveredCard(null);
		e.currentTarget.style.transform =
			"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
	};

	return (
		<div className="overflow-hidden relative bg-white">
			<img
				src={bgimage}
				alt="bg"
				className="w-full h-full filter contrast-150 saturate-50 absolute shadow-2xl shadow-zinc-900 object-cover"
			/>
			<div className="h-screen flex justify-center items-center relative bg-first bg-opacity-50">
				<div className="w-1 h-full bg-accent1 absolute flex justify-center">
					<h1 className="text-accent1 absolute text-4xl bg-first p-4 mt-4 rounded-xl flex items-center gap-2">
						Projects
					</h1>
				</div>

				<div className="w-full max-w-[90%] px-4">
					<motion.div
						ref={carousel}
						className="overflow-hidden cursor-grab h-[80vh] flex items-center"
						whileTap={{ cursor: "grabbing" }}
					>
						<motion.div
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							className="flex gap-8"
						>
							{projects.map((project) => (
								<motion.div
									key={project.id}
									className="min-w-[400px] h-[600px] relative rounded-xl overflow-hidden transition-all duration-300 group mx-8 shadow-md hover:shadow-xl"
									style={{
										transformStyle: "preserve-3d",
										perspective: "3000px",
										transition: "all 0.5s ease",
									}}
									onMouseMove={(e) => handleMouseMove(e, project.id)}
									onMouseEnter={() => setHoveredCard(project.id)}
									onMouseLeave={handleMouseLeave}
								>
									<div
										className="absolute inset-0 bg-cover bg-center group-hover:saturation-25"
										style={{
											backgroundImage: `url(${project.image})`,
											backgroundPosition: `${project?.xoffset}%`,
											transform:
												hoveredCard === project.id
													? "translateZ(50px)"
													: "translateZ(0)",
											transition: "transform 0.5s ease",
										}}
									/>
									<div
										className="absolute inset-0 w-full h-full group-hover:saturation-25 bg-zinc opacity-0 group-hover:opacity-50 duration-300"
										style={{
											transform:
												hoveredCard === project.id
													? "translateZ(75px)"
													: "translateZ(0)",
											transition: "all 0.5s ease",
										}}
									/>
									<div
										className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 hover:bg-opacity-40"
										style={{
											transform:
												hoveredCard === project.id
													? "translateZ(100px)"
													: "translateZ(0)",
											transition: "all 0.5s ease",
										}}
									/>
									<div
										className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 duration-300"
										style={{
											transform:
												hoveredCard === project.id
													? "translateZ(270px)"
													: "translateZ(0)",
											transition: "all 0.5s ease",
										}}
									>
										<div className="flex justify-between items-center mb-3">
											<h2
												className="text-3xl font-bold text-white cursor-pointer hover:text-accent1 transition-colors"
												onClick={() => openInNewTab(project.link)}
											>
												{project.name}
											</h2>
											<ExternalLink
												size={28}
												onClick={() => openInNewTab(project.link)}
												className="text-white cursor-pointer hover:text-accent1 transition-colors"
											/>
										</div>
										<p className="text-accent2 text-xl">{project.tech}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Section3;
