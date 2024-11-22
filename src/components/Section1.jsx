import React, { useMemo } from "react";
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from "framer-motion";
import { Code, Layers, Rocket } from "lucide-react";

const Section1 = () => {
	const { scrollY } = useScroll();
	const bgY = useTransform(scrollY, [0, 500], ["0%", "20%"]);

	// Generate bubbles with corrected sizing and opacity
	const generateBubbles = useMemo(() => {
		return Array.from({ length: 20 }, (_, index) => ({
			id: index,
			// Use fixed pixel values instead of Tailwind classes for size
			size: Math.floor(Math.random() * 100 + 50), // 50-150px
			// Use rgba values for better control over opacity
			color:
				Math.random() > 0.5
					? "rgba(255, 79, 0, 0.25)"
					: "rgba(239, 104, 23, 0.25)",
			delay: Math.random() * 2,
			initialPosition: {
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`,
			},
		}));
	}, []);

	const bubbleVariants = {
		initial: {
			opacity: 0,
			scale: 0.3,
			x: "-50%",
			y: "-50%",
		},
		animate: (custom) => ({
			opacity: [0.1, 0.3, 0.1], // Increased base opacity
			scale: [0.8, 1.2, 0.8], // Larger scale range
			x: ["-50%", `${Math.random() * 40 - 20}%`, "-50%"],
			y: ["-50%", `${Math.random() * 40 - 20}%`, "-50%"],
			transition: {
				delay: custom.delay,
				duration: 8,
				repeat: Infinity,
				repeatType: "loop",
				ease: "easeInOut",
			},
		}),
	};

	const skillVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (custom) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: custom * 0.2,
				type: "spring",
				stiffness: 300,
				damping: 10,
			},
		}),
		hover: {
			scale: 1.1,
			rotate: [0, 10, -10, 0],
			transition: {
				type: "spring",
				stiffness: 300,
			},
		},
	};

	return (
		<div className="relative overflow-hidden h-screen bg-first">
			{/* Background Bubbles */}
			<motion.div
				className="absolute inset-0 overflow-hidden"
				style={{ y: bgY }}
			>
				{generateBubbles.map((bubble) => (
					<motion.div
						key={bubble.id}
						custom={bubble}
						variants={bubbleVariants}
						initial="initial"
						animate="animate"
						style={{
							position: "absolute",
							top: bubble.initialPosition.top,
							left: bubble.initialPosition.left,
							width: bubble.size,
							height: bubble.size,
							backgroundColor: bubble.color,
							borderRadius: "50%",
							filter: "blur(20px)",
						}}
					/>
				))}
			</motion.div>

			{/* Content */}
			<div className="relative z-10 flex items-center justify-center h-full">
				<div className="text-center max-w-5xl px-4">
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{
								duration: 0.8,
								type: "spring",
								stiffness: 100,
							}}
							className="mb-12"
						>
							<motion.h1
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2, duration: 0.6 }}
								className="text-6xl md:text-8xl font-thin text-white tracking-tight"
							>
								Filip <span className="text-accent1">Sieniawski</span>
							</motion.h1>
							<motion.h2
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
								className="text-2xl md:text-4xl text-text mt-4"
							>
								Web Developer | Creative Technologist
							</motion.h2>
						</motion.div>
					</AnimatePresence>

					<motion.div
						initial="hidden"
						animate="visible"
						className="flex justify-center space-x-8 md:space-x-16"
					>
						{[
							{
								icon: Code,
								label: "Frontend",
								color: "text-accent1",
								index: 0,
							},
							{
								icon: Layers,
								label: "Full-Stack",
								color: "text-white",
								index: 1,
							},
							{
								icon: Rocket,
								label: "Innovation",
								color: "text-accent2",
								index: 2,
							},
						].map(({ icon: Icon, label, color, index }) => (
							<motion.div
								key={label}
								custom={index}
								variants={skillVariants}
								whileHover="hover"
								className="flex flex-col items-center"
							>
								<Icon className={`w-12 h-12 ${color} mb-2`} />
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.2 + 0.6 }}
									className="text-text text-lg"
								>
									{label}
								</motion.span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Section1;
