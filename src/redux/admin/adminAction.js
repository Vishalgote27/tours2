import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
export const createTourAction = createAsyncThunk("admin/add-tour", async (tourData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/tours/add-tour", tourData)
        return true
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message)
    }
})


export const readAllToursAction = createAsyncThunk("admin/read-tour", async (tourData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/tours")
        return data.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message)
    }
})


export const deleteToursAction = createAsyncThunk("admin/delete-tour", async (id, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.delete(`/tours/delete/${id}`)
        return data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message)
    }
})


export const updateToursAction = createAsyncThunk("admin/update-tour", async (toursData, { rejectWithValue, getState }) => {
    try {
        console.log(toursData)
        const { data } = await api.put(`/tours/update/${toursData._id}`, toursData)
        return data.result
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message || error.message)
    }
})


export const getBookedToursAction = createAsyncThunk("admin/booked-tours", async (toursData, { rejectWithValue, getState }) => {
    try {
        
        const { data } = await api.get(`/booking`)
        return data.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message || error.message)
    }
})






