import { createSlice } from "@reduxjs/toolkit"

export const SortPrice = createSlice({
	name: "sort",
	initialState: {
		sortPriceValue: "",
	},
	reducers: {
		increase: (state, action) => {
			state.sortPriceValue = action.payload
		},
		decrease: (state, action) => {
			state.sortPriceValue = action.payload
		},
		check: (state, action) => {
			state.sortPriceValue = action.payload
		},
	},
})

export const { increase, decrease, check } = SortPrice.actions
export default SortPrice.reducer
