import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getUsersAPI,
    getUserByIdAPI,
    createUserAPI,
    updateUserAPI,
    deleteUserAPI,
} from "./userAPI";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        try {
            return await getUsersAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response.data.message
            );
        }
    }
);

export const fetchUserById = createAsyncThunk(
    "users/fetchUserById",
    async (id, thunkAPI) => {
        try {
            return await getUserByIdAPI(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response.data.message
            );
        }
    }
);

export const createUser = createAsyncThunk(
    "users/createUser",
    async (data, thunkAPI) => {
        try {
            return await createUserAPI(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response.data.message
            );
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async ({ id, data }, thunkAPI) => {
        try {
            return await updateUserAPI({
                id,
                data,
            });
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response.data.message
            );
        }
    }
);

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, thunkAPI) => {
        try {
            return await deleteUserAPI(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response.data.message
            );
        }
    }
);