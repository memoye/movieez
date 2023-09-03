import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trailerOpen: false,
    trailerId: ''
}

export const trailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        openTrailer: (state, action) => {
            state.trailerId = action.payload
            state.trailerOpen = true
        },
        closeTrailer: (state) => {
            state.trailerOpen = false
        },
    },
})

export const { openTrailer, closeTrailer } = trailerSlice.actions

export default trailerSlice.reducer