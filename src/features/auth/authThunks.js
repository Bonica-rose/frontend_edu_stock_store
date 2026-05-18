import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "./authAPI";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, thunkAPI) => {
        try {
            return await registerAPI(formData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (formData, thunkAPI) => {
        try {
            return await loginAPI(formData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);