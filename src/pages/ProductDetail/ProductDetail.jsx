import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useDataProducts } from "../../components/redux/apiRequest"
import "react-toastify/dist/ReactToastify.css"
import "./ProductDetail.scss"
import { useDispatch, useSelector } from "react-redux"
import { addCart } from "../../components/redux/Slice/ProductAddCart"
import { toast } from "react-toastify"

function ProductDetail() {
	const { id } = useParams()
	const { dataProducts } = useDataProducts()
	const [newData, setNewData] = useState([])
	const [img, setImg] = useState("")
	const [count, setCount] = useState(1)
	const [productIndex, setProductIndex] = useState()
	const { data } = useSelector(state => state.cart)

	const dispatch = useDispatch()

	useEffect(() => {
		if (dataProducts && dataProducts.length > 0) {
			const dataDetail = dataProducts.find(item => item.id === Number(id))
			setNewData(dataDetail)
		}
	}, [id, dataProducts])

	const handleChangeImg = (e, index) => {
		setImg(e.target.src)
		setProductIndex(index)
	}

	const handleCount = e => {
		if (e.target.name === "de") {
			if (count > 1) {
				setCount(count - 1)
			}
		} else {
			setCount(count + 1)
		}
	}

	const handleAdd = () => {
		if (data.every(item => item.id !== newData.id)) {
			newData.amount = count
			dispatch(addCart(newData))
		} else {
			toast.error("Sản phẩm đã có trong giỏ hàng")
		}
	}

	return (
		<div className='product-detail-wrapper'>
			<div className='title'>
				<Link to='/' className='title-main'>
					Trang chủ
				</Link>
				<span>/</span>
				<p className='title-category'>{newData?.categoryTitle}</p>
				<span>/</span>
				<p className='title-des'>{newData?.description}</p>
			</div>
			<div className='content'>
				<img
					src={img || newData.img}
					alt='product-detail'
					className='content-img'
				/>
				<div className='content-detail'>
					<p className='name'>{newData.description}</p>

					<p className='price'>
						{(newData.newPrice * count * 1000).toLocaleString()}đ
					</p>
					<div className='img-content'>
						<img
							src='https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/bannr_kich_thich_mua_desktop.png?1663775434172'
							alt=''
						/>
					</div>
					<div className='others-img'>
						{newData &&
							newData?.othersImage?.map((item, index) => (
								<div key={item}>
									<img
										src={item}
										className={`images ${
											productIndex === index
												? "active"
												: ""
										}`}
										onClick={e => handleChangeImg(e, index)}
									/>
								</div>
							))}
					</div>
					<div className='count'>
						<p className='count-title'>Chọn số lượng:</p>
						<div className='count-content'>
							<button
								className='de'
								name='de'
								onClick={handleCount}
							>
								-
							</button>
							<span className='number'>{count}</span>
							<button
								className='in'
								name='in'
								onClick={handleCount}
							>
								+
							</button>
						</div>
					</div>
					<button className='add-product' onClick={handleAdd}>
						Thêm vào giỏ hàng
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
