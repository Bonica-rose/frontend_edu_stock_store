import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, changePasswordAPI } from "./authAPI";

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

export const changeUserPassword = createAsyncThunk(
    "auth/changePassword",
    async (formData, thunkAPI) => {
        try {
            return await changePasswordAPI(formData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);