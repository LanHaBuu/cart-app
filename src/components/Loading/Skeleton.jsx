import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./Skeleton.scss"

export const SkeletonProduct = ({ dataLength }) => {
	return (
		<div className='skeleton-product-wrapper'>
			<Skeleton count={dataLength} className='skeleton-product' />
		</div>
	)
}
