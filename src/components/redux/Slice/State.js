import { createSlice } from "@reduxjs/toolkit"

export const State = createSlice({
	name: "state",
	initialState: {
		state: false,
	},
	reducers: {
		stateInputHeader: (state, action) => {
			state.state = action.payload
		},
	},
})

export const { stateInputHeader } = State.actions
export default State.reducer
