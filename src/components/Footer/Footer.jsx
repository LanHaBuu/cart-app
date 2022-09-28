import "./Footer.scss"
import { BsFacebook, BsYoutube, BsTelephoneFill } from "react-icons/bs"
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai"
import { ImLocation2 } from "react-icons/im"
import { BiDownArrow } from "react-icons/bi"
import { useState } from "react"

function Footer() {
	const [showAbout, setShowAbout] = useState(false)
	const [showSupport, setShowSupport] = useState(false)

	return (
		<footer className='footer-wrapper'>
			<div className='footer'>
				<div className='social'>
					<div className='text'>
						<p>
							“Đặt sự hài lòng của khách hàng là ưu tiên số 1
							trong mọi suy nghĩ hành động của mình” là sứ mệnh,
							là triết lý, chiến lược.. luôn cùng YODY tiến bước”
						</p>
					</div>
					<div className='social-icon'>
						<BsFacebook />
						<BsYoutube />
						<AiFillInstagram />
					</div>
				</div>
				<div className='about'>
					<div className='title'>
						<p>VỀ YODY</p>
						<BiDownArrow
							className='btn-mobile'
							onClick={() => setShowAbout(!showAbout)}
						>
							Click
						</BiDownArrow>
					</div>

					<ul
						className={`about-list ${
							showAbout ? "activeFooter" : ""
						}`}
					>
						<li className='about-item'>Giới thiệu</li>
						<li className='about-item'>Liên hệ</li>
						<li className='about-item'>Tuyển dụng</li>
						<li className='about-item'>Tin tức</li>
						<li className='about-item'>Hệ thống cửa hàng</li>
					</ul>
				</div>
				<div className='support'>
					<div className='title'>
						<p>HỖ TRỢ KHÁCH HÀNG</p>
						<BiDownArrow
							className='btn-mobile'
							onClick={() => setShowSupport(!showSupport)}
						>
							Click
						</BiDownArrow>
					</div>

					<ul
						className={`support-list ${
							showSupport ? "activeFooter" : ""
						}`}
					>
						<li className='support-item'>Hướng dẫn chọn size</li>
						<li className='support-item'>
							Chính sách khách hàng thân thiết
						</li>
						<li className='support-item'>Chính sách đổi trả</li>
						<li className='support-item'>Chính sách bảo mật</li>
						<li className='support-item'>Thanh toán, giao nhận</li>
					</ul>
				</div>
				<div className='contact'>
					<div className='location'>
						<ImLocation2 />
						<span>43 Hoàng Diệu, Đà Nẵng</span>
					</div>
					<div className='phone'>
						<BsTelephoneFill />
						<a href='tel:+84 935 22 42 62'>+84 935 22 42 62</a>
					</div>
					<div className='email'>
						<AiOutlineMail />
						<a href='mailto:lanhabuu@gmail.com'>lanhabuu@gmail</a>
					</div>
				</div>
			</div>
			<div className='text-footer'>
				<p>
					Copyright ©2022 All rights reserved | Bản quyền thuộc về{" "}
					<a href='#'>Yody.vn</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
