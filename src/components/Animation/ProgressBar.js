import { motion, useScroll } from "framer-motion"

function ProgressBar() {
	const { scrollYProgress } = useScroll()
	return (
		<motion.div
			className='progress-bar'
			style={{
				scaleX: scrollYProgress,
				position: "fixed",
				top: "0",
				left: "0",
				right: "0",
				transformOrigin: "0%",
				height: "5px",
				backgroundColor: "red",
				zIndex: "999999",
			}}
		/>
	)
}

export default ProgressBar
