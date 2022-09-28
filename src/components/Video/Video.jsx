import "./Video.scss"
function Video() {
	return (
		<div className='video-wrapper'>
			<div className='video'>
				<iframe
					width='100%'
					height='520'
					src='https://www.youtube.com/embed/Wbu8WzG8vkM'
					title='Quay Phim Quảng Cáo Shop Thời Trang FARKAS (www.chupanhnoithat.vn)'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div className='text'>
				<p>
					Lolem là thương hiệu thời trang thiết kế cao cấp, tồn tại để
					tôn vinh cái đẹp, giúp mọi người hiểu và nâng cao giá trị
					của bản thân, tạo nguồn cảm hứng và sống hạnh phúc mỗi ngày.
				</p>
				<p>
					LoLem cam kết mang đến cho khách hàng những thiết kế được ưu
					chuộng nhiều nhất với chất lượng sản phẩm và dịch vụ đi kèm
					khiến khách hàng hài lòng cao nhất.
				</p>
			</div>
		</div>
	)
}

export default Video
