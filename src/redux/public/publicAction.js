import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api"


export const RegisterAction = createAsyncThunk("public/register", async (user, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post(`/auth/register`, user)
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message || error.meassage)
    }
})



export const getTours = createAsyncThunk("public/get-public-tour", async (value, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/tours")
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})