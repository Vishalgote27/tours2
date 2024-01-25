import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
export const loginAction = createAsyncThunk("user/user-login", async (userData, { rejectWithValue, getState }) => {
    try {
        // console.log("XXXXX", userData);
        const { data } = await api.post("/auth/login", userData)
        // console.log(data)
        localStorage.setItem("info", JSON.stringify(data.result))
        return data.result  


    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})


export const BookingAction = createAsyncThunk("user/book", async (bookingData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/booking/book", bookingData)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})

export const getSingleBookingAction = createAsyncThunk("user/single-book", async (id, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get(`/booking/single-book/${id}`)
        return data.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message || error.message)
    }
})




