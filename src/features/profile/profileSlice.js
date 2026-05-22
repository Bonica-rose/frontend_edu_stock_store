import { createSlice } from "@reduxjs/toolkit";

import {
    fetchProfile,
    updateUserDetails,
    updateUserContacts,
} from "./profileThunk";

const initialState = {
    user_details: null,
    user_contacts: [],
    loading: false,
    error: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder

            // Fetch
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user_details = action.payload.user_details;
                state.user_contacts = action.payload.user_contacts;
            })

            // Update Personal
            .addCase(updateUserDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.user_details = action.payload;
            })

            // Update Contacts
            .addCase(updateUserContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.user_contacts = action.payload;
            });
    },
});

export default profileSlice.reducer;