import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllVehicleList, getVehicleById } from './../services/VehicleService'
const initialState = {
    vehicleList: [],
    http: {
        loading: false,
        success: false,
        error: null
    },
    vehicleDetail: null
}


const fetchVehicles = createAsyncThunk(
    "/api/vehicles",
    async (data, { rejectWithValue }) => {
        try {
            const response = await getAllVehicleList();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);



const fetchVehicleById = createAsyncThunk(
    "/api/vehicles/:id",
    async (data, { rejectWithValue }) => {
        try {
            return await getVehicleById(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const vehicleListSlice = createSlice({
    name: "/api/vehicles",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchVehicles.pending]: (state) => {
            const http = state.http;
            http.loading = true;
            http.success = false;
            http.error = null;
            state.vehicleList = []
        },

        [fetchVehicles.fulfilled]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = true;
            http.error = null;
            state.vehicleList = action.payload;
        },

        [fetchVehicles.rejected]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = false;
            http.error = action.payload;
            state.vehicleList = [];
        },

        [fetchVehicleById.pending]: (state) => {
            const http = state.http;
            http.loading = true;
            http.success = false;
            http.error = null;
            state.vehicleDetail = null
        },

        [fetchVehicleById.fulfilled]: (state, action) => {

            const http = state.http;
            http.loading = false;
            http.success = true;
            http.error = null;
            state.vehicleDetail = action.payload;


        },

        [fetchVehicleById.rejected]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = false;
            http.error = action.payload;
            state.vehicleDetail = null
        },
    },

});

export default vehicleListSlice.reducer
export { fetchVehicles, fetchVehicleById } 
