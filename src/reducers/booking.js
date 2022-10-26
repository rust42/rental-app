import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createBooking, getBookById } from '../services/booking'
const initialState = {
    // vehicleList: [],
    http: {
        loading: false,
        success: false,
        error: null
    },
    bookingDetail: null
}


const bookVehicle = createAsyncThunk(
    "/api/bookings",
    async (data, { rejectWithValue }) => {
        try {
            const response = await createBooking(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const payBooking = createAsyncThunk(
    "/api/bookings",
    async (data, { rejectWithValue }) => {
        try {
            const response = await createBooking(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const getBookingDetailById = createAsyncThunk(
    "/api/bookings",
    async (data, { rejectWithValue }) => {
        try {
            const response = await getBookById(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const bookingSlice = createSlice({
    name: "/api/vehicles",
    initialState,
    reducers: {
    },
    extraReducers: {
        [bookVehicle.pending]: (state) => {
            const http = state.http;
            http.loading = true;
            http.success = false;
            http.error = null;
            state.bookingDetail = null
        },

        [bookVehicle.fulfilled]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = true;
            http.error = null;
            state.bookingDetail = action.payload;

        },

        [bookVehicle.rejected]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = false;
            http.error = action.payload;
            state.bookingDetail = null
        },

        [getBookingDetailById.pending]: (state) => {
            const http = state.http;
            http.loading = true;
            http.success = false;
            http.error = null;
            state.bookingDetail = null
        },

        [getBookingDetailById.fulfilled]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = true;
            http.error = null;
            state.bookingDetail = action.payload;
        },

        [getBookingDetailById.rejected]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = false;
            http.error = action.payload;
            state.bookingDetail = null
        },


    },

});

export default bookingSlice.reducer
export { bookVehicle, payBooking, getBookingDetailById } 
