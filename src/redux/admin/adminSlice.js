import { createSlice } from "@reduxjs/toolkit";
import { createTourAction, deleteToursAction, getBookedToursAction, readAllToursAction, updateToursAction } from "./adminAction";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: state => {
            state.tourAdded = null
            state.error = null
            // state.update = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createTourAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(createTourAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tourAdded = true
            })
            .addCase(createTourAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(readAllToursAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(readAllToursAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tours = payload
            })
            .addCase(readAllToursAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(deleteToursAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteToursAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.deleteTour = true
            })
            .addCase(deleteToursAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(updateToursAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateToursAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.update = true
            })
            .addCase(updateToursAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            
            .addCase(getBookedToursAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getBookedToursAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookings = payload
            })
            .addCase(getBookedToursAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})


export const { invalidate } = adminSlice.actions
export default adminSlice.reducer