import { Link } from "react-router-dom"
import { DataOutstanding } from "../../../Data/DataOutstanding"
import "./Outstanding.scss"

function Outstanding() {
	return (
		<div className='outstanding-wrapper'>
			<h4 className='title'>Danh mục nổi bật</h4>

			<div className='category-wrapper'>
				{DataOutstanding.map(item => (
					<div className='category' key={item.id}>
						<Link to='/products'>
							<img src={item.img} alt='category' />
						</Link>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Outstanding
