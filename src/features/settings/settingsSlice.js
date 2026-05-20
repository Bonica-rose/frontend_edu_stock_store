import { createSlice } from "@reduxjs/toolkit";
import { addOrganization } from "./settingsThunk";

const initialState = {
    organizations:
        JSON.parse(localStorage.getItem("organizations")) || [],
    loading: false,
    error: null,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addOrganization.pending, (state) => {
                state.loading = true;
            })

            .addCase(addOrganization.fulfilled, (state, action) => {
                state.loading = false;

                state.organizations.push(action.payload);

                localStorage.setItem(
                    "organizations",
                    JSON.stringify(state.organizations)
                );
            })

            .addCase(addOrganization.rejected, (state) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    },
});

export default settingsSlice.reducer;
