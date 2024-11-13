import { motion, useScroll, useTransform } from "framer-motion";
import bgimage from "./1.jpg";
import photo from "./photo.jpeg";
import Svgcircles from "./Svgcircles";

const Section1 = () => {
	// Parallax effect for background image
	const { scrollY } = useScroll();
	const yTransform = useTransform(scrollY, [0, 300], [0, 100]);

	return (
		<div className="relative overflow-hidden">
			{/* Background Image with Parallax Effect */}
			<motion.img
				src={bgimage}
				alt="bg"
				className="w-full h-screen filter contrast-150 saturate-75 absolute shadow-2xl shadow-zinc-900"
				style={{ y: yTransform }}
			/>

			{/* Overlay and Profile Section */}
			<div className="w-full h-screen bg-first absolute bg-opacity-90 relative flex items-center justify-center">
				{/* Accent Shape */}
				<div className="sm:w-3/6 sm:h-full absolute -right-24 rounded-bl-full bg-accent1 shadow-2xl shadow-zinc-900" />

				{/* Profile Image */}
				<img
					src={photo}
					alt="profile"
					className="2xl:w-5/12 md:w-7/12 lg:h-full absolute right-0 rounded-bl-full object-cover object-top shadow-2xl shadow-zinc-900"
				/>

				{/* Text and Animation Container */}
				<div className="flex flex-col lg:flex-row lg:flex-nowrap absolute lg:left-44 bottom-24 lg:bottom-44 lg:scale-125">
					{/* First Name with Animation */}
					<div className="flex flex-col lg:items-end">
						<motion.h1
							className="text-white text-8xl xl:text-9xl font-thin underline decoration-4 decoration-accent1 underline-offset-8 hover:brightness-125"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							Filip
						</motion.h1>
						<motion.h3
							className="text-text text-4xl mt-6 hover:text-accent1 transition-colors duration-300"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							Web
						</motion.h3>
					</div>

					{/* Animated SVG with Bounce */}
					<motion.div
						className="lg:h-64 mx-4 -mt-24 hidden lg:block"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 10,
						}}
					>
						<Svgcircles />
					</motion.div>

					{/* Last Name with Animation */}
					<div className="flex flex-col items-start">
						<motion.h1
							className="text-white text-8xl xl:text-9xl font-thin underline decoration-4 decoration-accent1 underline-offset-8 hover:brightness-125"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
						>
							Sieniawski
						</motion.h1>
						<motion.h3
							className="text-text text-4xl mt-6 hover:text-accent1 transition-colors duration-300"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
						>
							Developer
						</motion.h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section1;
