import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sigin } from "../services/UserService";
import HttpClient from "../services/HttpClient";

export const userStorageKey = "edu.miu.cs590.car-reservation.token.storage.key";

const storeUserDetail = (userDetail) => {
    HttpClient.setAuthenticationToken(userDetail.token);
    if (userDetail) {
        localStorage.setItem(userStorageKey, JSON.stringify(userDetail));
    }
}

const retrieveUserDetail = () => {
    const userDetailString = localStorage.getItem(userStorageKey);
    if (userDetailString) {
        const userDetail = JSON.parse(userDetailString);
        HttpClient.setAuthenticationToken(userDetail.token);
        return userDetail;
    }
    return null;
}

const clearUserDetail = () => {
    localStorage.removeItem(userStorageKey);
};

const initialState = {
    login: {
        user: retrieveUserDetail(userStorageKey),
        loading: 'idle',
        error: null,
    },
    registration: {
        loading: 'idle',
        error: null,
    }
};

const loginUser = createAsyncThunk(
    "/api/auth/signin",
    async (data, { rejectWithValue }) => {
        try {
            const response = await sigin(data);
            if (response && response.email && response.token) {
                storeUserDetail(response);
            }
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const authSlice = createSlice({
    name: "/api/auth/signin",
    initialState,
    reducers: {
        logout: (state) => {
            state.login.user = null;
            clearUserDetail();
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            const login = state.login;
            login.loading = 'pending';
            login.user = null;
            login.error = null;
        },

        [loginUser.fulfilled]: (state, action) => {
            const login = state.login;
            login.loading = 'success';
            login.user = action.payload;
            login.error = null;
        },

        [loginUser.rejected]: (state, action) => {
            const login = state.login;
            login.loading = 'failed';
            login.user = null;
            login.error = action.payload;
        },
    }
});
export default authSlice.reducer;
export { loginUser };
export const { logout } = authSlice.actions;