import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

import { saveReview, getAllReviewByVehicle } from './../services/reviewService'
const initialState = {
    reviewList: [],
    http: {
        loading: false,
        success: false,
        error: null
    },
    reviewDetail: null
}




const addReview = createAsyncThunk(
    "/api/reviews",
    async (data, { rejectWithValue }) => {
        try {

            const response = await saveReview(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const getAllReviewsByVehicleId = createAsyncThunk(
    "/api/reviews/:id",
    async (data, { rejectWithValue }) => {
        try {

            const response = await getAllReviewByVehicle(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);



const reviewSlice = createSlice({
    name: "/api/reviews",
    initialState,
    reducers: {
    },
    extraReducers: {
        [addReview.pending]: (state, action) => {
            const http = state.http;
            http.loading = true;
            http.success = false;
            http.error = null;
            state.reviewDetail = null
        },

        [addReview.fulfilled]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = true;
            http.error = null;
            state.reviewDetail = action.payload;


        },

        [addReview.rejected]: (state, action) => {

            const http = state.http;
            http.loading = false;
            http.success = false;
            http.error = action.payload;
            state.reviewDetail = null
        },


        [getAllReviewsByVehicleId.pending]: (state) => {
            const http = state.http;
            http.loading = true;
            http.success = false;
            http.error = null;
            state.reviewList = []
        },

        [getAllReviewsByVehicleId.fulfilled]: (state, action) => {
            const http = state.http;
            http.loading = false;
            http.success = true;
            http.error = null;
            state.reviewList = action.payload;


        },

        [getAllReviewsByVehicleId.rejected]: (state, action) => {

            const http = state.http;
            http.loading = false;
            http.success = false;
            http.error = action.payload;
            state.reviewList = []
        },



    },

});



export default reviewSlice.reducer
export { addReview, getAllReviewsByVehicleId } 