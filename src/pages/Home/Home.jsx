import ProgressBar from "../../components/Animation/ProgressBar"
import BackToTop from "../../components/Button/BackToTop"
import Outstanding from "../../components/Category/Outstanding/Outstanding"
import Trending from "../../components/Category/Trending/Trending"

import SliderHome from "../../components/SliderCustomer/SliderHome"
import Video from "../../components/Video/Video"
import { DataSlide } from "../../Data/DataSlide"
import { DataTrending } from "../../Data/DataTrending"
import "./Home.scss"

function Home() {
	return (
		<div className='home-wrapper'>
			<SliderHome marginTop='80px' data={DataSlide} />
			<Outstanding />
			<Trending />
			<SliderHome
				marginTop='0px'
				data={DataTrending}
				autoplay={true}
				pauseOnHover={true}
			/>
			<Video />
			<ProgressBar />
			<BackToTop />
		</div>
	)
}

export default Home
