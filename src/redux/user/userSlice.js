import { createSlice } from "@reduxjs/toolkit";
import { BookingAction, getSingleBookingAction, loginAction } from "./userAction";

const userSlice = createSlice({
    name: "user",
    initialState: {
        info: JSON.parse(localStorage.getItem("info")) || null
    },
    reducers: {
        invalidate: (state, { payload }) => {
            state[payload] = null
        },
        logout: (state, { payload }) => {
            state.info = null
            localStorage.removeItem("info")
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(loginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.info = payload
            })
            .addCase(loginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(BookingAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(BookingAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.book = true
            })
            .addCase(BookingAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(getSingleBookingAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getSingleBookingAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.Singlebook = payload
            })
            .addCase(getSingleBookingAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { invalidate, logout } = userSlice.actions
export default userSlice.reducer