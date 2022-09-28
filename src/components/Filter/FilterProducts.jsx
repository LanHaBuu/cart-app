import { useRef } from "react"
import { useDispatch } from "react-redux"
import { decrease, increase } from "../redux/Slice/SortPrice"
import "./FilterProducts.scss"

function FilterProducts({ check }) {
	const dispatch = useDispatch()
	const inputIn = useRef()
	const inputDe = useRef()

	const handleUncheck = () => {
		inputIn.current.checked = false
		inputDe.current.checked = false
		check(false)
	}

	return (
		<div className='filterProducts-wrapper'>
			<h2>Lọc giá</h2>
			<div className='increase'>
				<input
					ref={inputIn}
					type='radio'
					id='increase'
					name='sort'
					onChange={() => {
						dispatch(increase("increase"))
						check(true)
					}}
				/>
				<label htmlFor='increase'>Giá tăng dần</label>
			</div>
			<div className='decrease'>
				<input
					ref={inputDe}
					type='radio'
					id='decrease'
					name='sort'
					onChange={() => {
						dispatch(decrease("decrease"))
						check(true)
					}}
				/>
				<label htmlFor='decrease'>Giá giảm dần</label>
			</div>
			<button
				className='cancel-filter'
				onClick={() => {
					handleUncheck()
				}}
			>
				Bỏ chọn
			</button>
		</div>
	)
}

export default FilterProducts
