import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./Pay.scss"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"

function Pay() {
	const [isActive, setIsActive] = useState(false)
	const { data } = useSelector(state => state.cart)
	let [amount, setAmount] = useState(null)

	const form = useRef()

	const [total, setTotal] = useState()

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

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			address: "",
			province: "",
			ward: "",
			district: "",
			productLength: "",
			nameProduct: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Nhập họ tên")
				.min(4, "Nhập hơn 4 ký tự"),
			email: Yup.string()
				.required("Nhập email")
				.matches(
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
					"Email không đúng định dạng",
				),
			phone: Yup.string()
				.required("Nhập số điện thoại")
				.matches(
					/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
					"Số điện thoại không đúng định dạng",
				),
			address: Yup.string().required("Nhập địa chỉ"),
			province: Yup.string().required("Nhập thành phố"),
			ward: Yup.string().required("Nhập phường/xã"),
			district: Yup.string().required("Nhập quận/huyện"),
		}),

		onSubmit: values => {
			if (values && data.length > 0) {
				emailjs
					.sendForm(
						"service_4izyfxl",
						"template_zy9blzy",
						form.current,
						"iKtj14Amxuh6SGNrV",
					)
					.then(
						result => {
							console.log(result.text)
						},
						error => {
							console.log(error.text)
						},
					)
				toast.success(
					"Đặt hàng thành công! Hãy kiểm tra email của bạn.",
				)
			}
		},
	})

	return (
		<div className='pay-wrapper'>
			<div className='infor-ship'>
				<div className='wrapper-left'>
					<div className='logo'>
						<Link to='/' className='logo'>
							<span>yo</span>
							<span>dy</span>
						</Link>
					</div>
					<div className='wrapper-content'>
						<div className='content'>
							<div className='left'>
								<p className='title-left'>
									Thông tin giao hàng
								</p>
								<form
									ref={form}
									id='address'
									className='form-address'
									onSubmit={formik.handleSubmit}
								>
									<input
										type='text'
										name='name'
										placeholder='Họ và tên'
										spellCheck='false'
										value={formik.values.name}
										onChange={formik.handleChange}
									/>
									{formik.errors.name &&
										formik.touched.name && (
											<p className='err'>
												{formik.errors.name}
											</p>
										)}
									<input
										type='text'
										name='email'
										placeholder='Email'
										spellCheck='false'
										value={formik.values.email}
										onChange={formik.handleChange}
									/>
									{formik.errors.email &&
										formik.touched.email && (
											<p className='err'>
												{formik.errors.email}
											</p>
										)}
									<input
										type='text'
										name='phone'
										placeholder='Số điện thoại'
										spellCheck='false'
										value={formik.values.phone}
										onChange={formik.handleChange}
									/>
									{formik.errors.phone &&
										formik.touched.phone && (
											<p className='err'>
												{formik.errors.phone}
											</p>
										)}
									<input
										type='text'
										name='address'
										placeholder='Địa chỉ'
										spellCheck='false'
										value={formik.values.address}
										onChange={formik.handleChange}
									/>
									{formik.errors.address &&
										formik.touched.address && (
											<p className='err'>
												{formik.errors.address}
											</p>
										)}
									<select
										name='province'
										id='province'
										className='provin'
										value={formik.values.province}
										onChange={formik.handleChange}
									>
										<option>Tỉnh thành</option>
										<option value='Hà Nội'>Hà Nội</option>
										<option value='Hồ Chí Minh'>
											Hồ Chí Minh
										</option>
										<option value='Đà Nẵng'>Đà Nẵng</option>
									</select>
									{formik.errors.province &&
										formik.touched.province && (
											<p className='err'>
												{formik.errors.province}
											</p>
										)}
									<input
										type='text'
										name='ward'
										placeholder='Phường/Xã'
										spellCheck='false'
										value={formik.values.ward}
										onChange={formik.handleChange}
									/>
									{formik.errors.ward &&
										formik.touched.ward && (
											<p className='err'>
												{formik.errors.ward}
											</p>
										)}
									<input
										type='text'
										name='district'
										placeholder='Quận/Huyện'
										spellCheck='false'
										value={formik.values.district}
										onChange={formik.handleChange}
									/>
									{formik.errors.district &&
										formik.touched.district && (
											<p className='err'>
												{formik.errors.district}
											</p>
										)}
									<input
										type='hidden'
										name='productLength'
										value={data.length}
										onChange={formik.handleChange}
									/>
									<input
										type='hidden'
										name='nameProduct'
										value={`${data[0].description}, ${
											data[1] && data[1].description
										}, ${
											data[2] ? data[2].description : ""
										}, ${
											data[3] ? data[3].description : ""
										}, ${
											data[4] ? data[4].description : ""
										}, ${
											data[5] ? data[5].description : ""
										}, ${
											data[6] ? data[6].description : ""
										}, ${
											data[7] ? data[7].description : ""
										}`}
										onChange={formik.handleChange}
									/>

									<span>Ghi chú</span>
									<textarea
										name='note'
										className='note'
										id='note'
										placeholder='Ghi chú(tùy chọn)'
									></textarea>
								</form>
							</div>
							<div className='right'>
								<p className='title-right'>Vận chuyển</p>
								<p className='note-text'>
									Vui lòng nhập thông tin giao hàng
								</p>
								<p className='title-right-down'>Thanh toán</p>
								<p className='note-pay'>
									Bạn chỉ phải thanh toán khi nhận được hàng
								</p>
							</div>
						</div>
						<div className='content-footer'>
							Sau khi <b>hoàn tất đơn hàng</b> khoảng 60-90 phút
							(trong giờ hành chính), YODY sẽ nhanh chóng gọi điện
							xác nhận lại thời gian giao hàng với bạn. YODY xin
							cảm ơn!
						</div>
					</div>
				</div>
			</div>
			<div className='products-pay'>
				<div className='wrapper'>
					<p className='title'>{`Đơn hàng (${amount} sản phẩm)`}</p>
					<div className='products-pay-wrapper'>
						<div className='products-pay-container'>
							{data &&
								data.length > 0 &&
								data.map(product => (
									<div
										className='products-pay-child'
										key={product.id}
									>
										<div className='products-pay-img'>
											<img
												src={product.img}
												alt={product.description}
											/>
											<p className='products-amount'>
												{product.amount
													? product.amount
													: 1}
											</p>
										</div>

										<p className='name'>
											{product.description}
										</p>
										<p className='price'>
											{product.newPrice}đ
										</p>
									</div>
								))}
						</div>

						<div className='discount'>
							<div className='input-wrapper'>
								<label
									htmlFor='disc'
									className={
										isActive ? "label active" : "label"
									}
								>
									Nhập mã giảm giá
								</label>
								<input
									id='disc'
									type='text'
									spellCheck='false'
									onFocus={() => setIsActive(true)}
									onBlur={() => setIsActive(false)}
								/>
							</div>
							<button
								className='access'
								onClick={() =>
									toast.error("Mã giảm giá không tồn tại")
								}
							>
								Áp dụng
							</button>
						</div>

						<div className='total'>
							<p className='text'>Tổng cộng</p>
							<p className='price'>
								{(total * 1000).toLocaleString()}đ
							</p>
						</div>
						<div className='footer'>
							<Link to='/cart' className='back'>
								<span>&#10096; Quay về giỏ hàng</span>
							</Link>
							<input
								type='submit'
								className='pay-button'
								form='address'
								value='Đặt hàng'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pay
