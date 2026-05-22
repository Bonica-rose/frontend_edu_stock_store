import { createSlice } from "@reduxjs/toolkit";

import {
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser,
    updateUserStatus,
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
                    user.id === action.payload.id
                        ? action.payload
                        : user
                );
            })

            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(
                    (user) =>
                        user.id !== action.payload.id
                );
            });
        
        builder    
            .addCase(updateUserStatus.fulfilled, (state, action) => {
                const { id, status } = action.payload;

                const user = state.users.find((u) => u.id === id);
                if (user) {
                    user.status = status;
                }
            });
    },
});

export default userSlice.reducer;