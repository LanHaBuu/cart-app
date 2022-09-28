import Slider from "react-slick"
import "./SliderHome.scss"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
function SliderHome({
	data,
	marginTop,
	autoplay = false,
	pauseOnHover = false,
}) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay,
		autoplaySpeed: 2000,
		pauseOnHover,
	}
	return (
		<div className='slider-home-wrapper' style={{ marginTop: marginTop }}>
			<Slider {...settings}>
				{data.map(item => (
					<div key={item.id}>
						<img src={item.img} alt='background' />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SliderHome
