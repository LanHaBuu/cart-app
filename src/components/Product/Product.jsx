import Tippy from "@tippyjs/react"
import { useEffect, useState } from "react"
import "tippy.js/dist/tippy.css"
import { useDataProducts } from "../redux/apiRequest"
import "./Product.scss"
import { SkeletonProduct } from "../Loading/Skeleton"
import FilterProducts from "../Filter/FilterProducts"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCart } from "../redux/Slice/ProductAddCart"

function Product({ name }) {
	const { dataProducts, loading, err } = useDataProducts()
	const [filter, setFilter] = useState([])
	const [productIndex, setProductIndex] = useState("")
	const [img, setImg] = useState()
	const [check, setCheck] = useState(false)

	const { sortPriceValue } = useSelector(state => state.sort)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const handleChangeImg = (e, productByIndex) => {
		setImg(e.target.src)
		setProductIndex(productByIndex)
	}

	useEffect(() => {
		if (!name) {
			const dataFilter = dataProducts.filter(
				data => data.category === "new-product",
			)
			setFilter(dataFilter)
		} else {
			const dataFilter = dataProducts.filter(
				data => data.category === name,
			)
			setFilter(dataFilter)
		}
	}, [dataProducts, name, check])

	const transFormProduct = () => {
		let sortedProduct = filter
		if (check) {
			sortedProduct = sortedProduct.sort((a, b) =>
				sortPriceValue === "increase"
					? a.newPrice - b.newPrice
					: b.newPrice - a.newPrice,
			)
		}
		return sortedProduct
	}

	if (loading) {
		return <SkeletonProduct dataLength={filter.length} />
	}

	const handleRoute = id => {
		navigate(`/product/${id}`)
	}

	const handleAddCart = (e, product) => {
		e.stopPropagation()
		dispatch(addCart(product))
	}

	return (
		<div className='product-wrapper'>
			<FilterProducts check={setCheck} />
			<div className='product-container-wrapper'>
				<p className='product-length'>{filter.length} sản phẩm</p>
				<div className='product-container'>
					{transFormProduct() &&
						transFormProduct().length > 0 &&
						transFormProduct().map(product => (
							<div
								className='product'
								key={product.id}
								onClick={() => handleRoute(product.id)}
							>
								<div className='img-wrapper'>
									<img
										src={
											productIndex.id === product.id
												? img
												: product.img
										}
										alt='Hàng mới về'
										className='product-img'
									/>
									<Tippy
										placement='top'
										content='Thêm vào giỏ hàng'
										delay={200}
									>
										<div
											className='cart'
											onClick={e =>
												handleAddCart(e, product)
											}
										>
											<img
												src='https://bizweb.dktcdn.net/100/438/408/themes/863105/assets/btn_cart.svg?1663810072980'
												alt='addCart'
											/>
										</div>
									</Tippy>
								</div>
								<div className='product-info'>
									<Tippy
										placement='top'
										content={product.description}
										delay={200}
									>
										<p className='name'>
											{product.description}
										</p>
									</Tippy>
									<div className='price'>
										<p
											className='price-new'
											style={{
												color: product.oldPrice
													? "red"
													: "black",
											}}
										>
											{product.newPrice}
										</p>
										<del className='price-old'>
											{product.oldPrice}
										</del>
									</div>
									<div
										className='img-small'
										onClick={e => e.stopPropagation()}
									>
										{product.othersImage.map(
											(item, index) => (
												<img
													key={index}
													src={item}
													alt=''
													className='img-small-detail'
													onClick={e =>
														handleChangeImg(
															e,
															product,
														)
													}
												/>
											),
										)}
									</div>
								</div>

								{product.discount && (
									<div className='discount'>
										{product.discount}%
									</div>
								)}
								{product.new && (
									<div className='new'>{product.new}</div>
								)}
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Product
