import { useEffect, useState } from "react"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
	addCart,
	removeCart,
} from "../../components/redux/Slice/ProductAddCart"
import "./Cart.scss"

function Cart() {
	const { data } = useSelector(state => state.cart)
	const [total, setTotal] = useState()
	const dispatch = useDispatch()
	const [amount, setAmount] = useState(null)

	const handleDel = index => {
		dispatch(removeCart(index))
	}

	useEffect(() => {
		let totalAmount = 0
		data.forEach(item => {
			if (item.amount) {
				return (totalAmount = totalAmount + Number(item.amount))
			} else {
				return (totalAmount = totalAmount + 1)
			}
		})
		setAmount(totalAmount)
	}, [data])

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

	return (
		<div className='cart-wrapper'>
			<div className='content'>
				<div className='content-left'>
					<div className='title'>
						<p className='text'>Giỏ hàng</p>
						<p className='count'>{`(${amount}) sản phẩm`}</p>
					</div>
					<div className='product-detail'>
						<div className='header'>
							<ul className='header-list'>
								<li className='header-item'>Sản phẩm</li>
								<li className='header-item'>Đơn giá</li>
								<li className='header-item'>Số lượng</li>
								<li className='header-item'>Thành tiền</li>
							</ul>
						</div>
						{data.length > 0 && (
							<div className='note'>
								<span>
									{Math.floor(Math.random() * 200)} người đang
									có sản phẩm giống bạn trong giỏ hàng.
								</span>
								<span>
									Nhanh tay thanh toán trước khi hết hàng
									nhé!!!
								</span>
							</div>
						)}
						{data && data.length > 0 ? (
							data.map((product, index) => (
								<div className='product' key={product.id}>
									<div className='product-left'>
										<img
											src={product.img}
											alt=''
											className='product-img'
										/>
										<p className='product-desc'>
											{product.description}
										</p>
									</div>
									<div className='price'>
										<p className='new'>
											{product.newPrice}đ
										</p>
										{product.oldPrice && (
											<del className='old'>
												{product.oldPrice}đ
											</del>
										)}
									</div>
									<p className='number'>
										{product.amount ? product.amount : 1}
									</p>

									<div className='last'>
										<p className='total'>
											{product.newPrice}đ
										</p>
										<RiDeleteBin5Fill
											className='icon'
											onClick={() => handleDel(index)}
										/>
									</div>
								</div>
							))
						) : (
							<div className='no-product'>Giỏ hàng trống</div>
						)}
					</div>
				</div>
				<div className='content-right'>
					<div className='total'>
						<p className='text'>{`Tổng đơn hàng (Tạm tính):`}</p>
						<p className='price'>
							{(total * 1000).toLocaleString()}đ
						</p>
					</div>
					<Link
						to='/pay'
						className='pay'
					>{`Thanh toán (${amount})`}</Link>
					<p>Dùng mã giảm giá của YODY trong bước tiếp theo</p>
				</div>
			</div>
		</div>
	)
}

export default Cart
