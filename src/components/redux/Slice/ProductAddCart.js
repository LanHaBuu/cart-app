import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ProductAddCart = createSlice({
	name: "addCart",
	initialState: {
		data: [],
	},
	reducers: {
		addCart: (state, action) => {
			const check = state.data.every(
				item => item.id !== action.payload.id,
			)
			if (check) {
				state.data = [...state.data, action.payload]
				// const index = state.data.findIndex(
				// 	el => el.id === action.payload.id,
				// )
				// state.data[index] = {
				// 	...action.payload,
				// 	amount: ++action.payload.amount,
				// }
				toast.success("Thêm vào giỏ hàng thành công")
			} else {
				toast.error("Sản phẩm đã có trong giỏ hàng")
			}
		},
		removeCart: (state, action) => {
			state.data.splice(action.payload, 1)
		},
		replace: (state, action) => {
			state.dataNew = action.payload
		},
	},
})

export const { addCart, removeCart, replace } = ProductAddCart.actions
export default ProductAddCart.reducer
