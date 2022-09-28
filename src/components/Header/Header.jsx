import { useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDataProducts } from "../redux/apiRequest"
import { stateInputHeader } from "../redux/Slice/State"
import { RiDeleteBin6Line } from "react-icons/ri"
import "./Header.scss"
import { removeCart } from "../redux/Slice/ProductAddCart"
import { useRef } from "react"

function Header() {
	const [input, setInput] = useState("")
	const [total, setTotal] = useState()
	const [dataInput, setDataInput] = useState([])
	const { dataProducts } = useDataProducts()
	const { state } = useSelector(state => state.state)
	const { data } = useSelector(state => state.cart)
	const [show, setShow] = useState(true)

	const productRef = useRef()

	const dispatch = useDispatch()

	useEffect(() => {
		const dataFindByInput = dataProducts.filter(product =>
			product.description.toLowerCase().includes(input),
		)
		setDataInput(dataFindByInput)
	}, [input])

	useEffect(() => {
		let price = 0
		data.forEach(item => {
			if (item.amount) {
				return (price = price + Number(item.newPrice * item.amount))
			} else {
				return (price = price + Number(item.newPrice))
			}
		})
		setTotal(price)
	}, [data])

	const handleDel = index => {
		dispatch(removeCart(index))
	}

	return (
		<header className='header-wrapper'>
			<div className='header'>
				<Link to='/' className='logo'>
					<span>yo</span>
					<span>dy</span>
				</Link>
				<div className='search'>
					<input
						type='text'
						className='header-input'
						placeholder='Cần tìm áo khoác, áo polo...'
						spellCheck='false'
						value={input}
						onChange={e => {
							setInput(e.target.value)
							dispatch(stateInputHeader(true))
						}}
						onBlur={() => setShow(false)}
						onFocus={() => setShow(true)}
					/>
					<div className='search-icon'>
						<BsSearch />
					</div>
					{state && show && (
						<div className='result'>
							{dataInput && dataInput.length > 0 ? (
								dataInput.map(product => (
									<Link
										to={`/product/${product.id}`}
										className='result-container'
										key={product.id}
										onClick={() => {
											dispatch(stateInputHeader(false))
											setInput("")
										}}
									>
										<img
											src={product.img}
											alt='product'
											className='result-img'
										/>
										<div className='result-right'>
											<p className='result-name'>
												{product.description}
											</p>
											<p className='result-price'>
												{product.newPrice}đ
											</p>
										</div>
									</Link>
								))
							) : (
								<div className='no-result'>
									Không có kết quả tìm kiếm
								</div>
							)}
						</div>
					)}
				</div>
				<div className='cart'>
					<span>Giỏ hàng</span>
					<div className='cart-icon-wrapper'>
						<FaShoppingCart className='cart-icon' />
						<span className='cart-number'>{data.length}</span>
					</div>
					<div className='cart-add-wrapper'>
						<div className='cart-add'>
							{data && data.length > 0 ? (
								Array.from(new Set(data)).map(
									(product, index) => (
										<div
											className='product-cart'
											key={product.id}
										>
											<img
												src={product.img}
												alt=''
												className='cart-product-img'
											/>
											<div className='product'>
												<p className='name'>
													{product.description}
												</p>
												<p className='price'>
													{product.newPrice}đ
												</p>
												<p className='product-count'>
													Số lượng:{" "}
													{product.amount
														? product.amount
														: 1}
												</p>
											</div>
											<div className='recycle'>
												<RiDeleteBin6Line
													onClick={() =>
														handleDel(index)
													}
												/>
											</div>
										</div>
									),
								)
							) : (
								<div className='no-cart'>
									<img
										src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png'
										alt='no-cart'
									/>
									<p>Chưa có sản phẩm</p>
								</div>
							)}
						</div>
						{data.length > 0 && (
							<div className='cart-add-footer'>
								<div className='total'>
									<span className='text'>Tổng cộng:</span>
									<span className='price'>
										{(total * 1000).toLocaleString()}đ
									</span>
								</div>
								<Link to='/cart' className='link-cart'>
									Xem giỏ hàng
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
