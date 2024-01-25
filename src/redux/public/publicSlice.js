import { createSlice } from "@reduxjs/toolkit";
import { RegisterAction,  getTours } from "./publicAction";

const publicSlice = createSlice({
    name: "public",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(RegisterAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(RegisterAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.register = true
            })
            .addCase(RegisterAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            
            .addCase(getTours.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getTours.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tours = payload
            })
            .addCase(getTours.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


    }
})


export default publicSlice.reducer