import { useState } from "react"
import { useDispatch } from "react-redux"
import Product from "../../components/Product/Product"
import { stateInputHeader } from "../../components/redux/Slice/State"
import ProgressBar from "../../components/Animation/ProgressBar"
import "./Products.scss"
import BackToTop from "../../components/Button/BackToTop"

function Products() {
	const [name, setName] = useState("")

	const handleFilter = e => {
		setName(e.target.name)
		document.querySelector(".active").classList.remove("active")
		e.target.classList.add("active")
	}

	const dispatch = useDispatch()

	const handleUnShowInputHeader = () => {
		dispatch(stateInputHeader(false))
	}

	return (
		<div className='products-wrapper' onClick={handleUnShowInputHeader}>
			<h3 className='title'>
				everyday wear - thoải mái, tự tin mọi lúc mọi nơi
			</h3>
			<div className='buttons'>
				<button
					name='new-product'
					className='active'
					onClick={handleFilter}
				>
					hàng mới về
				</button>
				<button name='best-seller' onClick={handleFilter}>
					bán chạy nhất
				</button>
				<button name='polo' onClick={handleFilter}>
					áo polo
				</button>
				<button name='t-shirt' onClick={handleFilter}>
					áo thun
				</button>
				<button name='jean' onClick={handleFilter}>
					quần jean
				</button>
				<button name='shirt' onClick={handleFilter}>
					áo sơ mi
				</button>
				<button name='skirt' onClick={handleFilter}>
					váy đầm
				</button>
			</div>
			<Product name={name} />
			<BackToTop />
			<ProgressBar />
		</div>
	)
}

export default Products
