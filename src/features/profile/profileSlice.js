import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
    "profile/updateProfile",
    async (data) => {
        return data;
    }
);

const initialState = {
    currentUser:
        JSON.parse(localStorage.getItem("profile")) || {
            fullName: "Babu C V",
            email: "babu@edu.com",
            phone: "+91 9876543210",
            address: "Kollam, Kerala",
            role: "Inventory Manager",
            department: "Inventory",
            branch: "Main Campus",
            employeeId: "EMP-1001",
        },

    loading: false,
    error: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
            })

            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;

                state.currentUser = action.payload;

                localStorage.setItem(
                    "profile",
                    JSON.stringify(action.payload)
                );
            })

            .addCase(updateProfile.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to update profile";
            });
    },
});

export default profileSlice.reducer;