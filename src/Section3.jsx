import React, { useRef, useEffect, useState } from "react";
import bgimage from "./1.jpg";

import "./projects_gallery.css";

import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "./Social.png";
import img2 from "./Shop.png";
import img3 from "./Proton.png";
import img4 from "./Framework.png";

import { motion } from "framer-motion";

const Section3 = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
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
			name: "Electrician Tool",
			tech: "PHP Laravel",
			image: img3,
			link: "https://github.com/Sagittarius-py/Neutron-0",
			xoffset: 0,
			active: false,
		},
		{
			id: 4,
			name: "Instagram Clone",
			tech: "React | Next.js",
			image: img1,
			link: "https://github.com/Sagittarius-py/Social-blog-React-Express",
			xoffset: 20,
			active: true,
		},
	];

	const openInNewTab = (url) => {
		window.open(url, "_blank").focus();
	};

	return (
		<div>
			<img
				src={bgimage}
				alt="bg"
				className="h-screen filter contrast-150 saturate-75 absolute shadow-2xl shadow-zinc-900 object-cover "
			/>
			<div className="h-screen flex justify-center items-center relative bg-opacity-50">
				<div className="border-r-4 border-accent1 h-full flex-nowrap absolute " />
				<div className="project-carousel ">
					<motion.div
						ref={carousel}
						className="carousel"
						whileTap={{ cursor: "grabbing" }}
					>
						<motion.div
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							className="inner-carousel"
						>
							{projects.map((project) => {
								return (
									<motion.div
										style={{
											backgroundImage: `url(${project.image})`,
											backgroundPosition: `${project?.xoffset}%`,
										}}
										className="item bg-left -my-1"
										key={project.id}
									>
										<div className="item-content flex flex-col">
											<h1
												className="name"
												onClick={() => openInNewTab(project.link)}
											>
												{project.name}
											</h1>
											<p className="text-white">{project.tech}</p>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Section3;
