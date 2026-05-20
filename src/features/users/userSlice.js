import { createSlice } from "@reduxjs/toolkit";

import {
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser,
} from "./userThunks";

const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })

            .addCase(createUser.fulfilled, (state, action) => {
                state.users.unshift(action.payload);
            })

            .addCase(updateUser.fulfilled, (state, action) => {
                state.users = state.users.map((user) =>
                    user._id === action.payload._id
                        ? action.payload
                        : user
                );
            })

            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(
                    (user) =>
                        user._id !== action.payload._id
                );
            });
    },
});

export default userSlice.reducer;