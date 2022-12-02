import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: {}
}
export const counterSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        getMovieDetails: (state, action) =>{
            state.details = action.payload
        }
    }
})
export const { getMovieDetails } = counterSlice.actions;

export default counterSlice.reducer;