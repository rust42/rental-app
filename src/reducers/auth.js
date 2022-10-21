import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sigin, signup } from "../services/UserService";

const initialState = {
    login: {
        user: null,
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
            return await sigin(data);
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
        }
    },
    extraReducers: {
        [loginUser.pending]:  (state) => {
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