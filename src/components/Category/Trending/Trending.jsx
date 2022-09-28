import { Link } from "react-router-dom"
import "./Trending.scss"

function Trending() {
	return (
		<div className='trending-wrapper'>
			<h4 className='title'>Xu hướng tìm kiếm</h4>
			<div className='buttons'>
				<Link to='/products'>Áo khoác 3c plus</Link>
				<Link to='/products'>Đồ thể thao</Link>
				<Link to='/products'>Áo chống nắng</Link>
				<Link to='/products'>Áo thun</Link>
				<Link to='/products'>Áo polo</Link>
			</div>
		</div>
	)
}

export default Trending
