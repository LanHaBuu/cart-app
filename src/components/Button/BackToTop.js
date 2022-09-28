import { useEffect, useState } from "react"
import { BsFillArrowUpSquareFill } from "react-icons/bs"

function BackToTop() {
	const [show, setShow] = useState(false)
	useEffect(() => {
		window.onscroll = function () {
			if (
				document.body.scrollTop > 700 ||
				document.documentElement.scrollTop > 700
			) {
				setShow(true)
			} else {
				setShow(false)
			}
		}
	}, [])

	const handleScroll = () => {
		window.scroll({
			behavior: "smooth",
			top: 0,
		})
	}

	return (
		<>
			{show && (
				<div
					className='back'
					style={{
						position: "fixed",
						bottom: "50px",
						right: "50px",
						fontSize: "2rem",
						color: "#EE4D2D",
						cursor: "pointer",
						userSelect: "none",
					}}
					onClick={handleScroll}
				>
					<BsFillArrowUpSquareFill />
				</div>
			)}
		</>
	)
}

export default BackToTop
